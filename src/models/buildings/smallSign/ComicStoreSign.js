/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/buildings/smallSign/comicStoreSign.glb"
  );
  materials.merah.emissive.b = 0.2;
  materials.merah.emissive.g = 0.5;
  materials.merah.emissive.r = 10;
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
          material={materials.merah}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("/buildings/smallSign/comicStoreSign.glb");
