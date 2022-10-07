import { OfferType, Actor, Collection, User } from "../generated/schema"
import { ZERO_BD, ZERO_BI } from "../helpers/constants"

// Initialize a new offerType entity
export function initializeOfferType(offerTypeID: string): OfferType {
  const offerType = new OfferType(offerTypeID)
  offerType.totalTransactions = ZERO_BI;
  offerType.totalFeeVolume = ZERO_BD;
  offerType.totalCollateralVolume = ZERO_BD;

  offerType.threeHours = ZERO_BI;
  offerType.sixHours = ZERO_BI;
  offerType.twelveHours = ZERO_BI;
  offerType.oneDay = ZERO_BI;
  offerType.threeDays = ZERO_BI;
  offerType.oneWeek = ZERO_BI;
  offerType.twoWeeks = ZERO_BI;
  offerType.oneMonth = ZERO_BI;

  return offerType;
}

// Initialize a new actor entity
export function initializeActor(actorID: string): Actor {
  const actor = new Actor(actorID)
  actor.totalTransactions = ZERO_BI;
  actor.totalFeeVolume = ZERO_BD;
  actor.totalCollateralVolume = ZERO_BD;

  actor.threeHours = ZERO_BI;
  actor.sixHours = ZERO_BI;
  actor.twelveHours = ZERO_BI;
  actor.oneDay = ZERO_BI;
  actor.threeDays = ZERO_BI;
  actor.oneWeek = ZERO_BI;
  actor.twoWeeks = ZERO_BI;
  actor.oneMonth = ZERO_BI;

  return actor;
}

// Initialize a new collection entity
export function initializeCollection(collectionID: string): Collection {
  const collection = new Collection(collectionID);
  collection.totalTransactions = ZERO_BI;
  collection.totalFeeVolume = ZERO_BD;
  collection.totalCollateralVolume = ZERO_BD;

  collection.threeHours = ZERO_BI;
  collection.sixHours = ZERO_BI;
  collection.twelveHours = ZERO_BI;
  collection.oneDay = ZERO_BI;
  collection.threeDays = ZERO_BI;
  collection.oneWeek = ZERO_BI;
  collection.twoWeeks = ZERO_BI;
  collection.oneMonth = ZERO_BI;

  collection.totalBorrowTransactions = ZERO_BI;
  collection.totalClaimTransactions = ZERO_BI;
  collection.totalCloseTransactions = ZERO_BI;

  collection.currentCollateralVolume = ZERO_BD;
  collection.totalClaimVolume = ZERO_BD;
  collection.currentCollateralVolume = ZERO_BD;

  return collection;
}

// Initialize a new user entity
export function initializeUser(userID: string): User {
  const user = new User(userID);
  user.totalTransactions = ZERO_BI;
  user.totalFeeVolume = ZERO_BD;
  user.totalCollateralVolume = ZERO_BD;

  user.threeHours = ZERO_BI;
  user.sixHours = ZERO_BI;
  user.twelveHours = ZERO_BI;
  user.oneDay = ZERO_BI;
  user.threeDays = ZERO_BI;
  user.oneWeek = ZERO_BI;
  user.twoWeeks = ZERO_BI;
  user.oneMonth = ZERO_BI;

  user.totalBorrowTransactions = ZERO_BI;
  user.totalLendTransactions = ZERO_BI;
  user.totalClaimTransactions = ZERO_BI;
  user.totalCloseTransactions = ZERO_BI;

  return user;
}

