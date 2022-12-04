// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class OfferType extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OfferType entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OfferType must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OfferType", id.toString(), this);
    }
  }

  static load(id: string): OfferType | null {
    return changetype<OfferType | null>(store.get("OfferType", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value!.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }

  get totalFeeVolume(): BigDecimal {
    let value = this.get("totalFeeVolume");
    return value!.toBigDecimal();
  }

  set totalFeeVolume(value: BigDecimal) {
    this.set("totalFeeVolume", Value.fromBigDecimal(value));
  }

  get totalCollateralVolume(): BigDecimal {
    let value = this.get("totalCollateralVolume");
    return value!.toBigDecimal();
  }

  set totalCollateralVolume(value: BigDecimal) {
    this.set("totalCollateralVolume", Value.fromBigDecimal(value));
  }

  get fiveSeconds(): BigInt {
    let value = this.get("fiveSeconds");
    return value!.toBigInt();
  }

  set fiveSeconds(value: BigInt) {
    this.set("fiveSeconds", Value.fromBigInt(value));
  }

  get threeHours(): BigInt {
    let value = this.get("threeHours");
    return value!.toBigInt();
  }

  set threeHours(value: BigInt) {
    this.set("threeHours", Value.fromBigInt(value));
  }

  get sixHours(): BigInt {
    let value = this.get("sixHours");
    return value!.toBigInt();
  }

  set sixHours(value: BigInt) {
    this.set("sixHours", Value.fromBigInt(value));
  }

  get twelveHours(): BigInt {
    let value = this.get("twelveHours");
    return value!.toBigInt();
  }

  set twelveHours(value: BigInt) {
    this.set("twelveHours", Value.fromBigInt(value));
  }

  get oneDay(): BigInt {
    let value = this.get("oneDay");
    return value!.toBigInt();
  }

  set oneDay(value: BigInt) {
    this.set("oneDay", Value.fromBigInt(value));
  }

  get threeDays(): BigInt {
    let value = this.get("threeDays");
    return value!.toBigInt();
  }

  set threeDays(value: BigInt) {
    this.set("threeDays", Value.fromBigInt(value));
  }

  get oneWeek(): BigInt {
    let value = this.get("oneWeek");
    return value!.toBigInt();
  }

  set oneWeek(value: BigInt) {
    this.set("oneWeek", Value.fromBigInt(value));
  }

  get twoWeeks(): BigInt {
    let value = this.get("twoWeeks");
    return value!.toBigInt();
  }

  set twoWeeks(value: BigInt) {
    this.set("twoWeeks", Value.fromBigInt(value));
  }

  get oneMonth(): BigInt {
    let value = this.get("oneMonth");
    return value!.toBigInt();
  }

  set oneMonth(value: BigInt) {
    this.set("oneMonth", Value.fromBigInt(value));
  }
}

export class Actor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Actor entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Actor must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Actor", id.toString(), this);
    }
  }

  static load(id: string): Actor | null {
    return changetype<Actor | null>(store.get("Actor", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value!.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }

  get totalFeeVolume(): BigDecimal {
    let value = this.get("totalFeeVolume");
    return value!.toBigDecimal();
  }

  set totalFeeVolume(value: BigDecimal) {
    this.set("totalFeeVolume", Value.fromBigDecimal(value));
  }

  get totalCollateralVolume(): BigDecimal {
    let value = this.get("totalCollateralVolume");
    return value!.toBigDecimal();
  }

  set totalCollateralVolume(value: BigDecimal) {
    this.set("totalCollateralVolume", Value.fromBigDecimal(value));
  }

  get fiveSeconds(): BigInt {
    let value = this.get("fiveSeconds");
    return value!.toBigInt();
  }

  set fiveSeconds(value: BigInt) {
    this.set("fiveSeconds", Value.fromBigInt(value));
  }

  get threeHours(): BigInt {
    let value = this.get("threeHours");
    return value!.toBigInt();
  }

  set threeHours(value: BigInt) {
    this.set("threeHours", Value.fromBigInt(value));
  }

  get sixHours(): BigInt {
    let value = this.get("sixHours");
    return value!.toBigInt();
  }

  set sixHours(value: BigInt) {
    this.set("sixHours", Value.fromBigInt(value));
  }

  get twelveHours(): BigInt {
    let value = this.get("twelveHours");
    return value!.toBigInt();
  }

  set twelveHours(value: BigInt) {
    this.set("twelveHours", Value.fromBigInt(value));
  }

  get oneDay(): BigInt {
    let value = this.get("oneDay");
    return value!.toBigInt();
  }

  set oneDay(value: BigInt) {
    this.set("oneDay", Value.fromBigInt(value));
  }

  get threeDays(): BigInt {
    let value = this.get("threeDays");
    return value!.toBigInt();
  }

  set threeDays(value: BigInt) {
    this.set("threeDays", Value.fromBigInt(value));
  }

  get oneWeek(): BigInt {
    let value = this.get("oneWeek");
    return value!.toBigInt();
  }

  set oneWeek(value: BigInt) {
    this.set("oneWeek", Value.fromBigInt(value));
  }

  get twoWeeks(): BigInt {
    let value = this.get("twoWeeks");
    return value!.toBigInt();
  }

  set twoWeeks(value: BigInt) {
    this.set("twoWeeks", Value.fromBigInt(value));
  }

  get oneMonth(): BigInt {
    let value = this.get("oneMonth");
    return value!.toBigInt();
  }

  set oneMonth(value: BigInt) {
    this.set("oneMonth", Value.fromBigInt(value));
  }

  get ask(): string | null {
    let value = this.get("ask");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ask(value: string | null) {
    if (!value) {
      this.unset("ask");
    } else {
      this.set("ask", Value.fromString(<string>value));
    }
  }

  get bid(): string | null {
    let value = this.get("bid");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bid(value: string | null) {
    if (!value) {
      this.unset("bid");
    } else {
      this.set("bid", Value.fromString(<string>value));
    }
  }
}

export class Collection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Collection entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Collection must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Collection", id.toString(), this);
    }
  }

  static load(id: string): Collection | null {
    return changetype<Collection | null>(store.get("Collection", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value!.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }

  get totalBorrowTransactions(): BigInt {
    let value = this.get("totalBorrowTransactions");
    return value!.toBigInt();
  }

  set totalBorrowTransactions(value: BigInt) {
    this.set("totalBorrowTransactions", Value.fromBigInt(value));
  }

  get totalClaimTransactions(): BigInt {
    let value = this.get("totalClaimTransactions");
    return value!.toBigInt();
  }

  set totalClaimTransactions(value: BigInt) {
    this.set("totalClaimTransactions", Value.fromBigInt(value));
  }

  get totalCloseTransactions(): BigInt {
    let value = this.get("totalCloseTransactions");
    return value!.toBigInt();
  }

  set totalCloseTransactions(value: BigInt) {
    this.set("totalCloseTransactions", Value.fromBigInt(value));
  }

  get totalFeeVolume(): BigDecimal {
    let value = this.get("totalFeeVolume");
    return value!.toBigDecimal();
  }

  set totalFeeVolume(value: BigDecimal) {
    this.set("totalFeeVolume", Value.fromBigDecimal(value));
  }

  get totalCollateralVolume(): BigDecimal {
    let value = this.get("totalCollateralVolume");
    return value!.toBigDecimal();
  }

  set totalCollateralVolume(value: BigDecimal) {
    this.set("totalCollateralVolume", Value.fromBigDecimal(value));
  }

  get totalClaimVolume(): BigDecimal {
    let value = this.get("totalClaimVolume");
    return value!.toBigDecimal();
  }

  set totalClaimVolume(value: BigDecimal) {
    this.set("totalClaimVolume", Value.fromBigDecimal(value));
  }

  get fiveSeconds(): BigInt {
    let value = this.get("fiveSeconds");
    return value!.toBigInt();
  }

  set fiveSeconds(value: BigInt) {
    this.set("fiveSeconds", Value.fromBigInt(value));
  }

  get threeHours(): BigInt {
    let value = this.get("threeHours");
    return value!.toBigInt();
  }

  set threeHours(value: BigInt) {
    this.set("threeHours", Value.fromBigInt(value));
  }

  get sixHours(): BigInt {
    let value = this.get("sixHours");
    return value!.toBigInt();
  }

  set sixHours(value: BigInt) {
    this.set("sixHours", Value.fromBigInt(value));
  }

  get twelveHours(): BigInt {
    let value = this.get("twelveHours");
    return value!.toBigInt();
  }

  set twelveHours(value: BigInt) {
    this.set("twelveHours", Value.fromBigInt(value));
  }

  get oneDay(): BigInt {
    let value = this.get("oneDay");
    return value!.toBigInt();
  }

  set oneDay(value: BigInt) {
    this.set("oneDay", Value.fromBigInt(value));
  }

  get threeDays(): BigInt {
    let value = this.get("threeDays");
    return value!.toBigInt();
  }

  set threeDays(value: BigInt) {
    this.set("threeDays", Value.fromBigInt(value));
  }

  get oneWeek(): BigInt {
    let value = this.get("oneWeek");
    return value!.toBigInt();
  }

  set oneWeek(value: BigInt) {
    this.set("oneWeek", Value.fromBigInt(value));
  }

  get twoWeeks(): BigInt {
    let value = this.get("twoWeeks");
    return value!.toBigInt();
  }

  set twoWeeks(value: BigInt) {
    this.set("twoWeeks", Value.fromBigInt(value));
  }

  get oneMonth(): BigInt {
    let value = this.get("oneMonth");
    return value!.toBigInt();
  }

  set oneMonth(value: BigInt) {
    this.set("oneMonth", Value.fromBigInt(value));
  }

  get currentCollateralVolume(): BigDecimal {
    let value = this.get("currentCollateralVolume");
    return value!.toBigDecimal();
  }

  set currentCollateralVolume(value: BigDecimal) {
    this.set("currentCollateralVolume", Value.fromBigDecimal(value));
  }

  get takerBid(): string | null {
    let value = this.get("takerBid");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set takerBid(value: string | null) {
    if (!value) {
      this.unset("takerBid");
    } else {
      this.set("takerBid", Value.fromString(<string>value));
    }
  }

  get takerAsk(): string | null {
    let value = this.get("takerAsk");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set takerAsk(value: string | null) {
    if (!value) {
      this.unset("takerAsk");
    } else {
      this.set("takerAsk", Value.fromString(<string>value));
    }
  }

  get transactions(): Array<string> {
    let value = this.get("transactions");
    return value!.toStringArray();
  }

  set transactions(value: Array<string>) {
    this.set("transactions", Value.fromStringArray(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value!.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }

  get totalBorrowTransactions(): BigInt {
    let value = this.get("totalBorrowTransactions");
    return value!.toBigInt();
  }

  set totalBorrowTransactions(value: BigInt) {
    this.set("totalBorrowTransactions", Value.fromBigInt(value));
  }

  get totalLendTransactions(): BigInt {
    let value = this.get("totalLendTransactions");
    return value!.toBigInt();
  }

  set totalLendTransactions(value: BigInt) {
    this.set("totalLendTransactions", Value.fromBigInt(value));
  }

  get totalClaimTransactions(): BigInt {
    let value = this.get("totalClaimTransactions");
    return value!.toBigInt();
  }

  set totalClaimTransactions(value: BigInt) {
    this.set("totalClaimTransactions", Value.fromBigInt(value));
  }

  get totalCloseTransactions(): BigInt {
    let value = this.get("totalCloseTransactions");
    return value!.toBigInt();
  }

  set totalCloseTransactions(value: BigInt) {
    this.set("totalCloseTransactions", Value.fromBigInt(value));
  }

  get totalFeeVolume(): BigDecimal {
    let value = this.get("totalFeeVolume");
    return value!.toBigDecimal();
  }

  set totalFeeVolume(value: BigDecimal) {
    this.set("totalFeeVolume", Value.fromBigDecimal(value));
  }

  get totalCollateralVolume(): BigDecimal {
    let value = this.get("totalCollateralVolume");
    return value!.toBigDecimal();
  }

  set totalCollateralVolume(value: BigDecimal) {
    this.set("totalCollateralVolume", Value.fromBigDecimal(value));
  }

  get totalClaimVolume(): BigDecimal {
    let value = this.get("totalClaimVolume");
    return value!.toBigDecimal();
  }

  set totalClaimVolume(value: BigDecimal) {
    this.set("totalClaimVolume", Value.fromBigDecimal(value));
  }

  get fiveSeconds(): BigInt {
    let value = this.get("fiveSeconds");
    return value!.toBigInt();
  }

  set fiveSeconds(value: BigInt) {
    this.set("fiveSeconds", Value.fromBigInt(value));
  }

  get threeHours(): BigInt {
    let value = this.get("threeHours");
    return value!.toBigInt();
  }

  set threeHours(value: BigInt) {
    this.set("threeHours", Value.fromBigInt(value));
  }

  get sixHours(): BigInt {
    let value = this.get("sixHours");
    return value!.toBigInt();
  }

  set sixHours(value: BigInt) {
    this.set("sixHours", Value.fromBigInt(value));
  }

  get twelveHours(): BigInt {
    let value = this.get("twelveHours");
    return value!.toBigInt();
  }

  set twelveHours(value: BigInt) {
    this.set("twelveHours", Value.fromBigInt(value));
  }

  get oneDay(): BigInt {
    let value = this.get("oneDay");
    return value!.toBigInt();
  }

  set oneDay(value: BigInt) {
    this.set("oneDay", Value.fromBigInt(value));
  }

  get threeDays(): BigInt {
    let value = this.get("threeDays");
    return value!.toBigInt();
  }

  set threeDays(value: BigInt) {
    this.set("threeDays", Value.fromBigInt(value));
  }

  get oneWeek(): BigInt {
    let value = this.get("oneWeek");
    return value!.toBigInt();
  }

  set oneWeek(value: BigInt) {
    this.set("oneWeek", Value.fromBigInt(value));
  }

  get twoWeeks(): BigInt {
    let value = this.get("twoWeeks");
    return value!.toBigInt();
  }

  set twoWeeks(value: BigInt) {
    this.set("twoWeeks", Value.fromBigInt(value));
  }

  get oneMonth(): BigInt {
    let value = this.get("oneMonth");
    return value!.toBigInt();
  }

  set oneMonth(value: BigInt) {
    this.set("oneMonth", Value.fromBigInt(value));
  }

  get currentCollateralVolume(): BigDecimal {
    let value = this.get("currentCollateralVolume");
    return value!.toBigDecimal();
  }

  set currentCollateralVolume(value: BigDecimal) {
    this.set("currentCollateralVolume", Value.fromBigDecimal(value));
  }

  get taker(): string | null {
    let value = this.get("taker");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set taker(value: string | null) {
    if (!value) {
      this.unset("taker");
    } else {
      this.set("taker", Value.fromString(<string>value));
    }
  }

  get maker(): string | null {
    let value = this.get("maker");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set maker(value: string | null) {
    if (!value) {
      this.unset("maker");
    } else {
      this.set("maker", Value.fromString(<string>value));
    }
  }

  get takerTransactions(): Array<string> {
    let value = this.get("takerTransactions");
    return value!.toStringArray();
  }

  set takerTransactions(value: Array<string>) {
    this.set("takerTransactions", Value.fromStringArray(value));
  }

  get makerTransactions(): Array<string> {
    let value = this.get("makerTransactions");
    return value!.toStringArray();
  }

  set makerTransactions(value: Array<string>) {
    this.set("makerTransactions", Value.fromStringArray(value));
  }

  get borrowerTransactions(): Array<string> {
    let value = this.get("borrowerTransactions");
    return value!.toStringArray();
  }

  set borrowerTransactions(value: Array<string>) {
    this.set("borrowerTransactions", Value.fromStringArray(value));
  }

  get lenderTransactions(): Array<string> {
    let value = this.get("lenderTransactions");
    return value!.toStringArray();
  }

  set lenderTransactions(value: Array<string>) {
    this.set("lenderTransactions", Value.fromStringArray(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get orderHash(): string {
    let value = this.get("orderHash");
    return value!.toString();
  }

  set orderHash(value: string) {
    this.set("orderHash", Value.fromString(value));
  }

  get orderType(): string {
    let value = this.get("orderType");
    return value!.toString();
  }

  set orderType(value: string) {
    this.set("orderType", Value.fromString(value));
  }

  get orderNonce(): BigInt {
    let value = this.get("orderNonce");
    return value!.toBigInt();
  }

  set orderNonce(value: BigInt) {
    this.set("orderNonce", Value.fromBigInt(value));
  }

  get date(): BigInt {
    let value = this.get("date");
    return value!.toBigInt();
  }

  set date(value: BigInt) {
    this.set("date", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get actionType(): string {
    let value = this.get("actionType");
    return value!.toString();
  }

  set actionType(value: string) {
    this.set("actionType", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get returnedTokenId(): BigInt {
    let value = this.get("returnedTokenId");
    return value!.toBigInt();
  }

  set returnedTokenId(value: BigInt) {
    this.set("returnedTokenId", Value.fromBigInt(value));
  }

  get fee(): BigDecimal {
    let value = this.get("fee");
    return value!.toBigDecimal();
  }

  set fee(value: BigDecimal) {
    this.set("fee", Value.fromBigDecimal(value));
  }

  get collateral(): BigDecimal {
    let value = this.get("collateral");
    return value!.toBigDecimal();
  }

  set collateral(value: BigDecimal) {
    this.set("collateral", Value.fromBigDecimal(value));
  }

  get currency(): string {
    let value = this.get("currency");
    return value!.toString();
  }

  set currency(value: string) {
    this.set("currency", Value.fromString(value));
  }

  get duration(): string {
    let value = this.get("duration");
    return value!.toString();
  }

  set duration(value: string) {
    this.set("duration", Value.fromString(value));
  }

  get expiryDateTime(): BigInt {
    let value = this.get("expiryDateTime");
    return value!.toBigInt();
  }

  set expiryDateTime(value: BigInt) {
    this.set("expiryDateTime", Value.fromBigInt(value));
  }

  get taker(): string | null {
    let value = this.get("taker");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set taker(value: string | null) {
    if (!value) {
      this.unset("taker");
    } else {
      this.set("taker", Value.fromString(<string>value));
    }
  }

  get maker(): string | null {
    let value = this.get("maker");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set maker(value: string | null) {
    if (!value) {
      this.unset("maker");
    } else {
      this.set("maker", Value.fromString(<string>value));
    }
  }

  get borrower(): string | null {
    let value = this.get("borrower");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set borrower(value: string | null) {
    if (!value) {
      this.unset("borrower");
    } else {
      this.set("borrower", Value.fromString(<string>value));
    }
  }

  get lender(): string | null {
    let value = this.get("lender");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lender(value: string | null) {
    if (!value) {
      this.unset("lender");
    } else {
      this.set("lender", Value.fromString(<string>value));
    }
  }
}
