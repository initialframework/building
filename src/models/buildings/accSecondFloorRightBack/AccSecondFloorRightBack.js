import React from "react";
const CondenserUnitTypeA = React.lazy(() => import("./CondenserUnitTypeA"));
const CondenserUnitTypeB = React.lazy(() => import("./CondenserUnitTypeB"));
const CondenserUnitTypeC = React.lazy(() => import("./CondenserUnitTypeC"));
const CondenserUnitTypeD = React.lazy(() => import("./CondenserUnitTypeD"));
const WallVent = React.lazy(() => import("./WallVent"));

function AccSecondFloorRightBack({ value }) {
  let accSecondFloorRightBack = <CondenserUnitTypeA />;
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
      accSecondFloorRightBack = <CondenserUnitTypeA />;
  }
  return <>{accSecondFloorRightBack}</>;
}

export default AccSecondFloorRightBack;
