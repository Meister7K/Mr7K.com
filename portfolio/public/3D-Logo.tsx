// @ts-nocheck
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from 'leva'
import { roughness, thickness, transmission } from 'three/examples/jsm/nodes/core/PropertyNode.js';

export default function Model(props:any) {
  const { nodes, materials } = useGLTF('/3D-Logo.gltf')
  const logoref = useRef()
  const lightref = useRef()
 const [isHover, setIsHover]= useState(false)
  const [active, setActive] = useState(false)

//   const testMaterialProps = useControls({

//     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

//     roughness: { value: 0, min: 0, max: 1, step: 0.1 },

//     transmission: {value: 1, min: 0, max: 1, step: 0.1},

//     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

//     chromaticAberration: { value: 0.02, min: 0, max: 1},

//     backside: { value: true},

// })

const materialProps={
  thickness:3,
  roughness: 0.07,
  transmission: 1,
  ior: 3,
  chromaticAberration: 1,
  backside:true
}
  
  useFrame(() => {
    

    if(isHover){
      logoref.current.rotation.z += 0.002;
    }else{
      logoref.current.rotation.z += 0.001;
    }
  });

 

  
  // Assume the center of the model is at [1.268, 1.2435, -1.315]
  // (This is half of [2.536, 2.487, -2.63])
  const centerX = 8.168;
  const centerY = 1.2435;
  const centerZ = -1.315;

  return (
    <group ref={logoref} {...props} dispose={null} position={[0,0,0]} rotation-x={1.6} onPointerEnter={(e: { stopPropagation: () => any; })=>(e.stopPropagation(), setIsHover(true))} onPointerLeave={()=>setIsHover(false)} color={isHover ? "red" : null} castShadow >
      <group position={[-centerX, -centerY, -centerZ]}>
        <mesh 
          geometry={nodes['7-L'].geometry} 
          
          position={[0, 0, 0]}
          
        ><MeshTransmissionMaterial {...materialProps}/></mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/3D-Logo.gltf')