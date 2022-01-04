import React from "react";

const Bike = React.lazy(() => import("./Bike"));
const CafeSignBoard = React.lazy(() => import("./CafeSignBoard"));
const Crate = React.lazy(() => import("./Crate"));
const Mailbox = React.lazy(() => import("./Mailbox"));
const VendingMachine = React.lazy(() => import("./VendingMachine"));

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
