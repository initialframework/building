import React from "react";
const AdultStore = React.lazy(() => import("./AdultStore"));
const ArtistAgency = React.lazy(() => import("./ArtistAgency"));
const Bank = React.lazy(() => import("./Bank"));
const BikeShop = React.lazy(() => import("./BikeShop"));
const Bj = React.lazy(() => import("./Bj"));
const CatCafe = React.lazy(() => import("./CatCafe"));
const CoffeeShop = React.lazy(() => import("./CoffeeShop"));
const Dailymart = React.lazy(() => import("./Dailymart"));
const DvdTsubomi = React.lazy(() => import("./DvdTsubomi"));
const Fujifilm = React.lazy(() => import("./Fujifilm"));
const GameShop = React.lazy(() => import("./GameShop"));
const Izakaya = React.lazy(() => import("./Izakaya"));
const JavStore = React.lazy(() => import("./JavStore"));
const Laundry = React.lazy(() => import("./Laundry"));
const Law = React.lazy(() => import("./Law"));
const Lift = React.lazy(() => import("./Lift"));
const Luqnio = React.lazy(() => import("./Luqnio"));
const MaidCafe = React.lazy(() => import("./MaidCafe"));
const NetCafe = React.lazy(() => import("./NetCafe"));
const Niko = React.lazy(() => import("./Niko"));
const Ooo = React.lazy(() => import("./Ooo"));
const Paystation = React.lazy(() => import("./Paystation"));
const RaceworldWorkshop = React.lazy(() => import("./RaceworldWorkshop"));
const Ramen = React.lazy(() => import("./Ramen"));
const RamenIAN = React.lazy(() => import("./RamenIAN"));
const See = React.lazy(() => import("./See"));
const Sfc = React.lazy(() => import("./Sfc"));
const StationeryTora = React.lazy(() => import("./StationeryTora"));
const SushiBar = React.lazy(() => import("./SushiBar"));
const ToysShop = React.lazy(() => import("./ToysShop"));
const TravelAgencyJapan = React.lazy(() => import("./TravelAgencyJapan"));
const Udon = React.lazy(() => import("./Udon"));
const Weasleys = React.lazy(() => import("./Weasleys"));
const Yosh = React.lazy(() => import("./Yosh"));
const ZeroFourMart = React.lazy(() => import("./ZeroFourMart"));

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
    case "RamenIan":
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
