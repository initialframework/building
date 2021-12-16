import React from "react";
import AdultStoreSign from "./AdultStoreSign";
import ArtistAgencySign from "./ArtistAgencySign";
import BankSign from "./BankSign";
import BikeShopSign from "./BikeShopSign";
import CameraStoreSign from "./CameraStoreSign";
import ComicStoreSign from "./ComicStoreSign";
import DvdSign from "./DvdSign";
import FujifilmSign from "./FujifilmSign";
import GameShopSign from "./GameShopSign";
import IzakayaSign from "./IzakayaSign";
import JavStoreSign from "./JavStoreSign";
import LaundrySign from "./LaundrySign";
import McdSign from "./McdSign";
import MinimartSign from "./MinimartSign";
import NetcafeSign from "./NetcafeSign";
import PlaystationSign from "./PlaystationSign";
import RamenSign from "./RamenSign";
import SegaSign from "./SegaSign";
import StationerySign from "./StationerySign";
import SushiBarSign from "./SushiBarSign";
import ToysShopSign from "./ToysShopSign";
import TravelAgencySign from "./TravelAgencySign";
import UdonSign from "./UdonSign";
import UniqloSign from "./UniqloSign";
import YoshinoyaSign from "./YoshinoyaSign";

function SmallSign({ value }) {
  let smallSign = <MinimartSign />;
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
    case "CameraStoreSign":
      smallSign = <CameraStoreSign />;
      break;
    case "ComicStoreSign":
      smallSign = <ComicStoreSign />;
      break;
    case "DvdSign":
      smallSign = <DvdSign />;
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
    case "MinimartSign":
      smallSign = <MinimartSign />;
      break;
    case "PlaystationSign":
      smallSign = <PlaystationSign />;
      break;
    case "RamenSign":
      smallSign = <RamenSign />;
      break;
    case "SegaSign":
      smallSign = <SegaSign />;
      break;
    case "StationerySign":
      smallSign = <StationerySign />;
      break;
    case "SushiBarSign":
      smallSign = <SushiBarSign />;
      break;
    case "ToysShopSign":
      smallSign = <ToysShopSign />;
      break;
    case "TravelAgencySign":
      smallSign = <TravelAgencySign />;
      break;
    case "UdonSign":
      smallSign = <UdonSign />;
      break;
    case "UniqloSign":
      smallSign = <UniqloSign />;
      break;
    case "YoshinoyaSign":
      smallSign = <YoshinoyaSign />;
      break;
    case "FujifilmSign":
      smallSign = <FujifilmSign />;
      break;
    case "NetcafeSign":
      smallSign = <NetcafeSign />;
      break;
    default:
      smallSign = <MinimartSign />;
  }
  return <>{smallSign}</>;
}

export default SmallSign;
