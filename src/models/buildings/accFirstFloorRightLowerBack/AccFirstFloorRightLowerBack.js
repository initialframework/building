import React from "react";
import Bike from "./Bike";
import Bottles from "./Bottles";
import Crate from "./Crate";
import GreenTrashBin from "./GreenTrashBin";
import TrashBinWithCat from "./TrashBinWithCat";

function AccFirstFloorRightLowerBack({ value }) {
  let accFirstFloorRightLowerBack = <Bottles />;
  switch (value) {
    case "Bike":
      accFirstFloorRightLowerBack = <Bike />;
      break;
    case "Bottles":
      accFirstFloorRightLowerBack = <Bottles />;
      break;
    case "Crate":
      accFirstFloorRightLowerBack = <Crate />;
      break;
    case "GreenTrashBin":
      accFirstFloorRightLowerBack = <GreenTrashBin />;
      break;
    case "TrashBinWithCat":
      accFirstFloorRightLowerBack = <TrashBinWithCat />;
      break;
    default:
      accFirstFloorRightLowerBack = <Bottles />;
  }
  return <>{accFirstFloorRightLowerBack}</>;
}

export default AccFirstFloorRightLowerBack;
