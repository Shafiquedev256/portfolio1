import Typewriter from "typewriter-effect";

export const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Reactjs Frontend developer",
          "MERN stack developer",
          "Flutter Mobile App Developer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
