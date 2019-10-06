import React from "react";
import styled from "styled-components";

const backgrounds = [
  "rgb(255, 51, 51)",
  "rgb(255, 82, 51)",
  "rgb(255, 46, 51)"
];

// const backgrounds = [
//   "rgb(255, 0, 0)",
//   "rgb(237, 0, 0)",
//   "rgb(216, 0, 0)",

//   "rgb(208, 0, 0)",
//   "rgb(240, 0, 0)",
//   "rgb(248, 0, 0)",
//   "rgb(255, 20, 10)"
// ];

const Background = styled.main`
  transition: background 2s ease;
  min-height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

function RevolvingBackground() {
  const [backgroundIndex, setBackgroundIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((backgroundIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundIndex]);

  return (
    <Background style={{ backgroundColor: backgrounds[backgroundIndex] }} />
  );
}

export default RevolvingBackground;
