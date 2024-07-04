"use client"
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Loader, OrbitControls } from '@react-three/drei';
import { Text } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import Model from '../../../public/3D-Logo';
import { Suspense } from 'react';



// function Model(_props:any){
//     const 
// }


const Icon = (_props: any) => {

    return (
        <Canvas className='h-full w-full bg-background'>
            <camera position={[10,0,0]}/>

            <ambientLight intensity={.5} />
            <Suspense fallback={<Loader />}>

                <Model position={[0,0,0]}  />
            </Suspense>
            {/* <OrbitControls /> */}

        </Canvas>
    )
}

export default Icon