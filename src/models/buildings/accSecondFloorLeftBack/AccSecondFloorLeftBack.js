import React from "react";
import CondenserUnitTypeALeftBackFloorTwo from "./CondenserUnitTypeALeftBackFloorTwo";
import CondenserUnitTypeBLeftBackFloorTwo from "./CondenserUnitTypeBLeftBackFloorTwo";
import CondenserUnitTypeCLeftBackFloorTwo from "./CondenserUnitTypeCLeftBackFloorTwo";
import CondenserUnitTypeDLeftBackFloorTwo from "./CondenserUnitTypeDLeftBackFloorTwo";
import WallVentLeftBackFloorTwo from "./WallVentLeftBackFloorTwo";

function AccSecondFloorLeftBack({ value }) {
  let accSecondFloorLeftBack = <CondenserUnitTypeBLeftBackFloorTwo />;
  switch (value) {
    case "CondenserUnitTypeALeftBackFloorTwo":
      accSecondFloorLeftBack = <CondenserUnitTypeALeftBackFloorTwo />;
      break;
    case "CondenserUnitTypeBLeftBackFloorTwo":
      accSecondFloorLeftBack = <CondenserUnitTypeBLeftBackFloorTwo />;
      break;
    case "CondenserUnitTypeCLeftBackFloorTwo":
      accSecondFloorLeftBack = <CondenserUnitTypeCLeftBackFloorTwo />;
      break;
    case "CondenserUnitTypeDLeftBackFloorTwo":
      accSecondFloorLeftBack = <CondenserUnitTypeDLeftBackFloorTwo />;
      break;
    case "WallVentLeftBackFloorTwo":
      accSecondFloorLeftBack = <WallVentLeftBackFloorTwo />;
      break;
    default:
      accSecondFloorLeftBack = <CondenserUnitTypeBLeftBackFloorTwo />;
  }
  return <>{accSecondFloorLeftBack}</>;
}

export default AccSecondFloorLeftBack;
