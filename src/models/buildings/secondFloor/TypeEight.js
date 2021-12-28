/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/buildings/secondFloor/typeEight.glb");
  materials.biruMuda.emissive.b = 10;
  materials.biruMuda.emissive.g = 0.5;
  materials.biruMuda.emissive.r = 0.2;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ObjObject_1.geometry}
          material={materials.palette}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ObjObject_2.geometry}
          material={materials.putih}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ObjObject_3.geometry}
          material={materials.biruMuda}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("/buildings/secondFloor/typeEight.glb");
