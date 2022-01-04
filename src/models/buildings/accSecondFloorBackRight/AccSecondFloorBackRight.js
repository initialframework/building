import React from "react";
const CondenserUnitTypeA = React.lazy(() => import("./CondenserUnitTypeA"));
const CondenserUnitTypeB = React.lazy(() => import("./CondenserUnitTypeB"));
const CondenserUnitTypeC = React.lazy(() => import("./CondenserUnitTypeC"));
const CondenserUnitTypeD = React.lazy(() => import("./CondenserUnitTypeD"));
const WallVent = React.lazy(() => import("./WallVent"));

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
