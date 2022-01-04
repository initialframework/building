import React from "react";
const CondenserUnitTypeA = React.lazy(() => import("./CondenserUnitTypeA"));
const CondenserUnitTypeB = React.lazy(() => import("./CondenserUnitTypeB"));
const CondenserUnitTypeC = React.lazy(() => import("./CondenserUnitTypeC"));
const CondenserUnitTypeD = React.lazy(() => import("./CondenserUnitTypeD"));
const WallVent = React.lazy(() => import("./WallVent"));

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
