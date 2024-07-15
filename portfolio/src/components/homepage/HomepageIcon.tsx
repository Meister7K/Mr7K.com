"use client"
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useMemo } from 'react';
import { Loader, OrbitControls, PerspectiveCamera, useHelper, Environment } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import Model from '../../../public/3D-Logo';
import { Suspense } from 'react';
import { Ground } from '../three-fiber/Ground';


function Tunnel(){

}


const Icon = (_props: any) => {

    // const [isHover, setIsHover]= useState(false)

    return (<Suspense fallback={<Loader />}>
        <Canvas className='h-full w-full bg-background' shadows>
            <PerspectiveCamera makeDefault fov={50} position={[0,10,30]}/>
            {/* <spotLight
        color={[1, 0.25, 0.3]}
        intensity={5000}
        angle={0.8}
        penumbra={0.5}
        position={[2, 2, 2]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={1000}
        angle={0.6}
        penumbra={0.5}
        position={[-50, 50, 50]}
        castShadow
        shadow-bias={-0.0001}
      /> */}
            <ambientLight intensity={.5} color={[1,0.2,.3]} />


            <Model position={[0, 0, 0]} />
<Ground/>
            <OrbitControls target={[0,5,0]} />
            {/* <Environment preset="forest" background backgroundBlurriness={0.5} /> */}
        </Canvas>
    </Suspense>
    )
}

export default Icon