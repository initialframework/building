import React from "react";
import Bike from "./Bike";
import CafeSignBoard from "./CafeSignBoard";
import Crate from "./Crate";
import Mailbox from "./Mailbox";
import VendingMachine from "./VendingMachine";

function AccFirstFloorFrontLeft({ value }) {
  let accFirstFloorFrontLeft = <CafeSignBoard />;
  switch (value) {
    case "Bike":
      accFirstFloorFrontLeft = <Bike />;
      break;
    case "CafeSignBoard":
      accFirstFloorFrontLeft = <CafeSignBoard />;
      break;
    case "Crate":
      accFirstFloorFrontLeft = <Crate />;
      break;
    case "Mailbox":
      accFirstFloorFrontLeft = <Mailbox />;
      break;
    case "VendingMachine":
      accFirstFloorFrontLeft = <VendingMachine />;
      break;
    default:
      accFirstFloorFrontLeft = <CafeSignBoard />;
  }
  return <>{accFirstFloorFrontLeft}</>;
}

export default AccFirstFloorFrontLeft;
