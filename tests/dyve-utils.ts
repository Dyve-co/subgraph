import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Borrow,
  Cancel,
  Claim,
  Close,
  List,
  Update
} from "../generated/Dyve/Dyve"

export function createBorrowEvent(
  borrower: Address,
  lender: Address,
  dyveId: BigInt,
  tokenId: BigInt,
  collection: Address,
  duration: BigInt,
  collateral: BigInt,
  fee: BigInt,
  expiryDateTime: BigInt,
  status: i32
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
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "expiryDateTime",
      ethereum.Value.fromUnsignedBigInt(expiryDateTime)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return borrowEvent
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
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return cancelEvent
}

export function createClaimEvent(
  borrower: Address,
  lender: Address,
  dyveId: BigInt,
  tokenId: BigInt,
  collection: Address,
  collateral: BigInt,
  status: i32
): Claim {
  let claimEvent = changetype<Claim>(newMockEvent())

  claimEvent.parameters = new Array()

  claimEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  claimEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  claimEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )
  claimEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  claimEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  claimEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  claimEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return claimEvent
}

export function createCloseEvent(
  borrower: Address,
  lender: Address,
  dyveId: BigInt,
  tokenId: BigInt,
  collection: Address,
  collateral: BigInt,
  returnedTokenId: BigInt,
  status: i32
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
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  closeEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  closeEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  closeEvent.parameters.push(
    new ethereum.EventParam(
      "returnedTokenId",
      ethereum.Value.fromUnsignedBigInt(returnedTokenId)
    )
  )
  closeEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return closeEvent
}

export function createListEvent(
  lender: Address,
  dyveId: BigInt,
  tokenId: BigInt,
  collection: Address,
  duration: BigInt,
  collateral: BigInt,
  fee: BigInt,
  status: i32
): List {
  let listEvent = changetype<List>(newMockEvent())

  listEvent.parameters = new Array()

  listEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  listEvent.parameters.push(
    new ethereum.EventParam("dyveId", ethereum.Value.fromUnsignedBigInt(dyveId))
  )
  listEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  listEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  listEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  listEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  listEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return listEvent
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
