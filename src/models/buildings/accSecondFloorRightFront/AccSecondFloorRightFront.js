import React from "react";
import CondenserUnitTypeA from "./CondenserUnitTypeA";
import CondenserUnitTypeB from "./CondenserUnitTypeB";
import CondenserUnitTypeC from "./CondenserUnitTypeC";
import CondenserUnitTypeD from "./CondenserUnitTypeD";
import WallVent from "./WallVent";

function AccSecondFloorRightFront({ value }) {
  let accSecondFloorRightBack = <CondenserUnitTypeB />;
  switch (value) {
    case "CondenserUnitTypeA":
      accSecondFloorRightBack = <CondenserUnitTypeA />;
      break;
    case "CondenserUnitTypeB":
      accSecondFloorRightBack = <CondenserUnitTypeB />;
      break;
    case "CondenserUnitTypeC":
      accSecondFloorRightBack = <CondenserUnitTypeC />;
      break;
    case "CondenserUnitTypeD":
      accSecondFloorRightBack = <CondenserUnitTypeD />;
      break;
    case "WallVent":
      accSecondFloorRightBack = <WallVent />;
      break;
    default:
      accSecondFloorRightBack = <CondenserUnitTypeB />;
  }
  return <>{accSecondFloorRightBack}</>;
}

export default AccSecondFloorRightFront;
