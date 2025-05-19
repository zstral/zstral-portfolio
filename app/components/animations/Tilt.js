import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from 'react';

const Tilteffect = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const widthDevice = 768;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= widthDevice);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <Tilt
      perspective={1500}
      scale={1.01}
      tiltReverse={false}
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      transitionSpeed={2000}
      reset={true}
      gyroscope={false}
      className={"tiltContainer"}
    >
      {children}
    </Tilt>
  );
};

export default Tilteffect;