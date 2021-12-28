import React from "react";
import BackdoorOne from "./BackdoorOne";
import BackdoorTwo from "./BackdoorTwo";
import BackdoorThree from "./BackdoorThree";
import BackdoorFour from "./BackdoorFour";
import BackdoorFive from "./BackdoorFive";
import TrashBinOne from "./TrashBinOne";

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
