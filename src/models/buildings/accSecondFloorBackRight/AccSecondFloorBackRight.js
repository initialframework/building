import React from "react";
import CondenserUnitTypeA from "./CondenserUnitTypeA";
import CondenserUnitTypeB from "./CondenserUnitTypeB";
import CondenserUnitTypeC from "./CondenserUnitTypeC";
import CondenserUnitTypeD from "./CondenserUnitTypeD";
import WallVent from "./WallVent";

function AccSecondFloorBackRight({ value }) {
  let accSecondFloorBackRight = <CondenserUnitTypeA />;
  switch (value) {
    case "CondenserUnitTypeA":
      accSecondFloorBackRight = <CondenserUnitTypeA />;
      break;
    case "CondenserUnitTypeB":
      accSecondFloorBackRight = <CondenserUnitTypeB />;
      break;
    case "CondenserUnitTypeC":
      accSecondFloorBackRight = <CondenserUnitTypeC />;
      break;
    case "CondenserUnitTypeD":
      accSecondFloorBackRight = <CondenserUnitTypeD />;
      break;
    case "WallVent":
      accSecondFloorBackRight = <WallVent />;
      break;
    default:
      accSecondFloorBackRight = <CondenserUnitTypeA />;
  }
  return <>{accSecondFloorBackRight}</>;
}

export default AccSecondFloorBackRight;
