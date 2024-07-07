import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props:any) {
  const { nodes, materials } = useGLTF('/3D-Logo.gltf')
  const logoref = useRef()

  useFrame(() => {
    logoref.current.rotation.z += 0.001;
  });

  // Assume the center of the model is at [1.268, 1.2435, -1.315]
  // (This is half of [2.536, 2.487, -2.63])
  const centerX = 10.268;
  const centerY = 1.2435;
  const centerZ = -1.315;

  return (
    <group ref={logoref} {...props} dispose={null} position={[0,-8,-20]} rotation-x={1.6}>
      <group position={[-centerX, -centerY, -centerZ]}>
        <mesh 
          geometry={nodes['7-L'].geometry} 
          material={materials.Glass} 
          position={[2.536, 2.487, -2.63]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3D-Logo.gltf')