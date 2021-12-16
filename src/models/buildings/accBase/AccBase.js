import React from "react";
import BigFence from "./BigFence";
import Cones from "./Cones";
import DeadTree from "./DeadTree";
import LampFour from "./LampFour";
import LampOne from "./LampOne";
import LampPoleOne from "./LampPoleOne";
import LampThree from "./LampThree";
import LampTwo from "./LampTwo";
import NoParkingSign from "./NoParkingSign";
import PoleEight from "./PoleEight";
import PoleEleven from "./PoleEleven";
import PoleFive from "./PoleFive";
import PoleFour from "./PoleFour";
import PoleNine from "./PoleNine";
import PoleOne from "./PoleOne";
import PoleSeven from "./PoleSeven";
import PoleSix from "./PoleSix";
import PoleTen from "./PoleTen";
import PoleThree from "./PoleThree";
import PoleTwelve from "./PoleTwelve";
import PoleTwo from "./PoleTwo";
import SignPoleOne from "./SignPoleOne";
import SmallFence from "./SmallFence";
import SquareSign from "./SquareSign";
import TaxiSign from "./TaxiSign";
import TrafficLightOne from "./TrafficLightOne";
import TrafficLightTwo from "./TrafficLightTwo";
import TreeOne from "./TreeOne";
import TreeTwo from "./TreeTwo";
import WoodenFence from "./WoodenFence";

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
