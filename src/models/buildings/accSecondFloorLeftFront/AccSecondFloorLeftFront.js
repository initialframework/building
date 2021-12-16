import React from "react";
import CondenserUnitTypeALeftFrontFloorTwo from "./CondenserUnitTypeALeftFrontFloorTwo";
import CondenserUnitTypeBLeftFrontFloorTwo from "./CondenserUnitTypeBLeftFrontFloorTwo";
import CondenserUnitTypeCLeftFrontFloorTwo from "./CondenserUnitTypeCLeftFrontFloorTwo";
import CondenserUnitTypeDLeftFrontFloorTwo from "./CondenserUnitTypeDLeftFrontFloorTwo";
import WallVentLeftFrontFloorTwo from "./WallVentLeftFrontFloorTwo";

function AccSecondFloorLeftFront({ value }) {
  let accSecondFloorLeftFront = <CondenserUnitTypeALeftFrontFloorTwo />;
  switch (value) {
    case "CondenserUnitTypeALeftFrontFloorTwo":
      accSecondFloorLeftFront = <CondenserUnitTypeALeftFrontFloorTwo />;
      break;
    case "CondenserUnitTypeBLeftFrontFloorTwo":
      accSecondFloorLeftFront = <CondenserUnitTypeBLeftFrontFloorTwo />;
      break;
    case "CondenserUnitTypeCLeftFrontFloorTwo":
      accSecondFloorLeftFront = <CondenserUnitTypeCLeftFrontFloorTwo />;
      break;
    case "CondenserUnitTypeDLeftFrontFloorTwo":
      accSecondFloorLeftFront = <CondenserUnitTypeDLeftFrontFloorTwo />;
      break;
    case "WallVentLeftFrontFloorTwo":
      accSecondFloorLeftFront = <WallVentLeftFrontFloorTwo />;
      break;
    default:
      accSecondFloorLeftFront = <CondenserUnitTypeALeftFrontFloorTwo />;
  }
  return <>{accSecondFloorLeftFront}</>;
}

export default AccSecondFloorLeftFront;
