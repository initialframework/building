import React from "react";
const BackdoorFive = React.lazy(() => import("./BackdoorFive"));
const BackdoorFour = React.lazy(() => import("./BackdoorFour"));
const BackdoorOne = React.lazy(() => import("./BackdoorOne"));
const BackdoorThree = React.lazy(() => import("./BackdoorThree"));
const BackdoorTwo = React.lazy(() => import("./BackdoorTwo"));
const TrashBinOne = React.lazy(() => import("./TrashBinOne"));

function Back({ value }) {
  let back = <BackdoorOne />;
  switch (value) {
    case "BackdoorOne":
      back = <BackdoorOne />;
      break;
    case "BackdoorTwo":
      back = <BackdoorTwo />;
      break;
    case "BackdoorThree":
      back = <BackdoorThree />;
      break;
    case "BackdoorFour":
      back = <BackdoorFour />;
      break;
    case "BackdoorFive":
      back = <BackdoorFive />;
      break;
    case "TrashBinOne":
      back = <TrashBinOne />;
      break;
    default:
      back = <BackdoorOne />;
  }
  return <>{back}</>;
}

export default Back;
