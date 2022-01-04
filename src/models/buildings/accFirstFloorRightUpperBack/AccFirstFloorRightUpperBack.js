import React from "react";
const BigElectricBox = React.lazy(() => import("./BigElectricBox"));
const CompoundElectricBox = React.lazy(() => import("./CompoundElectricBox"));
const CondenserUnitTypeA = React.lazy(() => import("./CondenserUnitTypeA"));
const CondenserUnitTypeD = React.lazy(() => import("./CondenserUnitTypeD"));
const KitchenVent = React.lazy(() => import("./KitchenVent"));

function AccFirstFloorRightUpperBack({ value }) {
  let accFirstFloorRightUpperBack = <CondenserUnitTypeA />;
  switch (value) {
    case "BigElectricBox":
      accFirstFloorRightUpperBack = <BigElectricBox />;
      break;
    case "CompoundElectricBox":
      accFirstFloorRightUpperBack = <CompoundElectricBox />;
      break;
    case "CondenserUnitTypeA":
      accFirstFloorRightUpperBack = <CondenserUnitTypeA />;
      break;
    case "CondenserUnitTypeD":
      accFirstFloorRightUpperBack = <CondenserUnitTypeD />;
      break;
    case "KitchenVent":
      accFirstFloorRightUpperBack = <KitchenVent />;
      break;
    default:
      accFirstFloorRightUpperBack = <CondenserUnitTypeA />;
  }
  return <>{accFirstFloorRightUpperBack}</>;
}

export default AccFirstFloorRightUpperBack;
