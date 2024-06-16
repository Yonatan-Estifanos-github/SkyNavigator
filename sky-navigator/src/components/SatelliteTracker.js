// import React, { useEffect, useState } from 'react';
// import { useFrame, Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import * as THREE from 'three';
// import * as satellite from 'satellite.js';

// function Earth() {
//   const earthRef = useRef();

//   useFrame(() => {
//     if (earthRef.current) {
//       earthRef.current.rotation.y += 0.001;
//     }
//   });

//   return (
//     <mesh ref={earthRef}>
//       <sphereGeometry args={[2, 32, 32]} />
//       <meshStandardMaterial map={new THREE.TextureLoader().load('/earth.jpg')} />
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

// function SatelliteTracker() {
//   const [satellites, setSatellites] = useState([]);

//   useEffect(() => {
//     // Example satellite TLE data
//     const tleLine1 = '1 25544U 98067A   21274.87582798  .00000182  00000-0  10270-4 0  9993';
//     const tleLine2 = '2 25544  51.6434 352.5762 0002773  21.1988 338.8962 15.48815393299885';

//     const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
//     const positionAndVelocity = satellite.propagate(satrec, new Date());
//     const positionEci = positionAndVelocity.position;

//     if (positionEci) {
//       const gmst = satellite.gstime(new Date());
//       const positionGd = satellite.eciToGeodetic(positionEci, gmst);
//       const longitude = satellite.degreesLong(positionGd.longitude);
//       const latitude = satellite.degreesLat(positionGd.latitude);

//       setSatellites([{ name: 'ISS', latitude, longitude, position: [longitude, latitude, 0] }]);
//     }
//   }, []);

//   const handleSatelliteClick = (satellite) => {
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
//     </Canvas>
//   );
// }

// export default SatelliteTracker;
