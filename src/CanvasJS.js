import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Bloom, EffectComposer, SSAO } from "@react-three/postprocessing";
import { Resizer, KernelSize } from "postprocessing";
import Model from "./models/Model";
// import Fireflies from "./components/Fireflies";
// import { fetchBuildingByUrl } from "./app/buildingsSlice";
// import { Data } from "./Data";

function CanvasJS() {
  let url = useParams().id;
  let data = useSelector((state) => state.buildings.buildingListByUrl);
  data = data[url - 1].attributes;

  return (
    <React.Fragment>
      <Canvas
        dpr={window.devicePixelRatio}
        shadows
        camera={{
          position: [-15, 10, 15],
        }}
        frameloop="demand"
      >
        <color attach="background" args={["#070a0d"]} />
        <hemisphereLight intensity={0.1} />
        <spotLight
          position={[15.903, 35.59, 16.093]}
          intensity={0.3}
          color={"#ffffff"}
          distance={61.68}
          angle={0.574}
          penumbra={0.5}
          decay={0}
          castShadow
          shadowBias={-0.00013}
        />
        <Suspense fallback={null}>
          <group position={[0, -6, 0]}>
            <Model data={data} />
          </group>
        </Suspense>
        <Suspense fallback={null} smaa>
          <group position={[0, -6, 0]}>
            <EffectComposer>
              <group position={[0, 0, 0]}>
                <mesh
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
                  />
                </mesh>
              </group>
              {/* <SMAA /> */}
              {/* <group position={[0, 5, 0]}>
                <Fireflies count={65} />
              </group> */}
              <Environment preset="night" />
              <Bloom
                intensity={1}
                width={Resizer.AUTO_SIZE}
                height={Resizer.AUTO_SIZE}
                kernelSize={KernelSize.LARGE}
                luminanceThreshold={0.6}
                luminanceSmoothing={0.2}
              />
              <SSAO />
            </EffectComposer>
          </group>
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} />
        <PerspectiveCamera />
      </Canvas>
    </React.Fragment>
  );
}

export default CanvasJS;
