import React from "react";
const BigFence = React.lazy(() => import("./BigFence"));
const Cones = React.lazy(() => import("./Cones"));
const DeadTree = React.lazy(() => import("./DeadTree"));
const LampFour = React.lazy(() => import("./LampFour"));
const LampOne = React.lazy(() => import("./LampOne"));
const LampPoleOne = React.lazy(() => import("./LampPoleOne"));
const LampThree = React.lazy(() => import("./LampThree"));
const LampTwo = React.lazy(() => import("./LampTwo"));
const NoParkingSign = React.lazy(() => import("./NoParkingSign"));
const PoleEight = React.lazy(() => import("./PoleEight"));
const PoleEleven = React.lazy(() => import("./PoleEleven"));
const PoleFive = React.lazy(() => import("./PoleFive"));
const PoleFour = React.lazy(() => import("./PoleFour"));
const PoleNine = React.lazy(() => import("./PoleNine"));
const PoleOne = React.lazy(() => import("./PoleOne"));
const PoleSeven = React.lazy(() => import("./PoleSeven"));
const PoleSix = React.lazy(() => import("./PoleSix"));
const PoleTen = React.lazy(() => import("./PoleTen"));
const PoleThree = React.lazy(() => import("./PoleThree"));
const PoleTwelve = React.lazy(() => import("./PoleTwelve"));
const PoleTwo = React.lazy(() => import("./PoleTwo"));
const SignPoleOne = React.lazy(() => import("./SignPoleOne"));
const SmallFence = React.lazy(() => import("./SmallFence"));
const SquareSign = React.lazy(() => import("./SquareSign"));
const TaxiSign = React.lazy(() => import("./TaxiSign"));
const TrafficLightOne = React.lazy(() => import("./TrafficLightOne"));
const TrafficLightTwo = React.lazy(() => import("./TrafficLightTwo"));
const TreeOne = React.lazy(() => import("./TreeOne"));
const TreeTwo = React.lazy(() => import("./TreeTwo"));
const WoodenFence = React.lazy(() => import("./WoodenFence"));

function AccBase({ value }) {
  let accBase = <PoleTwo />;
  switch (value) {
    case "BigFence":
      accBase = <BigFence />;
      break;
    case "Cones":
      accBase = <Cones />;
      break;
    case "DeadTree":
      accBase = <DeadTree />;
      break;
    case "LampFour":
      accBase = <LampFour />;
      break;
    case "LampOne":
      accBase = <LampOne />;
      break;
    case "LampPoleOne":
      accBase = <LampPoleOne />;
      break;
    case "LampThree":
      accBase = <LampThree />;
      break;
    case "LampTwo":
      accBase = <LampTwo />;
      break;
    case "NoParkingSign":
      accBase = <NoParkingSign />;
      break;
    case "PoleEight":
      accBase = <PoleEight />;
      break;
    case "PoleEleven":
      accBase = <PoleEleven />;
      break;
    case "PoleFive":
      accBase = <PoleFive />;
      break;
    case "PoleFour":
      accBase = <PoleFour />;
      break;
    case "PoleNine":
      accBase = <PoleNine />;
      break;
    case "PoleOne":
      accBase = <PoleOne />;
      break;
    case "PoleSeven":
      accBase = <PoleSeven />;
      break;
    case "PoleSix":
      accBase = <PoleSix />;
      break;
    case "PoleTen":
      accBase = <PoleTen />;
      break;
    case "PoleThree":
      accBase = <PoleThree />;
      break;
    case "PoleTwelve":
      accBase = <PoleTwelve />;
      break;
    case "PoleTwo":
      accBase = <PoleTwo />;
      break;
    case "SignPoleOne":
      accBase = <SignPoleOne />;
      break;
    case "SmallFence":
      accBase = <SmallFence />;
      break;
    case "SquareSign":
      accBase = <SquareSign />;
      break;
    case "TaxiSign":
      accBase = <TaxiSign />;
      break;
    case "TrafficLightOne":
      accBase = <TrafficLightOne />;
      break;
    case "TrafficLightTwo":
      accBase = <TrafficLightTwo />;
      break;
    case "TreeOne":
      accBase = <TreeOne />;
      break;
    case "TreeTwo":
      accBase = <TreeTwo />;
      break;
    case "WoodenFence":
      accBase = <WoodenFence />;
      break;
    default:
      accBase = <PoleTwo />;
  }
  return <>{accBase}</>;
}

export default AccBase;
