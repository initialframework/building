import React from "react";
import CondenserUnitTypeABackRightFloorTwo from "./CondenserUnitTypeABackRightFloorTwo";
import CondenserUnitTypeBBackRightFloorTwo from "./CondenserUnitTypeBBackRightFloorTwo";
import CondenserUnitTypeCBackRightFloorTwo from "./CondenserUnitTypeCBackRightFloorTwo";
import CondenserUnitTypeDBackRightFloorTwo from "./CondenserUnitTypeDBackRightFloorTwo";
import WallVentBackRightFloorTwo from "./WallVentBackRightFloorTwo";

function AccSecondFloorBackRight({ value }) {
  let accSecondFloorBackRight = <CondenserUnitTypeABackRightFloorTwo />;
  switch (value) {
    case "CondenserUnitTypeABackRightFloorTwo":
      accSecondFloorBackRight = <CondenserUnitTypeABackRightFloorTwo />;
      break;
    case "CondenserUnitTypeBBackRightFloorTwo":
      accSecondFloorBackRight = <CondenserUnitTypeBBackRightFloorTwo />;
      break;
    case "CondenserUnitTypeCBackRightFloorTwo":
      accSecondFloorBackRight = <CondenserUnitTypeCBackRightFloorTwo />;
      break;
    case "CondenserUnitTypeDBackRightFloorTwo":
      accSecondFloorBackRight = <CondenserUnitTypeDBackRightFloorTwo />;
      break;
    case "WallVentBackRightFloorTwo":
      accSecondFloorBackRight = <WallVentBackRightFloorTwo />;
      break;
    default:
      accSecondFloorBackRight = <CondenserUnitTypeABackRightFloorTwo />;
  }
  return <>{accSecondFloorBackRight}</>;
}

export default AccSecondFloorBackRight;
