/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/buildings/smallSign/ramenIANSign.glb");
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
      </group>
    </group>
  );
}

useGLTF.preload("/buildings/smallSign/ramenIANSign.glb");
