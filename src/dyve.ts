
import { BigInt, TypedMap, Value, log, BigDecimal } from "@graphprotocol/graph-ts"
import { OfferType, Actor, Collection, User, Transaction } from "../generated/schema"
import { toBigDecimal } from "../helpers/utils";
import { ONE_BI, ZERO_BI } from "../helpers/constants"
import { initializeOfferType, initializeActor, initializeCollection, initializeUser } from "../helpers/initializers"

import {
  OrderFulfilled,
  Claim,
  Close,
  CancelMultipleOrders,
} from "../generated/Dyve/Dyve"

// MakerBid == BorrowerBid
// MakerAsk == LenderAsk
// TakerBid == BorrowerBid
// TakerAsk == LenderAsk

const durations = new TypedMap<string, string>()
durations.set("2628000", "oneMonth")
durations.set("1209600", "twoWeeks")
durations.set("604800", "oneWeek")
durations.set("259200", "threeDays")
durations.set("86400", "oneDay")
durations.set("43200", "twelveHours")
durations.set("21600", "sixHours")
durations.set("10800", "threeHours")
durations.set("5", "fiveSeconds")

const durationsEnum = new TypedMap<string, string>()
durationsEnum.set("2628000", "ONE_MONTH")
durationsEnum.set("1209600", "TWO_WEEKS")
durationsEnum.set("604800", "ONE_WEEK")
durationsEnum.set("259200", "THREE_DAYS")
durationsEnum.set("86400", "ONE_DAY")
durationsEnum.set("43200", "TWELVE_HOURS")
durationsEnum.set("21600", "SIX_HOURS")
durationsEnum.set("10800", "THREE_HOURS")
durationsEnum.set("5", "FIVE_SECONDS")

const orderTypesEnum = new TypedMap<number, string>()
orderTypesEnum.set(0, "ETH_TO_ERC721")
orderTypesEnum.set(1, "ETH_TO_ERC1155")
orderTypesEnum.set(2, "ERC20_TO_ERC721")
orderTypesEnum.set(3, "ERC20_TO_ERC1155")
orderTypesEnum.set(4, "ERC721_TO_ERC20")
orderTypesEnum.set(5, "ERC1155_TO_ERC20")

function generateIds(address: string): TypedMap<string, string> {
  const ids = new TypedMap<string, string>()
  ids.set("taker", `${address}-taker`)
  ids.set("maker", `${address}-maker`)
  ids.set("takerAsk", `${address}-taker-ask`)
  ids.set("takerBid", `${address}-taker-bid`)
  ids.set("makerAsk", `${address}-maker-ask`)
  ids.set("makerBid", `${address}-maker-bid`)

  return ids
}

export function handleOrderFulfilled(event: OrderFulfilled): void {
  if ([0, 1, 2, 3].includes(event.params.orderType)) handleTakerBid(event) 
  else handleTakerAsk(event) 
}

export function handleTakerBid(event: OrderFulfilled): void {
  // 1. Collection Taker Bid
  const collectionIds = generateIds(event.params.collection.toHex());
  let collection = Collection.load(event.params.collection.toHex());
  let collectionTakerBid = OfferType.load(collectionIds.get("takerBid") as string);

  if (collection === null) {
    collection = initializeCollection(event.params.collection.toHex());
  }
  if (collectionTakerBid === null) {
    collectionTakerBid = initializeOfferType(collectionIds.get("takerBid") as string);
    collection.takerBid = collectionTakerBid.id
  }

  const duration = durations.get(event.params.duration.toString()) as string;

  collection.totalTransactions = collection.totalTransactions.plus(ONE_BI);
  collection.totalBorrowTransactions = collection.totalBorrowTransactions.plus(ONE_BI);
  collection.totalFeeVolume = collection.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  collection.totalCollateralVolume = collection.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  collection.set(duration, Value.fromBigInt(collection.get(duration)!.toBigInt().plus(ONE_BI)));
  collection.currentCollateralVolume = collection.currentCollateralVolume.plus(toBigDecimal(event.params.collateral));

  collectionTakerBid.totalTransactions = collectionTakerBid.totalTransactions.plus(ONE_BI);
  collectionTakerBid.totalFeeVolume = collectionTakerBid.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  collectionTakerBid.totalCollateralVolume = collectionTakerBid.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  collectionTakerBid.set(duration, Value.fromBigInt(collectionTakerBid.get(duration)!.toBigInt().plus(ONE_BI)));

  collection.save();
  collectionTakerBid.save();
  
  // 2. User Taker Bid
  const borrowerIds = generateIds(event.params.taker.toHex());
  let borrower = User.load(event.params.taker.toHex());
  let borrowerTaker = Actor.load(borrowerIds.get("taker") as string);
  let borrowerTakerBid = OfferType.load(borrowerIds.get("takerBid") as string);

  if (borrower === null) {
    borrower = initializeUser(event.params.taker.toHex());
  }
  if (borrowerTaker === null) {
    borrowerTaker = initializeActor(borrowerIds.get("taker") as string);
    borrower.taker = borrowerTaker.id;
  }
  if (borrowerTakerBid === null) {
    borrowerTakerBid = initializeOfferType(borrowerIds.get("takerBid") as string);
    borrowerTaker.bid = borrowerTakerBid.id;
  }

  borrower.totalTransactions = borrower.totalTransactions.plus(ONE_BI);
  borrower.totalBorrowTransactions = borrower.totalBorrowTransactions.plus(ONE_BI);
  borrower.totalFeeVolume = borrower.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  borrower.totalCollateralVolume = borrower.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  borrower.currentCollateralVolume = borrower.currentCollateralVolume.plus(toBigDecimal(event.params.collateral));
  borrower.set(duration, Value.fromBigInt(borrower.get(duration)!.toBigInt().plus(ONE_BI)));

  borrowerTaker.totalTransactions = borrowerTaker.totalTransactions.plus(ONE_BI);
  borrowerTaker.totalFeeVolume = borrowerTaker.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  borrowerTaker.totalCollateralVolume = borrowerTaker.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  borrowerTaker.set(duration, Value.fromBigInt(borrowerTaker.get(duration)!.toBigInt().plus(ONE_BI)));

  borrowerTakerBid.totalTransactions = borrowerTakerBid.totalTransactions.plus(ONE_BI);
  borrowerTakerBid.totalFeeVolume = borrowerTakerBid.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  borrowerTakerBid.totalCollateralVolume = borrowerTakerBid.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  borrowerTakerBid.set(duration, Value.fromBigInt(borrowerTakerBid.get(duration)!.toBigInt().plus(ONE_BI)));

  borrower.save();
  borrowerTaker.save();
  borrowerTakerBid.save();

  // 2. User Maker Ask
  const lenderIds = generateIds(event.params.maker.toHex());
  let lender = User.load(event.params.maker.toHex());
  let lenderMaker = Actor.load(lenderIds.get("maker") as string);
  let lenderMakerAsk = OfferType.load(lenderIds.get("makerAsk") as string);

  if (lender === null) {
    lender = initializeUser(event.params.maker.toHex());
  }
  if (lenderMaker === null) {
    lenderMaker = initializeActor(lenderIds.get("maker") as string);
    lender.taker = lenderMaker.id;
  }
  if (lenderMakerAsk === null) {
    lenderMakerAsk = initializeOfferType(lenderIds.get("makerAsk") as string);
    lenderMaker.ask = lenderMakerAsk.id;
  }

  lender.totalTransactions = lender.totalTransactions.plus(ONE_BI);
  lender.totalLendTransactions = lender.totalLendTransactions.plus(ONE_BI);
  lender.totalFeeVolume = lender.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  lender.totalCollateralVolume = lender.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  lender.set(duration, Value.fromBigInt(lender.get(duration)!.toBigInt().plus(ONE_BI)));

  lenderMaker.totalTransactions = lenderMaker.totalTransactions.plus(ONE_BI);
  lenderMaker.totalFeeVolume = lenderMaker.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  lenderMaker.totalCollateralVolume = lenderMaker.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  lenderMaker.set(duration, Value.fromBigInt(lenderMaker.get(duration)!.toBigInt().plus(ONE_BI)));

  lenderMakerAsk.totalTransactions = lenderMakerAsk.totalTransactions.plus(ONE_BI);
  lenderMakerAsk.totalFeeVolume = lenderMakerAsk.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  lenderMakerAsk.totalCollateralVolume = lenderMakerAsk.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  lenderMakerAsk.set(duration, Value.fromBigInt(lenderMakerAsk.get(duration)!.toBigInt().plus(ONE_BI)));

  lender.save();
  lenderMaker.save();
  lenderMakerAsk.save();

  // 3. Transaction
  const name = event.params.orderHash.toHex() + "-BORROW"
  const transaction = new Transaction(name);
  transaction.orderHash = event.params.orderHash.toHex();
  transaction.orderNonce = event.params.orderNonce;
  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;
  transaction.collection = collection.id;
  transaction.actionType = "BORROW";
  transaction.tokenId = event.params.tokenId;
  transaction.returnedTokenId = BigInt.fromI32(-1);
  transaction.fee = toBigDecimal(event.params.fee);
  transaction.collateral = toBigDecimal(event.params.collateral);
  transaction.currency = event.params.currency.toHex();
  // transaction.baseCollateral = toBigDecimal(event.params.baseCollateral);
  // transaction.collateralMultiplier = toBigDecimal(event.params.collateralMultiplier);
  transaction.duration = durationsEnum.get(event.params.duration.toString()) as string;
  transaction.expiryDateTime = event.params.expiryDateTime;
  transaction.taker = borrower.id;
  transaction.maker = lender.id;
  transaction.borrower = borrower.id;
  transaction.lender = lender.id;
  transaction.save();
}

export function handleTakerAsk(event: OrderFulfilled): void {
  // 1. Collection Taker Bid
  const collectionIds = generateIds(event.params.collection.toHex());
  let collection = Collection.load(event.params.collection.toHex());
  let collectionTakerAsk = OfferType.load(collectionIds.get("takerAsk") as string);

  if (collection === null) {
    collection = initializeCollection(event.params.collection.toHex());
  }
  if (collectionTakerAsk === null) {
    collectionTakerAsk = initializeOfferType(collectionIds.get("takerAsk") as string);
    collection.takerAsk = collectionTakerAsk.id
  }

  const duration = durations.get(event.params.duration.toString()) as string;

  collection.totalTransactions = collection.totalTransactions.plus(ONE_BI);
  collection.totalBorrowTransactions = collection.totalBorrowTransactions.plus(ONE_BI);
  collection.totalFeeVolume = collection.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  collection.totalCollateralVolume = collection.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  collection.set(duration, Value.fromBigInt(collection.get(duration)!.toBigInt().plus(ONE_BI)));
  collection.currentCollateralVolume = collection.currentCollateralVolume.plus(toBigDecimal(event.params.collateral));

  collectionTakerAsk.totalTransactions = collectionTakerAsk.totalTransactions.plus(ONE_BI);
  collectionTakerAsk.totalFeeVolume = collectionTakerAsk.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  collectionTakerAsk.totalCollateralVolume = collectionTakerAsk.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  collectionTakerAsk.set(duration, Value.fromBigInt(collectionTakerAsk.get(duration)!.toBigInt().plus(ONE_BI)));

  collection.save();
  collectionTakerAsk.save();
  
  // 2. User Maker Bid
  const borrowerIds = generateIds(event.params.taker.toHex());
  let borrower = User.load(event.params.taker.toHex());
  let borrowerMaker = Actor.load(borrowerIds.get("maker") as string);
  let borrowerMakerBid = OfferType.load(borrowerIds.get("makerBid") as string);

  if (borrower === null) {
    borrower = initializeUser(event.params.taker.toHex());
  }
  if (borrowerMaker === null) {
    borrowerMaker = initializeActor(borrowerIds.get("maker") as string);
    borrower.maker = borrowerMaker.id;
  }
  if (borrowerMakerBid === null) {
    borrowerMakerBid = initializeOfferType(borrowerIds.get("makerBid") as string);
    borrowerMaker.bid = borrowerMakerBid.id;
  }

  borrower.totalTransactions = borrower.totalTransactions.plus(ONE_BI);
  borrower.totalBorrowTransactions = borrower.totalBorrowTransactions.plus(ONE_BI);
  borrower.totalFeeVolume = borrower.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  borrower.totalCollateralVolume = borrower.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  borrower.currentCollateralVolume = borrower.currentCollateralVolume.plus(toBigDecimal(event.params.collateral));
  borrower.set(duration, Value.fromBigInt(borrower.get(duration)!.toBigInt().plus(ONE_BI)));

  borrowerMaker.totalTransactions = borrowerMaker.totalTransactions.plus(ONE_BI);
  borrowerMaker.totalFeeVolume = borrowerMaker.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  borrowerMaker.totalCollateralVolume = borrowerMaker.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  borrowerMaker.set(duration, Value.fromBigInt(borrowerMaker.get(duration)!.toBigInt().plus(ONE_BI)));

  borrowerMakerBid.totalTransactions = borrowerMakerBid.totalTransactions.plus(ONE_BI);
  borrowerMakerBid.totalFeeVolume = borrowerMakerBid.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  borrowerMakerBid.totalCollateralVolume = borrowerMakerBid.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  borrowerMakerBid.set(duration, Value.fromBigInt(borrowerMakerBid.get(duration)!.toBigInt().plus(ONE_BI)));

  borrower.save();
  borrowerMaker.save();
  borrowerMakerBid.save();

  // 2. User Taker Ask
  const lenderIds = generateIds(event.params.maker.toHex());
  let lender = User.load(event.params.maker.toHex());
  let lenderTaker = Actor.load(lenderIds.get("maker") as string);
  let lenderTakerAsk = OfferType.load(lenderIds.get("makerAsk") as string);

  if (lender === null) {
    lender = initializeUser(event.params.maker.toHex());
  }
  if (lenderTaker === null) {
    lenderTaker = initializeActor(lenderIds.get("taker") as string);
    lender.taker = lenderTaker.id;
  }
  if (lenderTakerAsk === null) {
    lenderTakerAsk = initializeOfferType(lenderIds.get("makerAsk") as string);
    lenderTaker.ask = lenderTakerAsk.id;
  }

  lender.totalTransactions = lender.totalTransactions.plus(ONE_BI);
  lender.totalLendTransactions = lender.totalLendTransactions.plus(ONE_BI);
  lender.totalFeeVolume = lender.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  lender.totalCollateralVolume = lender.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  lender.set(duration, Value.fromBigInt(lender.get(duration)!.toBigInt().plus(ONE_BI)));

  lenderTaker.totalTransactions = lenderTaker.totalTransactions.plus(ONE_BI);
  lenderTaker.totalFeeVolume = lenderTaker.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  lenderTaker.totalCollateralVolume = lenderTaker.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  lenderTaker.set(duration, Value.fromBigInt(lenderTaker.get(duration)!.toBigInt().plus(ONE_BI)));

  lenderTakerAsk.totalTransactions = lenderTakerAsk.totalTransactions.plus(ONE_BI);
  lenderTakerAsk.totalFeeVolume = lenderTakerAsk.totalFeeVolume.plus(toBigDecimal(event.params.fee));
  lenderTakerAsk.totalCollateralVolume = lenderTakerAsk.totalCollateralVolume.plus(toBigDecimal(event.params.collateral));
  lenderTakerAsk.set(duration, Value.fromBigInt(lenderTakerAsk.get(duration)!.toBigInt().plus(ONE_BI)));

  lender.save();
  lenderTaker.save();
  lenderTakerAsk.save();

  // 3. Transaction
  const name = event.params.orderHash.toHex() + "-BORROW"
  const transaction = new Transaction(name);
  transaction.orderHash = event.params.orderHash.toHex();
  transaction.orderNonce = event.params.orderNonce;
  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;
  transaction.collection = collection.id;
  transaction.actionType = "BORROW";
  transaction.tokenId = event.params.tokenId;
  transaction.returnedTokenId = BigInt.fromI32(-1);
  transaction.fee = toBigDecimal(event.params.fee);
  transaction.collateral = toBigDecimal(event.params.collateral);
  transaction.currency = event.params.currency.toHex();
  // transaction.baseCollateral = toBigDecimal(event.params.baseCollateral);
  // transaction.collateralMultiplier = toBigDecimal(event.params.collateralMultiplier);
  transaction.duration = durationsEnum.get(event.params.duration.toString()) as string;
  transaction.expiryDateTime = event.params.expiryDateTime;
  transaction.taker = borrower.id;
  transaction.maker = lender.id;
  transaction.borrower = borrower.id;
  transaction.lender = lender.id;
  transaction.save();
} 

export function handleClose(event: Close): void {
  // 1. Collection
  let collection = Collection.load(event.params.collection.toHex());
  if (collection === null) throw new Error("Collection does not exist");
  collection.totalTransactions = collection.totalTransactions.plus(ONE_BI);
  collection.currentCollateralVolume = collection.currentCollateralVolume.minus(toBigDecimal(event.params.collateral));
  collection.save();
  
  // 2. borrower
  let borrower = User.load(event.params.borrower.toHex());
  if (borrower === null) throw new Error("Borrower does not exist");
  borrower.totalTransactions = borrower.totalTransactions.plus(ONE_BI);
  borrower.totalCloseTransactions = borrower.totalCloseTransactions.plus(ONE_BI);
  borrower.currentCollateralVolume = borrower.currentCollateralVolume.minus(toBigDecimal(event.params.collateral));
  borrower.save();

  // 3. Transaction
  const name = event.params.orderHash.toHex() + "-CLOSE"
  const transaction = new Transaction(name);
  transaction.orderHash = event.params.orderHash.toHex();
  transaction.orderNonce = ZERO_BI;
  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;
  transaction.collection = collection.id;
  transaction.actionType = "CLOSE";
  transaction.tokenId = event.params.tokenId;
  transaction.returnedTokenId = event.params.returnedTokenId;
  transaction.fee = BigDecimal.fromString("0");
  transaction.collateral = toBigDecimal(event.params.collateral);
  transaction.currency = event.params.currency.toHex();
  // transaction.baseCollateral = toBigDecimal(event.params.baseCollateral);
  // transaction.collateralMultiplier = toBigDecimal(event.params.collateralMultiplier);
  transaction.duration = "NA";
  transaction.expiryDateTime = BigInt.fromI32(0);
  transaction.borrower = borrower.id
  transaction.lender = event.params.lender.toHex();
  transaction.save();
}

export function handleClaim(event: Claim): void {
  // 1. Collection
  let collection = Collection.load(event.params.collection.toHex());
  if (collection === null) throw new Error("Collection does not exist");
  collection.totalTransactions = collection.totalTransactions.plus(ONE_BI);
  collection.currentCollateralVolume = collection.currentCollateralVolume.minus(toBigDecimal(event.params.collateral));
  collection.save();
  
  // 2. lender
  let lender = User.load(event.params.lender.toHex());
  if (lender === null) throw new Error("Lender does not exist");
  lender.totalTransactions = lender.totalTransactions.plus(ONE_BI);
  lender.totalClaimTransactions = lender.totalCloseTransactions.plus(ONE_BI);
  lender.totalClaimVolume = lender.totalClaimVolume.plus(toBigDecimal(event.params.collateral));
  lender.save();

  // 3. Transaction
  const name = event.params.orderHash.toHex() + "-CLAIM"
  const transaction = new Transaction(name);
  transaction.orderHash = event.params.orderHash.toHex();
  transaction.orderNonce = ZERO_BI;
  transaction.date = event.block.timestamp;
  transaction.block = event.block.number;
  transaction.collection = collection.id;
  transaction.actionType = "CLAIM";
  transaction.tokenId = event.params.tokenId;
  transaction.returnedTokenId = BigInt.fromI32(-1);
  transaction.fee = BigDecimal.fromString("0");
  transaction.collateral = toBigDecimal(event.params.collateral);
  transaction.currency = event.params.currency.toHex();
  // transaction.baseCollateral = toBigDecimal(event.params.baseCollateral);
  // transaction.collateralMultiplier = toBigDecimal(event.params.collateralMultiplier);
  transaction.duration = "NA";
  transaction.expiryDateTime = BigInt.fromI32(0);
  transaction.borrower = event.params.borrower.toHex();
  transaction.lender = lender.id;
  transaction.save();
}

export function handleCancel(event: CancelMultipleOrders): void {}
