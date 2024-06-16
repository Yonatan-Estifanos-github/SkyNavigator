import React from 'react';
import * as styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About SatelliteNavigator</h1>
      <p>
        Welcome to SatelliteNavigator! This application provides real-time tracking and detailed information about satellites orbiting the Earth. 
        Explore various features, including satellite usage, orbits, owners, and more.
      </p>
      <p>
        Our mission is to make satellite data accessible and understandable for everyone. Whether you are a space enthusiast, a student, or a professional, 
        SatelliteNavigator offers a comprehensive view of satellites and their activities in space.
      </p>
    </div>
  );
};

export default About;
