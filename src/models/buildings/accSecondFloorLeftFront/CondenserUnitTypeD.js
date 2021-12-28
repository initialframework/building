/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/buildings/accSecondFloorLeftFront/condenserUnitTypeD.glb"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ObjObject.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

// useGLTF.preload("/buildings/accSecondFloorLeftFront/condenserUnitTypeD.glb");