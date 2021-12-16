import React from "react";
import BlueTrashBin from "./BlueTrashBin";
import Poster from "./Poster";
import SmallVendingMachine from "./SmallVendingMachine";
import VendingMachine from "./VendingMachine";
import WoodenBox from "./WoodenBox";

function AccFirstFloorRightLowerFront({ value }) {
  let accFirstFloorRightLowerFront = <BlueTrashBin />;
  switch (value) {
    case "BlueTrashBin":
      accFirstFloorRightLowerFront = <BlueTrashBin />;
      break;
    case "Poster":
      accFirstFloorRightLowerFront = <Poster />;
      break;
    case "SmallVendingMachine":
      accFirstFloorRightLowerFront = <SmallVendingMachine />;
      break;
    case "VendingMachine":
      accFirstFloorRightLowerFront = <VendingMachine />;
      break;
    case "WoodenBox":
      accFirstFloorRightLowerFront = <WoodenBox />;
      break;
    default:
      accFirstFloorRightLowerFront = <BlueTrashBin />;
  }
  return <>{accFirstFloorRightLowerFront}</>;
}

export default AccFirstFloorRightLowerFront;
