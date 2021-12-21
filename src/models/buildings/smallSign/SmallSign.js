import React from "react";
import AdultStoreSign from "./AdultStoreSign";
import ArtistAgencySign from "./ArtistAgencySign";
import BankSign from "./BankSign";
import BikeShopSign from "./BikeShopSign";
import NikoSign from "./NikoSign";
import ComicStoreSign from "./ComicStoreSign";
import OooSign from "./OooSign";
import FujifilmSign from "./FujifilmSign";
import GameShopSign from "./GameShopSign";
import IzakayaSign from "./IzakayaSign";
import JavStoreSign from "./JavStoreSign";
import LaundrySign from "./LaundrySign";
import McdSign from "./McdSign";
import LawSign from "./LawSign";
import NetcafeSign from "./NetcafeSign";
import PaystationSign from "./PaystationSign";
import RamenSign from "./RamenSign";
import SeeSign from "./SeeSign";
import LiftSign from "./LiftSign";
import SushiBarSign from "./SushiBarSign";
import ToysShopSign from "./ToysShopSign";
import BjSign from "./BjSign";
import UdonSign from "./UdonSign";
import LuqnioSign from "./LuqnioSign";
import YoshSign from "./YoshSign";

function SmallSign({ value }) {
  let smallSign = <LawSign />;
  switch (value) {
    case "AdultStoreSign":
      smallSign = <AdultStoreSign />;
      break;
    case "ArtistAgencySign":
      smallSign = <ArtistAgencySign />;
      break;
    case "BankSign":
      smallSign = <BankSign />;
      break;
    case "BikeShopSign":
      smallSign = <BikeShopSign />;
      break;
    case "NikoSign":
      smallSign = <NikoSign />;
      break;
    case "ComicStoreSign":
      smallSign = <ComicStoreSign />;
      break;
    case "OooSign":
      smallSign = <OooSign />;
      break;
    case "GameShopSign":
      smallSign = <GameShopSign />;
      break;
    case "IzakayaSign":
      smallSign = <IzakayaSign />;
      break;
    case "JavStoreSign":
      smallSign = <JavStoreSign />;
      break;
    case "LaundrySign":
      smallSign = <LaundrySign />;
      break;
    case "McdSign":
      smallSign = <McdSign />;
      break;
    case "LawSign":
      smallSign = <LawSign />;
      break;
    case "PaystationSign":
      smallSign = <PaystationSign />;
      break;
    case "RamenSign":
      smallSign = <RamenSign />;
      break;
    case "SeeSign":
      smallSign = <SeeSign />;
      break;
    case "LiftSign":
      smallSign = <LiftSign />;
      break;
    case "SushiBarSign":
      smallSign = <SushiBarSign />;
      break;
    case "ToysShopSign":
      smallSign = <ToysShopSign />;
      break;
    case "BjSign":
      smallSign = <BjSign />;
      break;
    case "UdonSign":
      smallSign = <UdonSign />;
      break;
    case "LuqnioSign":
      smallSign = <LuqnioSign />;
      break;
    case "YoshSign":
      smallSign = <YoshSign />;
      break;
    case "FujifilmSign":
      smallSign = <FujifilmSign />;
      break;
    case "NetcafeSign":
      smallSign = <NetcafeSign />;
      break;
    default:
      smallSign = <LawSign />;
  }
  return <>{smallSign}</>;
}

export default SmallSign;
