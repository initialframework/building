import React, { Suspense } from "react";
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
import { fetchBuildingById } from "./app/buildingsSlice";
import { useDispatch } from "react-redux";
import Base from "./models/buildings/base/Base";
import FirstFloor from "./models/buildings/firstFloor/FirstFloor";
import { useParams } from "react-router-dom";

function App() {
  const url = useParams("id");
  console.log(url);
  const dispatch = useDispatch();
  const buildingById = useSelector((state) => state.buildings.buildingById);
  const buildingByIdStatus = useSelector(
    (state) => state.buildings.buildingByIdStatus
  );
  console.log(buildingById);

  // useEffect(() => {
  //   if (buildingByIdStatus === "idle") {
  //     dispatch(fetchBuildingById(url));
  //   }
  // }, [buildingByIdStatus,url , dispatch]);
  return (
    <Canvas
      dpr={window.devicePixelRatio}
      shadows
      camera={{ position: [-20, 20, 20] }}
    >
      <color attach="background" args={["#050405"]} />
      <ambientLight color={"#ffff"} intensity={0.2} />
      <pointLight
        color={"#ff0040"}
        position={[3, 30, 3]}
        intensity={1}
        castShadow
      />
      <pointLight
        color={"#ffffff"}
        position={[0, 30, -20]}
        intensity={1}
        castShadow
      />
      <pointLight
        color={"#ff0040"}
        position={[0, 7, 0]}
        intensity={2}
        penumbra={0.2}
        decay={2}
        distance={200}
        castShadow
      />
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
          scale={[2000, 2000, 2000]}
          receiveShadow
          renderOrder={2000}
        >
          <planeBufferGeometry attach="geometry" />
          <shadowMaterial
            attach="material"
            transparent
            color="#000"
            opacity={0.5}
          />
          <MeshReflectorMaterial
            blur={[400, 100]}
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
          <group position={[0, 5, 0]}>
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
          <Base value={buildingById.attributes[0].models} />
          <FirstFloor value={"TypeSeven"} />
        </EffectComposer>
      </Suspense>
      <OrbitControls enableZoom={true} enablePan={true} />
      <PerspectiveCamera />
    </Canvas>
  );
}

export default App;
