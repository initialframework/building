import React from "react";
import AdultStore from "./AdultStore";
import ArtistAgency from "./ArtistAgency";
import Bank from "./Bank";
import BikeShop from "./BikeShop";
import CameraStore from "./CameraStore";
import Dvd from "./Dvd";
import Fujifilm from "./Fujifilm";
import GameShop from "./GameShop";
import Izakaya from "./Izakaya";
import JavStore from "./JavStore";
import Laundry from "./Laundry";
import Mcd from "./Mcd";
import Minimart from "./Minimart";
import NetCafe from "./NetCafe";
import Playstation from "./Playstation";
import Ramen from "./Ramen";
import RollingDoor from "./RollingDoor";
import Sega from "./Sega";
import Stationery from "./Stationery";
import SushiBar from "./SushiBar";
import ToysShop from "./ToysShop";
import TravelAgency from "./TravelAgency";
import Udon from "./Udon";
import Uniqlo from "./Uniqlo";
import Yoshinoya from "./Yoshinoya";

function MainSign({ value }) {
  let mainSign = <Dvd />;
  switch (value) {
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
    case "CameraStore":
      mainSign = <CameraStore />;
      break;
    case "Dvd":
      mainSign = <Dvd />;
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
    case "Mcd":
      mainSign = <Mcd />;
      break;
    case "Minimart":
      mainSign = <Minimart />;
      break;
    case "NetCafe":
      mainSign = <NetCafe />;
      break;
    case "Playstation":
      mainSign = <Playstation />;
      break;
    case "Ramen":
      mainSign = <Ramen />;
      break;
    case "RollingDoor":
      mainSign = <RollingDoor />;
      break;
    case "Sega":
      mainSign = <Sega />;
      break;
    case "Stationery":
      mainSign = <Stationery />;
      break;
    case "SushiBar":
      mainSign = <SushiBar />;
      break;
    case "ToysShop":
      mainSign = <ToysShop />;
      break;
    case "TravelAgency":
      mainSign = <TravelAgency />;
      break;
    case "Udon":
      mainSign = <Udon />;
      break;
    case "Uniqlo":
      mainSign = <Uniqlo />;
      break;
    case "Yoshinoya":
      mainSign = <Yoshinoya />;
      break;
    default:
      mainSign = <Dvd />;
  }
  return <>{mainSign}</>;
}

export default MainSign;
