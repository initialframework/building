import React from "react";
const AdultStoreSign = React.lazy(() => import("./AdultStoreSign"));
const ArtistAgencySign = React.lazy(() => import("./ArtistAgencySign"));
const BankSign = React.lazy(() => import("./BankSign"));
const BikeShopSign = React.lazy(() => import("./BikeShopSign"));
const BjSign = React.lazy(() => import("./BjSign"));
const CatCafeSign = React.lazy(() => import("./CatCafeSign"));
const CoffeeShopSign = React.lazy(() => import("./CoffeeShopSign"));
const ComicStoreSign = React.lazy(() => import("./ComicStoreSign"));
const DailymartSign = React.lazy(() => import("./DailymartSign"));
const DvdTsubomiSign = React.lazy(() => import("./DvdTsubomiSign"));
const FujifilmSign = React.lazy(() => import("./FujifilmSign"));
const GameShopSign = React.lazy(() => import("./GameShopSign"));
const IzakayaSign = React.lazy(() => import("./IzakayaSign"));
const JavStoreSign = React.lazy(() => import("./JavStoreSign"));
const JTTravelAgencySign = React.lazy(() => import("./JTTravelAgencySign"));
const LaundrySign = React.lazy(() => import("./LaundrySign"));
const LawSign = React.lazy(() => import("./LawSign"));
const LiftSign = React.lazy(() => import("./LiftSign"));
const LuqnioSign = React.lazy(() => import("./LuqnioSign"));
const MaidCafeSign = React.lazy(() => import("./MaidCafeSign"));
const McdSign = React.lazy(() => import("./McdSign"));
const NetcafeSign = React.lazy(() => import("./NetcafeSign"));
const NikoSign = React.lazy(() => import("./NikoSign"));
const OooSign = React.lazy(() => import("./OooSign"));
const PaystationSign = React.lazy(() => import("./PaystationSign"));
const RaceworldWorkshopSign = React.lazy(() =>
  import("./RaceworldWorkshopSign")
);
const RamenIANSign = React.lazy(() => import("./RamenIANSign"));
const RamenSign = React.lazy(() => import("./RamenSign"));
const SeeSign = React.lazy(() => import("./SeeSign"));
const SfcSign = React.lazy(() => import("./SfcSign"));
const StationeryToraSign = React.lazy(() => import("./StationeryToraSign"));
const SushiBarSign = React.lazy(() => import("./SushiBarSign"));
const ToysShopSign = React.lazy(() => import("./ToysShopSign"));
const UdonSign = React.lazy(() => import("./UdonSign"));
const YoshSign = React.lazy(() => import("./YoshSign"));
const ZeroFourMartSign = React.lazy(() => import("./ZeroFourMartSign"));
const MechaCafeSign = React.lazy(() => import("./MechaCafeSign"));
const WeasleysSign = React.lazy(() => import("./WeasleysSign"));

function SmallSign({ value }) {
  let smallSign = <LawSign />;
  switch (value) {
    case "ZeroFourMartSign":
      smallSign = <ZeroFourMartSign />;
      break;
    case "WeasleysSign":
      smallSign = <WeasleysSign />;
      break;
    case "JttTravelAgencySign":
      smallSign = <JTTravelAgencySign />;
      break;
    case "StationeryToraSign":
      smallSign = <StationeryToraSign />;
      break;
    case "SfcSign":
      smallSign = <SfcSign />;
      break;
    case "RamenIanSign":
      smallSign = <RamenIANSign />;
      break;
    case "RaceworldWorkshopSign":
      smallSign = <RaceworldWorkshopSign />;
      break;
    case "MaidCafeSign":
      smallSign = <MaidCafeSign />;
      break;
    case "DvdTsubomiSign":
      smallSign = <DvdTsubomiSign />;
      break;
    case "CoffeeShopSign":
      smallSign = <CoffeeShopSign />;
      break;
    case "DailymartSign":
      smallSign = <DailymartSign />;
      break;
    case "CatCafeSign":
      smallSign = <CatCafeSign />;
      break;
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
    case "FwifilmSign":
      smallSign = <FujifilmSign />;
      break;
    case "NetcafeSign":
      smallSign = <NetcafeSign />;
      break;
    case "MechaCafeSign":
      smallSign = <MechaCafeSign />;
      break;
    default:
      smallSign = <LawSign />;
  }
  return <>{smallSign}</>;
}

export default SmallSign;
