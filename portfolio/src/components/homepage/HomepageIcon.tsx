"use client"
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useMemo } from 'react';
import { Loader, ScrollControls, PerspectiveCamera, useHelper, Environment } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import Model from '../../../public/3D-Logo';
import { Suspense } from 'react';
import { Ground } from '../three-fiber/Ground';




const Icon = (_props: any) => {


    return (<Suspense fallback={<Loader />}>
        <Canvas className='h-full w-full bg-background' shadows>
            
            <PerspectiveCamera makeDefault fov={50} position={[0,5,30]}/>
            {/* <spotLight
        color={[1, 1, 0.3]}
        intensity={5000}
        angle={0.8}
        penumbra={0.5}
        position={[10, 10, 2]}
        castShadow
        shadow-bias={-0.0001}
        scale={100}
      /> */}
     
     <rectAreaLight
      width={2}
      height={2}
      intensity={5000}
      color={'white'}
      position={[0, 10, 10]}
      rotation={[0, 180, 0]}
    //   castShadow
    />

<Environment preset="city" />


             <Model position={[0, 0, 0]} />

            {/* <OrbitControls target={[0,5,0]} /> */}
            {/* <Environment preset="forest" background backgroundBlurriness={0.5} /> */}
        </Canvas>
    </Suspense>
    )
}

export default Icon