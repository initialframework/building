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
import { Data } from "./app/dummyData";

function CanvasJS() {
  let url = useParams().id;
  const buildingByUrl = Data.find(({ id }) => id === url);
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

  return (
    <React.Fragment>
      <Canvas
        dpr={window.devicePixelRatio}
        shadows
        camera={{ position: [0, 18, 20] }}
      >
        <color attach="background" args={["#050405"]} />
        <ambientLight color={"#ffff"} intensity={0.2} />
        {/* <pointLight
          color={"#ff0040"}
          position={[3, 30, 3]}
          intensity={0.5}
          castShadow
        /> */}
        <pointLight
          color={"#ffffff"}
          position={[0, 7, 0]}
          intensity={0.7}
          castShadow
        />
        {/* <pointLight
          color={"#ff0040"}
          position={[0, 20, 0]}
          intensity={1}
          penumbra={0.2}
          decay={2}
          distance={200}
          castShadow
        /> */}
        <spotLight
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
        />
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
        <group position={[0, 0, 0]}>
          <mesh
            rotation-x={-Math.PI / 2}
            position={[0, 0.01, 0]}
            scale={[1000, 50, 1000]}
            receiveShadow
            renderOrder={200}
          >
            <planeBufferGeometry attach="geometry" />
            <shadowMaterial
              attach="material"
              transparent
              color="#000"
              opacity={1}
            />
            <MeshReflectorMaterial
              blur={[100, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={3.5}
              depthScale={1}
              minDepthThreshold={1}
              maxDepthThreshold={1}
              color="#131842"
              metalness={0}
              roughness={0.5}
            />
          </mesh>
        </group>
        <Suspense fallback={null}>
          <EffectComposer multisampling={0}>
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

export default CanvasJS;
