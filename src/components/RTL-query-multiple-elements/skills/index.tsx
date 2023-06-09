import { useState, useEffect } from "react";
import { SkillsProps } from "./skills.types";

const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulando que el usuario esta logueado y que aparezca el button de "Start Learning"
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key="skill">{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export { Skills };
