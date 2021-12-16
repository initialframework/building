import React from "react";
import CondenserUnitTypeB from "./CondenserUnitTypeB";
import ElectricBox from "./ElectricBox";
import Lantern from "./Lantern";
import LightBox from "./LightBox";
import Pipe from "./Pipe";

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
