import React from "react";
import CondenserUnitTypeA from "./CondenserUnitTypeA";
import CondenserUnitTypeB from "./CondenserUnitTypeB";
import CondenserUnitTypeC from "./CondenserUnitTypeC";
import CondenserUnitTypeD from "./CondenserUnitTypeD";
import WallVent from "./WallVent";

function AccSecondFloorLeftBack({ value }) {
  let accSecondFloorLeftBack = <CondenserUnitTypeB />;
  switch (value) {
    case "CondenserUnitTypeA":
      accSecondFloorLeftBack = <CondenserUnitTypeA />;
      break;
    case "CondenserUnitTypeB":
      accSecondFloorLeftBack = <CondenserUnitTypeB />;
      break;
    case "CondenserUnitTypeC":
      accSecondFloorLeftBack = <CondenserUnitTypeC />;
      break;
    case "CondenserUnitTypeD":
      accSecondFloorLeftBack = <CondenserUnitTypeD />;
      break;
    case "WallVent":
      accSecondFloorLeftBack = <WallVent />;
      break;
    default:
      accSecondFloorLeftBack = <CondenserUnitTypeB />;
  }
  return <>{accSecondFloorLeftBack}</>;
}

export default AccSecondFloorLeftBack;
