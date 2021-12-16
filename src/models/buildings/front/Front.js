import React from "react";
import Arcade from "./Arcade";
import BarOne from "./BarOne";
import BarTwo from "./BarTwo";
import ClassicOne from "./ClassicOne";
import ClassicThree from "./ClassicThree";
import ClassicTwo from "./ClassicTwo";
import Laundry from "./Laundry";
import RetroOne from "./RetroOne";
import RetroThree from "./RetroThree";
import RetroTwo from "./RetroTwo";
import RollingDoorOne from "./RollingDoorOne";
import RollingDoorThree from "./RollingDoorThree";
import RollingDoorTwo from "./RollingDoorTwo";
import StoreOne from "./StoreOne";
import StoreTwo from "./StoreTwo";
import WhiteOne from "./WhiteOne";
import WhiteThree from "./WhiteThree";
import WhiteTwo from "./WhiteTwo";

function Front({ value }) {
  let front = <WhiteTwo />;
  switch (value) {
    case "Arcade":
      front = <Arcade />;
      break;
    case "BarOne":
      front = <BarOne />;
      break;
    case "BarTwo":
      front = <BarTwo />;
      break;
    case "ClassicOne":
      front = <ClassicOne />;
      break;
    case "ClassicThree":
      front = <ClassicThree />;
      break;
    case "ClassicTwo":
      front = <ClassicTwo />;
      break;
    case "Laundry":
      front = <Laundry />;
      break;
    case "RetroOne":
      front = <RetroOne />;
      break;
    case "RetroThree":
      front = <RetroThree />;
      break;
    case "RetroTwo":
      front = <RetroTwo />;
      break;
    case "RollingDoorOne":
      front = <RollingDoorOne />;
      break;
    case "RollingDoorThree":
      front = <RollingDoorThree />;
      break;
    case "RollingDoorTwo":
      front = <RollingDoorTwo />;
      break;
    case "StoreOne":
      front = <StoreOne />;
      break;
    case "StoreTwo":
      front = <StoreTwo />;
      break;
    case "WhiteOne":
      front = <WhiteOne />;
      break;
    case "WhiteThree":
      front = <WhiteThree />;
      break;
    case "WhiteTwo":
      front = <WhiteTwo />;
      break;
    default:
      front = <WhiteTwo />;
  }
  return <>{front}</>;
}

export default Front;
