import Typewriter from "typewriter-effect";

export const TypewriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Reactjs  Developer",
          "MERN stack Developer",
          "Flutter  Developer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
