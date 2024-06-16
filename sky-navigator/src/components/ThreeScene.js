// import React, { useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import * as THREE from 'three';

// function Earth() {
//   const meshRef = useRef();

//   // Rotate the Earth
//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.001;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[2, 32, 32]} />
//       <meshStandardMaterial map={new THREE.TextureLoader().load('/path/to/earth.jpg')} />
//     </mesh>
//   );
// }

// function Satellite({ position, onClick, satellite }) {
//   return (
//     <mesh position={position} onClick={() => onClick(satellite)}>
//       <sphereGeometry args={[0.05, 16, 16]} />
//       <meshStandardMaterial color="red" />
//     </mesh>
//   );
// }

// function ThreeScene({ satellites }) {
//   const [selectedSatellite, setSelectedSatellite] = useState(null);

//   const handleSatelliteClick = (satellite) => {
//     setSelectedSatellite(satellite);
//     alert(`Satellite: ${satellite.name}\nLatitude: ${satellite.latitude}\nLongitude: ${satellite.longitude}`);
//   };

//   return (
//     <Canvas camera={{ position: [0, 0, 10] }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <OrbitControls />
//       <Stars />
//       <Earth />
//       {satellites.map((sat, index) => (
//         <Satellite key={index} position={sat.position} onClick={handleSatelliteClick} satellite={sat} />
//       ))}
//       {selectedSatellite && (
//         <div className="satellite-info">
//           <h2>{selectedSatellite.name}</h2>
//           <p>Latitude: {selectedSatellite.latitude}</p>
//           <p>Longitude: {selectedSatellite.longitude}</p>
//         </div>
//       )}
//     </Canvas>
//   );
// }

// export default ThreeScene;
