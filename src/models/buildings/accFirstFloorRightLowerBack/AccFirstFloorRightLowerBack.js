import React from "react";
const Bike = React.lazy(() => import("./Bike"));
const Bottles = React.lazy(() => import("./Bottles"));
const Crate = React.lazy(() => import("./Crate"));
const GreenTrashBin = React.lazy(() => import("./GreenTrashBin"));
const TrashBinWithCat = React.lazy(() => import("./TrashBinWithCat"));

function AccFirstFloorRightLowerBack({ value }) {
  let accFirstFloorRightLowerBack = <Bottles />;
  switch (value) {
    case "Bike":
      accFirstFloorRightLowerBack = <Bike />;
      break;
    case "Bottles":
      accFirstFloorRightLowerBack = <Bottles />;
      break;
    case "Crate":
      accFirstFloorRightLowerBack = <Crate />;
      break;
    case "GreenTrashBin":
      accFirstFloorRightLowerBack = <GreenTrashBin />;
      break;
    case "TrashBinWithCat":
      accFirstFloorRightLowerBack = <TrashBinWithCat />;
      break;
    default:
      accFirstFloorRightLowerBack = <Bottles />;
  }
  return <>{accFirstFloorRightLowerBack}</>;
}

export default AccFirstFloorRightLowerBack;
