"use client"
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Text } from '@react-three/drei'; // Correct import statement for Text component

const points = [
  { year: 2017, description: 'Graduated from the University of Minnesota Duluth with an undergraduate degree in Criminology.\n Worked as a bartender and bouncer throughout college.', position: new THREE.Vector3(0, 0, 0) },
  { year: 2018, description: 'Began working at LSC as a Cathodic Protection Technician Lead.', position: new THREE.Vector3(5, 0, 0) },
  { year: 2019, description: 'Promoted to Project Coordinator.', position: new THREE.Vector3(10, 0, 0) },
  { year: 2022, description: `Transitioned into Tech while attending \nthe University of Austin Texas' Web Development Program.`, position: new THREE.Vector3(15, 0, 0) },
  { year: 2023, description: 'Began working as a Web Developer at MXS Solutions.', position: new THREE.Vector3(20, 0, 0) },
];

const CameraControls = ({ targetPosition, lookAtTarget }: { targetPosition: THREE.Vector3; lookAtTarget: THREE.Vector3 }) => {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.lerp(targetPosition, 0.1);
    camera.lookAt(lookAtTarget);
  });

  return null;
};

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(10, 0, 15));
  const [lookAtTarget, setLookAtTarget] = useState(points[2].position);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const moveTo = (index: number) => {
    setTargetPosition(points[index].position.clone().add(new THREE.Vector3(0, 2, 5))); // Adjust the camera target position
    setLookAtTarget(points[index].position);
    setCurrentPoint(index);
  };

  const resetCamera = () => {
    setTargetPosition(new THREE.Vector3(10, 0, 15));
    setLookAtTarget(new THREE.Vector3(10, 0, 0)); // Reset to center of the timeline
    setCurrentPoint(0);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='relative'>
      <button onClick={toggleVisibility} className='rounded-sm text-primary fixed z-50 p-2 m-5 bottom-0 left-0 bg-muted-foreground border-solid border-primary hover:bg-destructive transition-all'>
        {isVisible ? 'Hide' : 'Timeline'}
      </button>
      {isVisible && (
        <div className="fixed bottom-0 left-0 w-full h-svh box-border flex justify-center align-middle">
          <Canvas className="z-10 h-full bg-background w-full top-0 left-0" shadows>
            <CameraControls targetPosition={targetPosition} lookAtTarget={lookAtTarget} />
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {points.map((point, index) => (
              <group key={index} position={point.position} onClick={() => moveTo(index)}>
                <mesh
                  onPointerOver={() => setHoveredPoint(index)}
                  onPointerOut={() => setHoveredPoint(null)}
                >
                  <sphereGeometry args={[0.2, 32, 32]} />
                  <meshStandardMaterial color={hoveredPoint === index ? 'gold' : 'red'} />
                </mesh>
                {hoveredPoint === index && (
                  <Text
                    position={[0, 2, 0]} // Adjust text position above the point
                    rotation={[0, 0, 0]}
                    fontSize={0.3}
                    color="gray"
                    anchorX="center"
                    anchorY="middle"
                    
                  >
                    {point.description}
                  </Text>
                )}
                <Text
                  position={[0, -0.5, 0]} // Adjust text position below the point
                  rotation={[0, 0, 0]}
                  fontSize={0.5}
                  color="gray"
                  anchorX="center"
                  anchorY="middle"
                >
                  {point.year}
                </Text>
              </group>
            ))}
          </Canvas>
          <div className='absolute z-20 right-0 bottom-0 p-10 m-2 text-primary bg-transparent'>
            <button className='rounded-sm text-primary p-2 m-2 bg-muted-foreground border-solid border-primary hover:bg-destructive transition-all' onClick={resetCamera}>Reset Camera</button>
            <button className='rounded-sm text-primary p-2 m-2 bg-muted-foreground border-solid border-primary hover:bg-destructive transition-all' onClick={() => moveTo(Math.max(0, currentPoint - 1))}>Previous</button>
            <button className='rounded-sm text-primary p-2 m-2 bg-muted-foreground border-solid border-primary hover:bg-destructive transition-all' onClick={() => moveTo(Math.min(points.length - 1, currentPoint + 1))}>Next</button>
            {points.map((_, index) => (
              <button className='rounded-sm text-primary p-2 m-2 bg-muted-foreground border-solid border-primary hover:bg-destructive transition-all' key={index} onClick={() => moveTo(index)}>
                {`Go to ${_.year}`}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
