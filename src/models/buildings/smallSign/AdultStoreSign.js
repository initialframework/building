/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/adultStoreSign.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.ObjObject_1.geometry} material={materials.palette} />
        <mesh geometry={nodes.ObjObject_2.geometry} material={materials.putih} />
        <mesh geometry={nodes.ObjObject_3.geometry} material={materials.merah} />
        <mesh geometry={nodes.ObjObject_4.geometry} material={materials.pink} />
      </group>
    </group>
  )
}

useGLTF.preload('/adultStoreSign.glb')
