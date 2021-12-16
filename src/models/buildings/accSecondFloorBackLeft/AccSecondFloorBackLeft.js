import React from "react";
import CondenserUnitTypeABackLeftFloorTwo from "./CondenserUnitTypeABackLeftFloorTwo";
import CondenserUnitTypeBBackLeftFloorTwo from "./CondenserUnitTypeBBackLeftFloorTwo";
import CondenserUnitTypeCBackLeftFloorTwo from "./CondenserUnitTypeCBackLeftFloorTwo";
import CondenserUnitTypeDBackLeftFloorTwo from "./CondenserUnitTypeDBackLeftFloorTwo";
import WallVentBackLeftFloorTwo from "./WallVentBackLeftFloorTwo";

function AccSecondFloorBackLeft({ value }) {
  let accSecondFloorBackLeft = <CondenserUnitTypeABackLeftFloorTwo />;
  switch (value) {
    case "CondenserUnitTypeABackLeftFloorTwo":
      accSecondFloorBackLeft = <CondenserUnitTypeABackLeftFloorTwo />;
      break;
    case "CondenserUnitTypeBBackLeftFloorTwo":
      accSecondFloorBackLeft = <CondenserUnitTypeBBackLeftFloorTwo />;
      break;
    case "CondenserUnitTypeCBackLeftFloorTwo":
      accSecondFloorBackLeft = <CondenserUnitTypeCBackLeftFloorTwo />;
      break;
    case "CondenserUnitTypeDBackLeftFloorTwo":
      accSecondFloorBackLeft = <CondenserUnitTypeDBackLeftFloorTwo />;
      break;
    case "WallVentBackLeftFloorTwo":
      accSecondFloorBackLeft = <WallVentBackLeftFloorTwo />;
      break;
    default:
      accSecondFloorBackLeft = <CondenserUnitTypeABackLeftFloorTwo />;
  }
  return <>{accSecondFloorBackLeft}</>;
}

export default AccSecondFloorBackLeft;
