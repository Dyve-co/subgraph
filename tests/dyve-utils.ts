import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Borrow,
  BorrowToShort,
  Cancel,
  Close,
  Expired,
  ListingEvent,
  Update
} from "../generated/Dyve/Dyve"

export function createBorrowEvent(
  borrower: Address,
  lender: Address,
  dyveId: BigInt,
  tokenId: BigInt
): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("tokenId", ethereum.Value.fromUnsignedBigInt(tokenId))
  )

  return borrowEvent
}

export function createBorrowToShortEvent(
  borrower: Address,
  lender: Address,
  dyveId: BigInt,
  tokenId: BigInt
): BorrowToShort {
  let borrowToShortEvent = changetype<BorrowToShort>(newMockEvent())

  borrowToShortEvent.parameters = new Array()

  borrowToShortEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  borrowToShortEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  borrowToShortEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )
  borrowToShortEvent.parameters.push(
    new ethereum.EventParam("tokenId", ethereum.Value.fromUnsignedBigInt(tokenId))
  )

  return borrowToShortEvent
}

export function createCancelEvent(
  borrower: Address,
  lender: Address,
  dyveId: BigInt,
  tokenId: BigInt
): Cancel {
  let cancelEvent = changetype<Cancel>(newMockEvent())

  cancelEvent.parameters = new Array()

  cancelEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )
  cancelEvent.parameters.push(
    new ethereum.EventParam("tokenId", ethereum.Value.fromUnsignedBigInt(tokenId))
  )

  return cancelEvent
}

export function createCloseEvent(
  borrower: Address,
  lender: Address,
  dyveId: BigInt,
  originalNFTcollectionID: BigInt,
  returnedNFTCollectionID: BigInt
): Close {
  let closeEvent = changetype<Close>(newMockEvent())

  closeEvent.parameters = new Array()

  closeEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  closeEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  closeEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )
  closeEvent.parameters.push(
    new ethereum.EventParam(
      "originalNFTcollectionID",
      ethereum.Value.fromUnsignedBigInt(originalNFTcollectionID)
    )
  )
  closeEvent.parameters.push(
    new ethereum.EventParam(
      "returnedNFTCollectionID",
      ethereum.Value.fromUnsignedBigInt(returnedNFTCollectionID)
    )
  )

  return closeEvent
}

export function createExpiredEvent(
  borrower: Address,
  lender: Address,
  dyveId: BigInt
): Expired {
  let expiredEvent = changetype<Expired>(newMockEvent())

  expiredEvent.parameters = new Array()

  expiredEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  expiredEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  expiredEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )

  return expiredEvent
}

export function createListingEventEvent(
  lender: Address,
  dyveId: BigInt,
  tokenId: BigInt
): ListingEvent {
  let listingEventEvent = changetype<ListingEvent>(newMockEvent())

  listingEventEvent.parameters = new Array()

  listingEventEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  listingEventEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )
  listingEventEvent.parameters.push(
    new ethereum.EventParam("tokenId", ethereum.Value.fromUnsignedBigInt(tokenId))
  )

  return listingEventEvent
}

export function createUpdateEvent(
  dyveId: BigInt,
  newFee: BigInt,
  newCollateral: BigInt,
  newDuration: BigInt
): Update {
  let updateEvent = changetype<Update>(newMockEvent())

  updateEvent.parameters = new Array()

  updateEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )
  updateEvent.parameters.push(
    new ethereum.EventParam("newFee", ethereum.Value.fromUnsignedBigInt(newFee))
  )
  updateEvent.parameters.push(
    new ethereum.EventParam(
      "newCollateral",
      ethereum.Value.fromUnsignedBigInt(newCollateral)
    )
  )
  updateEvent.parameters.push(
    new ethereum.EventParam(
      "newDuration",
      ethereum.Value.fromUnsignedBigInt(newDuration)
    )
  )

  return updateEvent
}
