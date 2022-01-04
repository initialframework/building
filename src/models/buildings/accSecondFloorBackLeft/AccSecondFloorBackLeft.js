import React from "react";
const CondenserUnitTypeA = React.lazy(() => import("./CondenserUnitTypeA"));
const CondenserUnitTypeB = React.lazy(() => import("./CondenserUnitTypeB"));
const CondenserUnitTypeC = React.lazy(() => import("./CondenserUnitTypeC"));
const CondenserUnitTypeD = React.lazy(() => import("./CondenserUnitTypeD"));
const WallVent = React.lazy(() => import("./WallVent"));

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
