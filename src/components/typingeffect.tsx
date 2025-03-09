import Typewriter from "typewriter-effect";

export const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Reactjs  Developer",
          "MERN stack Developer",
          "Frontend  Developer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
