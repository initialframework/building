import React, { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "./app/dummyData";
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

function CanvasJS() {
  const url = useParams("id");
  console.log(url.id);
  const dispatch = useDispatch();
  const buildingById = useSelector((state) => state.buildings.buildingById);
  const buildingByIdStatus = useSelector(
    (state) => state.buildings.buildingByIdStatus
  );
  console.log(Data);

  useEffect(() => {
    if (buildingByIdStatus === "idle") {
      dispatch(fetchBuildingByUrl(url.id));
    }
  }, [buildingByIdStatus, dispatch, url]);

  return (
    <React.Fragment>
      <Canvas
        dpr={window.devicePixelRatio}
        shadows
        camera={{ position: [-20, 20, 20] }}
      >
        <color attach="background" args={["#050405"]} />
        <ambientLight color={"#ffff"} intensity={0.2} />
        {/* <pointLight
color={"#ff0040"}
position={[3, 30, 3]}
intensity={1}
castShadow
/> */}
        <pointLight
          color={"#ffffff"}
          position={[0, 7, 0]}
          intensity={1}
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
        {/* <directionalLight
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
        /> */}
        <group position={[0, 0, 0]}>
          <mesh
            rotation-x={-Math.PI / 2}
            position={[0, 0.01, 0]}
            scale={[50, 50, 50]}
            receiveShadow
            renderOrder={200}
          >
            <planeBufferGeometry attach="geometry" />
            <shadowMaterial
              attach="material"
              transparent
              color="#131842"
              opacity={1}
            />
            {/* <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={3.5}
              depthScale={1}
              minDepthThreshold={1}
              maxDepthThreshold={1}
              color="#131842"
              metalness={5}
              roughness={0.5}
            /> */}
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
            <Base value={buildingById.attributes[0].value} />
            <AccBase value={buildingById.attributes[1].value} />
            <FirstFloor value={buildingById.attributes[2].value} />
            <AccFirstFloorFrontLeft value={buildingById.attributes[3].value} />
            <AccFirstFloorFrontRight value={buildingById.attributes[4].value} />
            <AccFirstFloorRightLowerBack
              value={buildingById.attributes[5].value}
            />
            <AccFirstFloorRightLowerFront
              value={buildingById.attributes[6].value}
            />
            <AccFirstFloorRightUpperBack
              value={buildingById.attributes[7].value}
            />
            <AccFirstFloorRightUpperFront
              value={buildingById.attributes[8].value}
            />
            <SecondFloor value={buildingById.attributes[9].value} />
            <AccSecondFloorBackLeft value={buildingById.attributes[10].value} />
            <AccSecondFloorBackRight
              value={buildingById.attributes[11].value}
            />
            <AccSecondFloorLeftBack value={buildingById.attributes[12].value} />
            <AccSecondFloorLeftFront
              value={buildingById.attributes[13].value}
            />
            <AccSecondFloorRightBack
              value={buildingById.attributes[14].value}
            />
            <AccSecondFloorRightFront
              value={buildingById.attributes[15].value}
            />
            <Front value={buildingById.attributes[16].value} />
            <MainSign value={buildingById.attributes[17].value} />
            <SmallSign value={buildingById.attributes[18].value} />
          </EffectComposer>
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} />
        <PerspectiveCamera />
      </Canvas>
    </React.Fragment>
  );
}

export default CanvasJS;
