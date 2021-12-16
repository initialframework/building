import React from "react";
import CondenserUnitTypeARightFrontFloorTwo from "./CondenserUnitTypeARightFrontFloorTwo";
import CondenserUnitTypeBRightFrontFloorTwo from "./CondenserUnitTypeBRightFrontFloorTwo";
import CondenserUnitTypeCRightFrontFloorTwo from "./CondenserUnitTypeCRightFrontFloorTwo";
import CondenserUnitTypeDRightFrontFloorTwo from "./CondenserUnitTypeDRightFrontFloorTwo";
import WallVentRightFrontFloorTwo from "./WallVentRightFrontFloorTwo";

function AccSecondFloorRightFront({ value }) {
  let accSecondFloorRightBack = <CondenserUnitTypeBRightFrontFloorTwo />;
  switch (value) {
    case "CondenserUnitTypeARightFrontFloorTwo":
      accSecondFloorRightBack = <CondenserUnitTypeARightFrontFloorTwo />;
      break;
    case "CondenserUnitTypeBRightFrontFloorTwo":
      accSecondFloorRightBack = <CondenserUnitTypeBRightFrontFloorTwo />;
      break;
    case "CondenserUnitTypeCRightFrontFloorTwo":
      accSecondFloorRightBack = <CondenserUnitTypeCRightFrontFloorTwo />;
      break;
    case "CondenserUnitTypeDRightFrontFloorTwo":
      accSecondFloorRightBack = <CondenserUnitTypeDRightFrontFloorTwo />;
      break;
    case "WallVentRightFrontFloorTwo":
      accSecondFloorRightBack = <WallVentRightFrontFloorTwo />;
      break;
    default:
      accSecondFloorRightBack = <CondenserUnitTypeBRightFrontFloorTwo />;
  }
  return <>{accSecondFloorRightBack}</>;
}

export default AccSecondFloorRightFront;
