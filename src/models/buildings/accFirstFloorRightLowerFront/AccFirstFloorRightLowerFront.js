import React from "react";
const BlueTrashBin = React.lazy(() => import("./BlueTrashBin"));
const Poster = React.lazy(() => import("./Poster"));
const SmallVendingMachine = React.lazy(() => import("./SmallVendingMachine"));
const VendingMachine = React.lazy(() => import("./VendingMachine"));
const WoodenBox = React.lazy(() => import("./WoodenBox"));

function AccFirstFloorRightLowerFront({ value }) {
  let accFirstFloorRightLowerFront = <BlueTrashBin />;
  switch (value) {
    case "BlueTrashBin":
      accFirstFloorRightLowerFront = <BlueTrashBin />;
      break;
    case "Poster":
      accFirstFloorRightLowerFront = <Poster />;
      break;
    case "SmallVendingMachine":
      accFirstFloorRightLowerFront = <SmallVendingMachine />;
      break;
    case "VendingMachine":
      accFirstFloorRightLowerFront = <VendingMachine />;
      break;
    case "WoodenBox":
      accFirstFloorRightLowerFront = <WoodenBox />;
      break;
    default:
      accFirstFloorRightLowerFront = <BlueTrashBin />;
  }
  return <>{accFirstFloorRightLowerFront}</>;
}

export default AccFirstFloorRightLowerFront;
