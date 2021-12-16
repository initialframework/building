import React from "react";
import CondenserUnitTypeARightBackFloorTwo from "./CondenserUnitTypeARightBackFloorTwo";
import CondenserUnitTypeBRightBackFloorTwo from "./CondenserUnitTypeBRightBackFloorTwo";
import CondenserUnitTypeCRightBackFloorTwo from "./CondenserUnitTypeCRightBackFloorTwo";
import CondenserUnitTypeDRightBackFloorTwo from "./CondenserUnitTypeDRightBackFloorTwo";
import WallVentRightBackFloorTwo from "./WallVentRightBackFloorTwo";

function AccSecondFloorRightBack({ value }) {
  let accSecondFloorRightBack = <CondenserUnitTypeARightBackFloorTwo />;
  switch (value) {
    case "CondenserUnitTypeARightBackFloorTwo":
      accSecondFloorRightBack = <CondenserUnitTypeARightBackFloorTwo />;
      break;
    case "CondenserUnitTypeBRightBackFloorTwo":
      accSecondFloorRightBack = <CondenserUnitTypeBRightBackFloorTwo />;
      break;
    case "CondenserUnitTypeCRightBackFloorTwo":
      accSecondFloorRightBack = <CondenserUnitTypeCRightBackFloorTwo />;
      break;
    case "CondenserUnitTypeDRightBackFloorTwo":
      accSecondFloorRightBack = <CondenserUnitTypeDRightBackFloorTwo />;
      break;
    case "WallVentRightBackFloorTwo":
      accSecondFloorRightBack = <WallVentRightBackFloorTwo />;
      break;
    default:
      accSecondFloorRightBack = <CondenserUnitTypeARightBackFloorTwo />;
  }
  return <>{accSecondFloorRightBack}</>;
}

export default AccSecondFloorRightBack;
