import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props:any) {
  const { nodes, materials } = useGLTF('/3D-Logo.gltf')
  const logoref = useRef()
 const [isHover, setIsHover]= useState(false)
  const [active, setActive] = useState(false)
  
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
          material={materials.Glass} 
          position={[0, 0, 0]}
          
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3D-Logo.gltf')