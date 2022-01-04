import React from "react";
const CondenserUnitTypeA = React.lazy(() => import("./CondenserUnitTypeA"));
const CondenserUnitTypeB = React.lazy(() => import("./CondenserUnitTypeB"));
const CondenserUnitTypeC = React.lazy(() => import("./CondenserUnitTypeC"));
const CondenserUnitTypeD = React.lazy(() => import("./CondenserUnitTypeD"));
const WallVent = React.lazy(() => import("./WallVent"));

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
