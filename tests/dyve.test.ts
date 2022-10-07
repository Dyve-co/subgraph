import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Borrow } from "../generated/Dyve/Dyve"
import { handleClaim, handleTakerBid } from "../src/dyve"
import { createBorrowEvent, createClaimEvent, createCloseEvent } from "./dyve-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0
const ONE_MONTH = 2628000;
const TWO_WEEKS = 1209600;
const ONE_WEEK = 604800;
const THREE_DAYS = 259200;
const ONE_DAY = 86400;
const TWELVE_HOURS = 43200;
const SIX_HOURS = 21600;
const THREE_HOURS = 10800;

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let borrower = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let lender = Address.fromString(
      "0x0000000000000000000000000000000000000002"
    )

    let dyveId = BigInt.fromI32(1)
    let tokenId = BigInt.fromI32(234)
    let returnedTokenId = BigInt.fromI32(235)
    let collection = Address.fromString(
      "0x0000000000000000000000000000000000000003"
    )
    let duration = BigInt.fromI32(THREE_HOURS)
    let collateral = BigInt.fromI32(1000)
    let fee = BigInt.fromI32(10)
    let expiryDateTime = BigInt.fromI32(1000000000)

    let newBorrowEvent = createBorrowEvent(
      borrower,
      lender,
      dyveId,
      tokenId,
      collection,
      duration,
      collateral,
      fee,
      expiryDateTime,
      1
    )
    let newClaimEvent = createClaimEvent(
      borrower,
      lender,
      dyveId,
      tokenId,
      collection,
      collateral,
      2
    )

    handleTakerBid(newBorrowEvent)
    handleClaim(newClaimEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("Collection", 1)
    assert.entityCount("User", 2)
    assert.entityCount("Transaction", 1)
    assert.entityCount("Actor", 2)
    assert.entityCount("OfferType", 3)

    // // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    // assert.fieldEquals(
    //   "Collection",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "borrower",
    //   "0x0000000000000000000000000000000000000001"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "lender",
    //   "0x0000000000000000000000000000000000000001"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "dyveId",
    //   "234"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "tokenId",
    //   "234"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "collection",
    //   "0x0000000000000000000000000000000000000001"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "duration",
    //   "234"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "collateral",
    //   "234"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "fee",
    //   "234"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "expiryDateTime",
    //   "234"
    // )
    // assert.fieldEquals(
    //   "ExampleEntity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "status",
    //   "123"
    // )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
