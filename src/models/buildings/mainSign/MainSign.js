import React from "react";
import AdultStore from "./AdultStore";
import ArtistAgency from "./ArtistAgency";
import Bank from "./Bank";
import BikeShop from "./BikeShop";
import Niko from "./Niko";
import Ooo from "./Ooo";
import Fujifilm from "./Fujifilm";
import GameShop from "./GameShop";
import Izakaya from "./Izakaya";
import JavStore from "./JavStore";
import Laundry from "./Laundry";
import Weasleys from "./Weasleys";
import Law from "./Law";
import NetCafe from "./NetCafe";
import Paystation from "./Paystation";
import Ramen from "./Ramen";
import RollingDoor from "./RollingDoor";
import See from "./See";
import Lift from "./Lift";
import SushiBar from "./SushiBar";
import ToysShop from "./ToysShop";
import Bj from "./Bj";
import Udon from "./Udon";
import Luqnio from "./Luqnio";
import Yosh from "./Yosh";
import CatCafe from "./CatCafe";
import CoffeeShop from "./CoffeeShop";
import Dailymart from "./Dailymart";
import DvdTsubomi from "./DvdTsubomi";
import MaidCafe from "./MaidCafe";
import RaceworldWorkshop from "./RaceworldWorkshop";
import RamenIAN from "./RamenIAN";
import Sfc from "./Sfc";
import StationeryTora from "./StationeryTora";
import TravelAgencyJapan from "./TravelAgencyJapan";
import ZeroFourMart from "./ZeroFourMart";

function MainSign({ value }) {
  let mainSign = <Ooo />;
  switch (value) {
    case "ZeroFourMart":
      mainSign = <ZeroFourMart />;
      break;
    case "TravelAgencyJapan":
      mainSign = <TravelAgencyJapan />;
      break;
    case "StationeryTora":
      mainSign = <StationeryTora />;
      break;
    case "Sfc":
      mainSign = <Sfc />;
      break;
    case "RamenIAN":
      mainSign = <RamenIAN />;
      break;
    case "RaceworldWorkshop":
      mainSign = <RaceworldWorkshop />;
      break;
    case "MaidCafe":
      mainSign = <MaidCafe />;
      break;
    case "DvdTsubomi":
      mainSign = <DvdTsubomi />;
      break;
    case "CoffeeShop":
      mainSign = <CoffeeShop />;
      break;
    case "Dailymart":
      mainSign = <Dailymart />;
      break;
    case "CatCafe":
      mainSign = <CatCafe />;
      break;
    case "AdultStore":
      mainSign = <AdultStore />;
      break;
    case "ArtistAgency":
      mainSign = <ArtistAgency />;
      break;
    case "Bank":
      mainSign = <Bank />;
      break;
    case "BikeShop":
      mainSign = <BikeShop />;
      break;
    case "Niko":
      mainSign = <Niko />;
      break;
    case "Ooo":
      mainSign = <Ooo />;
      break;
    case "Fujifilm":
      mainSign = <Fujifilm />;
      break;
    case "GameShop":
      mainSign = <GameShop />;
      break;
    case "Izakaya":
      mainSign = <Izakaya />;
      break;
    case "JavStore":
      mainSign = <JavStore />;
      break;
    case "Laundry":
      mainSign = <Laundry />;
      break;
    case "Weasleys":
      mainSign = <Weasleys />;
      break;
    case "Law":
      mainSign = <Law />;
      break;
    case "NetCafe":
      mainSign = <NetCafe />;
      break;
    case "Paystation":
      mainSign = <Paystation />;
      break;
    case "Ramen":
      mainSign = <Ramen />;
      break;
    case "RollingDoor":
      mainSign = <RollingDoor />;
      break;
    case "See":
      mainSign = <See />;
      break;
    case "Lift":
      mainSign = <Lift />;
      break;
    case "SushiBar":
      mainSign = <SushiBar />;
      break;
    case "ToysShop":
      mainSign = <ToysShop />;
      break;
    case "Bj":
      mainSign = <Bj />;
      break;
    case "Udon":
      mainSign = <Udon />;
      break;
    case "Luqnio":
      mainSign = <Luqnio />;
      break;
    case "Yosh":
      mainSign = <Yosh />;
      break;
    default:
      mainSign = <Ooo />;
  }
  return <>{mainSign}</>;
}

export default MainSign;
