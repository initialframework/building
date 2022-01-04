import React from "react";
const Arcade = React.lazy(() => import("./Arcade"));
const BarOne = React.lazy(() => import("./BarOne"));
const BarTwo = React.lazy(() => import("./BarTwo"));
const ClassicOne = React.lazy(() => import("./ClassicOne"));
const ClassicThree = React.lazy(() => import("./ClassicThree"));
const ClassicTwo = React.lazy(() => import("./ClassicTwo"));
const Laundry = React.lazy(() => import("./Laundry"));
const RetroOne = React.lazy(() => import("./RetroOne"));
const RetroThree = React.lazy(() => import("./RetroThree"));
const RetroTwo = React.lazy(() => import("./RetroTwo"));
const RollingDoorOne = React.lazy(() => import("./RollingDoorOne"));
const RollingDoorThree = React.lazy(() => import("./RollingDoorThree"));
const RollingDoorTwo = React.lazy(() => import("./RollingDoorTwo"));
const StoreOne = React.lazy(() => import("./StoreOne"));
const StoreTwo = React.lazy(() => import("./StoreTwo"));
const WhiteOne = React.lazy(() => import("./WhiteOne"));
const WhiteThree = React.lazy(() => import("./WhiteThree"));
const WhiteTwo = React.lazy(() => import("./WhiteTwo"));

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
