import { MeshReflectorMaterial } from "@react-three/drei"

export const Ground=()=>{

    return(
        <mesh position={[0,-5,0]} rotation-x={-Math.PI * 0.25} castShadow receiveShadow>
            <planeGeometry args={[500,500]}/>
            <MeshReflectorMaterial mirror={.2}
            blur={[1000, 400]}
            mixBlur={30}
            />
        </mesh>
    )

}