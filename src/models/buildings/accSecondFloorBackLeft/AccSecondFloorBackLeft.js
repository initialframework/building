import React from "react";
import CondenserUnitTypeA from "./CondenserUnitTypeA";
import CondenserUnitTypeB from "./CondenserUnitTypeB";
import CondenserUnitTypeC from "./CondenserUnitTypeC";
import CondenserUnitTypeD from "./CondenserUnitTypeD";
import WallVent from "./WallVent";

function AccSecondFloorBackLeft({ value }) {
  let accSecondFloorBackLeft = <CondenserUnitTypeA />;
  switch (value) {
    case "CondenserUnitTypeA":
      accSecondFloorBackLeft = <CondenserUnitTypeA />;
      break;
    case "CondenserUnitTypeB":
      accSecondFloorBackLeft = <CondenserUnitTypeB />;
      break;
    case "CondenserUnitTypeC":
      accSecondFloorBackLeft = <CondenserUnitTypeC />;
      break;
    case "CondenserUnitTypeD":
      accSecondFloorBackLeft = <CondenserUnitTypeD />;
      break;
    case "WallVent":
      accSecondFloorBackLeft = <WallVent />;
      break;
    default:
      accSecondFloorBackLeft = <CondenserUnitTypeA />;
  }
  return <>{accSecondFloorBackLeft}</>;
}

export default AccSecondFloorBackLeft;
