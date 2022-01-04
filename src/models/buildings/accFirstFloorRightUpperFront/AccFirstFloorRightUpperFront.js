import React from "react";
const CondenserUnitTypeB = React.lazy(() => import("./CondenserUnitTypeB"));
const ElectricBox = React.lazy(() => import("./ElectricBox"));
const Lantern = React.lazy(() => import("./Lantern"));
const LightBox = React.lazy(() => import("./LightBox"));
const Pipe = React.lazy(() => import("./Pipe"));

function AccFirstFloorRightUpperFront({ value }) {
  let accFirstFloorRightUpperFront = <ElectricBox />;
  switch (value) {
    case "CondenserUnitTypeB":
      accFirstFloorRightUpperFront = <CondenserUnitTypeB />;
      break;
    case "ElectricBox":
      accFirstFloorRightUpperFront = <ElectricBox />;
      break;
    case "Lantern":
      accFirstFloorRightUpperFront = <Lantern />;
      break;
    case "LightBox":
      accFirstFloorRightUpperFront = <LightBox />;
      break;
    case "Pipe":
      accFirstFloorRightUpperFront = <Pipe />;
      break;
    default:
      accFirstFloorRightUpperFront = <ElectricBox />;
  }
  return <>{accFirstFloorRightUpperFront}</>;
}

export default AccFirstFloorRightUpperFront;
