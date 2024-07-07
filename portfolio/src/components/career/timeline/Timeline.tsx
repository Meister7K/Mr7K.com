"use client"
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Text } from '@react-three/drei'; // Correct import statement for Text component

const points = [
  { year: 1994, description: 'Text for 1994 here', position: new THREE.Vector3(0, 0, 0) },
  { year: 2013, description: 'Text for 2013 here', position: new THREE.Vector3(5, 0, 0) },
  { year: 2018, description: 'Text for 2018 here', position: new THREE.Vector3(10, 0, 0) },
  { year: 2020, description: 'Text for 2020 here', position: new THREE.Vector3(15, 0, 0) },
  { year: 2024, description: 'Text for 2024 here', position: new THREE.Vector3(20, 0, 0) },
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
  const [isVisible, setIsVisible] = useState(true);
  const [currentPoint, setCurrentPoint] = useState(0);
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(10, 10, 10));
  const [lookAtTarget, setLookAtTarget] = useState(points[2].position);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const moveTo = (index: number) => {
    setTargetPosition(points[index].position.clone().add(new THREE.Vector3(0, 2, 5))); // Adjust the camera target position
    setLookAtTarget(points[index].position);
    setCurrentPoint(index);
  };

  const resetCamera = () => {
    setTargetPosition(new THREE.Vector3(10, 10, 10));
    setLookAtTarget(new THREE.Vector3(10, 0, 0)); // Reset to center of the timeline
    setCurrentPoint(0);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={toggleVisibility} className='rounded-sm text-primary absolute z-30 p-2 m-10 bottom-0 left-0 bg-muted-foreground border-solid border-primary hover:bg-destructive transition-all'>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && (
        <div className="absolute top-0 left-0 w-full h-full box-border flex justify-center align-middle">
          <Canvas className="h-full bg-background w-full top-0 left-0" shadows>
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
                  <meshStandardMaterial color={hoveredPoint === index ? 'green' : 'red'} />
                </mesh>
                {hoveredPoint === index && (
                  <Text
                    position={[0, 0.5, 0]} // Adjust text position above the point
                    rotation={[0, 0, 0]}
                    fontSize={0.2}
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
                  fontSize={0.2}
                  color="gray"
                  anchorX="center"
                  anchorY="middle"
                >
                  {point.year}
                </Text>
              </group>
            ))}
          </Canvas>
          <div className='absolute z-20 right-0 bottom-0 p-10 m-2 text-primary bg-background'>
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
    </>
  );
};

export default Timeline;
