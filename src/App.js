import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Reflector,
} from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  SMAA,
  ToneMapping,
} from "@react-three/postprocessing";
import { Resizer, KernelSize, BlendFunction } from "postprocessing";
import Fireflies from "./components/Fireflies";
import BaseFive from "./models/buildings/base/BaseFive";
import TypeEight from "./models/buildings/firstFloor/TypeEight";
import TypeThirteen from "./models/buildings/secondFloor/TypeThirteen";
import BarOne from "./models/buildings/front/BarOne";
import Izakaya from "./models/buildings/mainSign/Izakaya";
import IzakayaSign from "./models/buildings/smallSign/IzakayaSign";
import LampFour from "./models/buildings/accBase/LampFour";
function App() {
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
        // angle={Math.PI / 4}
        intensity={0.3}
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
        <group position={[0, 0, 0]}>
          <mesh
            rotation-x={-Math.PI / 2}
            position={[0, 0.01, 0]}
            scale={[2000, 2000, 2000]}
            receiveShadow
            renderOrder={1000}
          >
            <planeBufferGeometry attach="geometry" />
            <shadowMaterial
              attach="material"
              transparent
              color="#000"
              opacity={0.5}
            />
          </mesh>
          <Reflector
            resolution={1024}
            mirror={0.5}
            mixBlur={1}
            mixStrength={2}
            depthScale={1}
            minDepthThreshold={1}
            maxDepthThreshold={1}
            rotation-x={-Math.PI / 2}
            args={[2000, 2000]}
          >
            {(Material, props) => (
              <Material
                {...props}
                color="#3e86b2"
                metalness={0}
                roughness={0.5}
              />
            )}
          </Reflector>
        </group>
        <EffectComposer multisampling={0}>
          {/* <SMAA /> */}
          {/* <ToneMapping
            blendFunction={BlendFunction.NORMAL}
            adaptive={true}
            resolution={256}
            middleGrey={0.6}
            maxLuminance={16.0}
            averageLuminance={1.0}
            adaptationRate={1.0}
          /> */}
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

          <BaseFive />
          <TypeEight />
          <BarOne />
          <TypeThirteen />
          <Izakaya />
          {/* <IzakayaSign /> */}
          <LampFour />
        </EffectComposer>
      </Suspense>
      <OrbitControls enableZoom={true} enablePan={true} />
      <PerspectiveCamera />
    </Canvas>
  );
}

export default App;
