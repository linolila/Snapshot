import React from "react";
import { useSpring, animated } from "react-spring";
function App() {
  const props = useSpring({
    from: { color: "black" },
    to: [
      { color: "red" },
      { color: "black" },
    ],
    config: { duration: 2000, tension: 200, friction: 20 },
    loop: true,
  });

  return (
    <animated.h1 style={props}>
      <h2>Techtopians</h2>
      <h3>Fenote</h3>
    </animated.h1>
  );
}

export default App