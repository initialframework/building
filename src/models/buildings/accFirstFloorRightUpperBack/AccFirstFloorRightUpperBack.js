import React from "react";
import BigElectricBox from "./BigElectricBox";
import CompoundElectricBox from "./CompoundElectricBox";
import CondenserUnitTypeA from "./CondenserUnitTypeA";
import CondenserUnitTypeD from "./CondenserUnitTypeD";
import KitchenVent from "./KitchenVent";

function AccFirstFloorRightUpperBack({ value }) {
  let accFirstFloorRightUpperBack = <CondenserUnitTypeA />;
  switch (value) {
    case "BigElectricBox":
      accFirstFloorRightUpperBack = <BigElectricBox />;
      break;
    case "CompoundElectricBox":
      accFirstFloorRightUpperBack = <CompoundElectricBox />;
      break;
    case "CondenserUnitTypeA":
      accFirstFloorRightUpperBack = <CondenserUnitTypeA />;
      break;
    case "CondenserUnitTypeD":
      accFirstFloorRightUpperBack = <CondenserUnitTypeD />;
      break;
    case "KitchenVent":
      accFirstFloorRightUpperBack = <KitchenVent />;
      break;
    default:
      accFirstFloorRightUpperBack = <CondenserUnitTypeA />;
  }
  return <>{accFirstFloorRightUpperBack}</>;
}

export default AccFirstFloorRightUpperBack;
