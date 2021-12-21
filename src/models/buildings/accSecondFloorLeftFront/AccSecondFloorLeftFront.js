import React from "react";
import CondenserUnitTypeA from "./CondenserUnitTypeA";
import CondenserUnitTypeB from "./CondenserUnitTypeB";
import CondenserUnitTypeC from "./CondenserUnitTypeC";
import CondenserUnitTypeD from "./CondenserUnitTypeD";
import WallVent from "./WallVent";

function AccSecondFloorLeftFront({ value }) {
  let accSecondFloorLeftFront = <CondenserUnitTypeA />;
  switch (value) {
    case "CondenserUnitTypeA":
      accSecondFloorLeftFront = <CondenserUnitTypeA />;
      break;
    case "CondenserUnitTypeB":
      accSecondFloorLeftFront = <CondenserUnitTypeB />;
      break;
    case "CondenserUnitTypeC":
      accSecondFloorLeftFront = <CondenserUnitTypeC />;
      break;
    case "CondenserUnitTypeD":
      accSecondFloorLeftFront = <CondenserUnitTypeD />;
      break;
    case "WallVent":
      accSecondFloorLeftFront = <WallVent />;
      break;
    default:
      accSecondFloorLeftFront = <CondenserUnitTypeA />;
  }
  return <>{accSecondFloorLeftFront}</>;
}

export default AccSecondFloorLeftFront;
