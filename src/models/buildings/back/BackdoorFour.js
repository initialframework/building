/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/buildings/back/backdoorFour.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.ObjObject_1.geometry}
          material={materials.palette}
        />
        <mesh
          geometry={nodes.ObjObject_2.geometry}
          material={materials.putih}
        />
        <mesh
          geometry={nodes.ObjObject_3.geometry}
          material={materials.hijau}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("/buildings/back/backdoorFour.glb");
