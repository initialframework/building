import React, { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Bloom, EffectComposer, SMAA } from "@react-three/postprocessing";
import { Resizer, KernelSize } from "postprocessing";
import Fireflies from "./components/Fireflies";
import { useSelector } from "react-redux";
import { fetchBuildingByUrl } from "./app/buildingsSlice";
import { useDispatch } from "react-redux";
import Base from "./models/buildings/base/Base";
import FirstFloor from "./models/buildings/firstFloor/FirstFloor";
import SecondFloor from "./models/buildings/secondFloor/SecondFloor";
import AccBase from "./models/buildings/accBase/AccBase";
import AccFirstFloorFrontLeft from "./models/buildings/accFirstFloorFrontLeft/AccFirstFloorFrontLeft";
import AccFirstFloorFrontRight from "./models/buildings/accFirstFloorFrontRight/AccFirstFloorFrontRight";
import AccFirstFloorRightLowerBack from "./models/buildings/accFirstFloorRightLowerBack/AccFirstFloorRightLowerBack";
import AccFirstFloorRightLowerFront from "./models/buildings/accFirstFloorRightLowerFront/AccFirstFloorRightLowerFront";
import AccFirstFloorRightUpperBack from "./models/buildings/accFirstFloorRightUpperBack/AccFirstFloorRightUpperBack";
import AccFirstFloorRightUpperFront from "./models/buildings/accFirstFloorRightUpperFront/AccFirstFloorRightUpperFront";
import AccSecondFloorBackLeft from "./models/buildings/accSecondFloorBackLeft/AccSecondFloorBackLeft";
import AccSecondFloorBackRight from "./models/buildings/accSecondFloorBackRight/AccSecondFloorBackRight";
import AccSecondFloorLeftBack from "./models/buildings/accSecondFloorLeftBack/AccSecondFloorLeftBack";
import AccSecondFloorLeftFront from "./models/buildings/accSecondFloorLeftFront/AccSecondFloorLeftFront";
import AccSecondFloorRightBack from "./models/buildings/accSecondFloorRightBack/AccSecondFloorRightBack";
import AccSecondFloorRightFront from "./models/buildings/accSecondFloorRightFront/AccSecondFloorRightFront";
import Front from "./models/buildings/front/Front";
import MainSign from "./models/buildings/mainSign/MainSign";
import SmallSign from "./models/buildings/smallSign/SmallSign";

const Data = [
  {
    id: "1",
    attributes: [
      {
        trait_type: "base",
        value: "BaseThree",
      },
      {
        trait_type: "accBase",
        value: "PoleTwo",
      },
      {
        trait_type: "firstFloor",
        value: "TypeFourteen",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "CafeSignBoard",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "Bonsai",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "Bottles",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "BlueTrashBin",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "CondenserUnitTypeA",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "ElectricBox",
      },
      {
        trait_type: "secondFloor",
        value: "TypeFourteen",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeABackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeABackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "CondenserUnitTypeBLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeALeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "CondenserUnitTypeARightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeBRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "WhiteTwo",
      },
      {
        trait_type: "mainSign",
        value: "Dvd",
      },
      {
        trait_type: "smallSing",
        value: "DvdSign",
      },
    ],
  },
  {
    id: "2",
    attributes: [
      {
        trait_type: "base",
        value: "BaseFour",
      },
      {
        trait_type: "accBase",
        value: "LampTwo",
      },
      {
        trait_type: "firstFloor",
        value: "TypeOne",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "CafeSignBoard",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "GachaponMachine",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "Bike",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "WoodenBox",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "CondenserUnitTypeA",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "Lantern",
      },
      {
        trait_type: "secondFloor",
        value: "TypeFive",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeBBackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeABackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "CondenserUnitTypeCLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeDLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "CondenserUnitTypeCRightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeARightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "WhiteThree",
      },
      {
        trait_type: "mainSign",
        value: "Laundry",
      },
      {
        trait_type: "smallSing",
        value: "LaundrySign",
      },
    ],
  },
  {
    id: "3",
    attributes: [
      {
        trait_type: "base",
        value: "BaseSix",
      },
      {
        trait_type: "accBase",
        value: "PoleNine",
      },
      {
        trait_type: "firstFloor",
        value: "TypeEighteen",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "VendingMachine",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "Mailbox",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "Bike",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "WoodenBox",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "CompoundElectricBox",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "Pipe",
      },
      {
        trait_type: "secondFloor",
        value: "TypeOne",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeABackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeCBackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "WallVentLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "WallVentLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "WallVentRightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeCRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "ClassicTwo",
      },
      {
        trait_type: "mainSign",
        value: "Mcd",
      },
      {
        trait_type: "smallSing",
        value: "McdSign",
      },
    ],
  },
  {
    id: "4",
    attributes: [
      {
        trait_type: "base",
        value: "BaseOne",
      },
      {
        trait_type: "accBase",
        value: "LampThree",
      },
      {
        trait_type: "firstFloor",
        value: "TypeSeventeen",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "CafeSignBoard",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "Bonsai",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "TrashBinWithCat",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "WoodenBox",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "CompoundElectricBox",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "CondenserUnitTypeB",
      },
      {
        trait_type: "secondFloor",
        value: "TypeNine",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeABackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "WallVentBackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "WallVentLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeCLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "CondenserUnitTypeBRightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "WallVentRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "WhiteThree",
      },
      {
        trait_type: "mainSign",
        value: "JavStore",
      },
      {
        trait_type: "smallSing",
        value: "JavStoreSign",
      },
    ],
  },
  {
    id: "5",
    attributes: [
      {
        trait_type: "base",
        value: "BaseOne",
      },
      {
        trait_type: "accBase",
        value: "PoleOne",
      },
      {
        trait_type: "firstFloor",
        value: "TypeThirteen",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "Mailbox",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "CondenserUnitTypeC",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "Crate",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "VendingMachine",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "BigElectricBox",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "CondenserUnitTypeB",
      },
      {
        trait_type: "secondFloor",
        value: "TypeSeventeen",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "WallVentBackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeDBackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "CondenserUnitTypeDLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeDLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "WallVentRightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeBRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "ClassicTwo",
      },
      {
        trait_type: "mainSign",
        value: "AdultStore",
      },
      {
        trait_type: "smallSing",
        value: "AdultStoreSign",
      },
    ],
  },
  {
    id: "6",
    attributes: [
      {
        trait_type: "base",
        value: "BaseSix",
      },
      {
        trait_type: "accBase",
        value: "SquareSign",
      },
      {
        trait_type: "firstFloor",
        value: "TypeSix",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "Bike",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "Mailbox",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "GreenTrashBin",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "VendingMachine",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "KitchenVent",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "Lantern",
      },
      {
        trait_type: "secondFloor",
        value: "TypeSix",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeDBackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "WallVentBackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "CondenserUnitTypeDLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeBLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "CondenserUnitTypeDRightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeBRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "Laundry",
      },
      {
        trait_type: "mainSign",
        value: "TravelAgency",
      },
      {
        trait_type: "smallSing",
        value: "TravelAgencySign",
      },
    ],
  },
  {
    id: "7",
    attributes: [
      {
        trait_type: "base",
        value: "BaseFive",
      },
      {
        trait_type: "accBase",
        value: "PoleEight",
      },
      {
        trait_type: "firstFloor",
        value: "TypeTwo",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "Crate",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "GachaponMachine",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "Bottles",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "BlueTrashBin",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "CondenserUnitTypeD",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "Pipe",
      },
      {
        trait_type: "secondFloor",
        value: "TypeSeventeen",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeBBackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeBBackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "CondenserUnitTypeBLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeBLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "CondenserUnitTypeDRightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeCRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "WhiteTwo",
      },
      {
        trait_type: "mainSign",
        value: "Laundry",
      },
      {
        trait_type: "smallSing",
        value: "LaundrySign",
      },
    ],
  },
  {
    id: "8",
    attributes: [
      {
        trait_type: "base",
        value: "BaseFive",
      },
      {
        trait_type: "accBase",
        value: "TrafficLightTwo",
      },
      {
        trait_type: "firstFloor",
        value: "TypeThirteen",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "CafeSignBoard",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "Bonsai",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "Bottles",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "Poster",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "CompoundElectricBox",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "Lantern",
      },
      {
        trait_type: "secondFloor",
        value: "TypeNine",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeBBackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeCBackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "CondenserUnitTypeCLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeCLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "CondenserUnitTypeBRightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeDRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "RetroThree",
      },
      {
        trait_type: "mainSign",
        value: "Dvd",
      },
      {
        trait_type: "smallSing",
        value: "DvdSign",
      },
    ],
  },
  {
    id: "9",
    attributes: [
      {
        trait_type: "base",
        value: "BaseTwo",
      },
      {
        trait_type: "accBase",
        value: "BigFence",
      },
      {
        trait_type: "firstFloor",
        value: "TypeTwo",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "Crate",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "Bonsai",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "TrashBinWithCat",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "WoodenBox",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "BigElectricBox",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "ElectricBox",
      },
      {
        trait_type: "secondFloor",
        value: "TypeThree",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeABackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeABackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "WallVentLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeDLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "WallVentRightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeDRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "ClassicOne",
      },
      {
        trait_type: "mainSign",
        value: "ToysShop",
      },
      {
        trait_type: "smallSing",
        value: "ToysShopSign",
      },
    ],
  },
  {
    id: "10",
    attributes: [
      {
        trait_type: "base",
        value: "BaseFour",
      },
      {
        trait_type: "accBase",
        value: "SquareSign",
      },
      {
        trait_type: "firstFloor",
        value: "TypeThirteen",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "Crate",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "Mailbox",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "TrashBinWithCat",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "VendingMachine",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "CondenserUnitTypeD",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "LightBox",
      },
      {
        trait_type: "secondFloor",
        value: "TypeSeventeen",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeCBackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeCBackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "CondenserUnitTypeCLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "WallVentLeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "CondenserUnitTypeARightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeARightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "StoreTwo",
      },
      {
        trait_type: "mainSign",
        value: "Izakaya",
      },
      {
        trait_type: "smallSing",
        value: "IzakayaSign",
      },
    ],
  },
];

function CanvasJS() {
  let url = useParams().id;

  // const dispatch = useDispatch();

  // const buildingByUrl = useSelector((state) => state.buildings.buildingByUrl);

  // const buildingByUrlStatus = useSelector(
  //   (state) => state.buildings.buildingByUrlStatus
  // );

  // useEffect(() => {
  //   if (buildingByUrlStatus === "idle") {
  //     dispatch(fetchBuildingByUrl(url));
  //   }
  // }, [buildingByUrlStatus, dispatch, url]);

  const buildingByUrl = Data.find(({ id }) => id === url);
  console.log(buildingByUrl);

  return (
    <React.Fragment>
      <Canvas
        dpr={window.devicePixelRatio}
        shadows
        camera={{ position: [0, 18, 20] }}
      >
        <color attach="background" args={["#050405"]} />
        <hemisphereLight intensity={0.2} />
        <ambientLight color={"#ffff"} intensity={0.5} />
        <pointLight
          color={"#ff0040"}
          position={[3, 30, 3]}
          intensity={0.5}
          castShadow
        />
        {/* <pointLight
          color={"#ffffff"}
          position={[0, 7, 0]}
          intensity={0.7}
          castShadow
        /> */}
        {/* <pointLight
          color={"#ff0040"}
          position={[0, 20, 0]}
          intensity={1}
          penumbra={0.2}
          decay={2}
          distance={200}
          castShadow
        /> */}
        {/* <spotLight
          penumbra={1}
          angle={1}
          castShadow
          position={[10, 60, -5]}
          intensity={1}
          shadow-mapSize={[512, 512]}
        /> */}
        {/* <spotLight
          castShadow
          angle={Math.PI / 4}
          position={[15, 40, 35]}
          penumbra={0.2}
          decay={2}
          distance={200}
          intensity={0.5}
          shadowCameraNear={10}
          shadowCameraFar={200}
          shadowMapHeight={512}
          shadowMapWidth={512}
        /> */}
        <directionalLight
          color={"#ffff"}
          intensity={0.5}
          castShadow
          shadowCameraNear={1}
          shadowCameraFar={20}
          shadowCameraRight={15}
          shadowCameraLeft={-15}
          shadowCameraTop={20}
          shadowCameraBottom={-15}
          shadowMapHeight={1024}
          shadowMapWidth={1024}
        />

        <Suspense fallback={null}>
          <EffectComposer multisampling={0}>
            <group position={[0, 0, 0]}>
              {/* <mesh
                rotation-x={-Math.PI / 2}
                position={[0, 0.01, 0]}
                scale={[50, 50, 1000]}
                receiveShadow
                renderOrder={200}
              >
                <planeBufferGeometry attach="geometry" />
                <shadowMaterial
                  attach="material"
                  transparent
                  color="#000"
                  opacity={0.5}
                /> */}
              <mesh
                rotation-x={-Math.PI / 2}
                position={[0, 0, 0]}
                scale={[20, 20, 20]}
                receiveShadow
                renderOrder={100000}
              >
                <planeGeometry />
                <shadowMaterial transparent color="#251005" opacity={0.7} />

                {/* <MeshReflectorMaterial
                  blur={[100, 100]}
                  resolution={1024}
                  mixBlur={1}
                  mixStrength={3.5}
                  depthScale={1}
                  minDepthThreshold={1}
                  maxDepthThreshold={1}
                  color="#131842"
                  metalness={0.5}
                  roughness={0.2}
                /> */}
              </mesh>
            </group>
            <SMAA />
            <group position={[0, 10, 0]}>
              <Fireflies count={50} />
            </group>
            <Environment files="satara_night_no_lamps_4k.hdr" />
            <Bloom
              intensity={2}
              width={Resizer.AUTO_SIZE}
              height={Resizer.AUTO_SIZE}
              kernelSize={KernelSize.LARGE}
              luminanceThreshold={0.7}
              luminanceSmoothing={0.2}
            />
            {/* <Models buildingByUrl={buildingByUrl} /> */}
            <Base value={buildingByUrl.attributes[0].value} />
            <AccBase value={buildingByUrl.attributes[1].value} />
            <FirstFloor value={buildingByUrl.attributes[2].value} />
            <AccFirstFloorFrontLeft value={buildingByUrl.attributes[3].value} />
            <AccFirstFloorFrontRight
              value={buildingByUrl.attributes[4].value}
            />
            <AccFirstFloorRightLowerBack
              value={buildingByUrl.attributes[5].value}
            />
            <AccFirstFloorRightLowerFront
              value={buildingByUrl.attributes[6].value}
            />
            <AccFirstFloorRightUpperBack
              value={buildingByUrl.attributes[7].value}
            />
            <AccFirstFloorRightUpperFront
              value={buildingByUrl.attributes[8].value}
            />
            <SecondFloor value={buildingByUrl.attributes[9].value} />
            <AccSecondFloorBackLeft
              value={buildingByUrl.attributes[10].value}
            />
            <AccSecondFloorBackRight
              value={buildingByUrl.attributes[11].value}
            />
            <AccSecondFloorLeftBack
              value={buildingByUrl.attributes[12].value}
            />
            <AccSecondFloorLeftFront
              value={buildingByUrl.attributes[13].value}
            />
            <AccSecondFloorRightBack
              value={buildingByUrl.attributes[14].value}
            />
            <AccSecondFloorRightFront
              value={buildingByUrl.attributes[15].value}
            />
            <Front value={buildingByUrl.attributes[16].value} />
            <MainSign value={buildingByUrl.attributes[17].value} />
            <SmallSign value={buildingByUrl.attributes[18].value} />
          </EffectComposer>
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} />
        <PerspectiveCamera />
      </Canvas>
    </React.Fragment>
  );
}

function Models({ buildingByUrl }) {
  console.log(buildingByUrl);
  return (
    <>
      <Base value={buildingByUrl[0].value} />
      <AccBase value={buildingByUrl[1].value} />
      <FirstFloor value={buildingByUrl[2].value} />
      <AccFirstFloorFrontLeft value={buildingByUrl[3].value} />
      <AccFirstFloorFrontRight value={buildingByUrl[4].value} />
      <AccFirstFloorRightLowerBack value={buildingByUrl[5].value} />
      <AccFirstFloorRightLowerFront value={buildingByUrl[6].value} />
      <AccFirstFloorRightUpperBack value={buildingByUrl[7].value} />
      <AccFirstFloorRightUpperFront value={buildingByUrl[8].value} />
      <SecondFloor value={buildingByUrl[9].value} />
      <AccSecondFloorBackLeft value={buildingByUrl[10].value} />
      <AccSecondFloorBackRight value={buildingByUrl[11].value} />
      <AccSecondFloorLeftBack value={buildingByUrl[12].value} />
      <AccSecondFloorLeftFront value={buildingByUrl[13].value} />
      <AccSecondFloorRightBack value={buildingByUrl[14].value} />
      <AccSecondFloorRightFront value={buildingByUrl[15].value} />
      <Front value={buildingByUrl[16].value} />
      <MainSign value={buildingByUrl[17].value} />
      <SmallSign value={buildingByUrl[18].value} />
    </>
  );
}

export default CanvasJS;
