import { GreetPersonProps } from "./greetPerson.types";

const GreetPerson = (props: GreetPersonProps) => {
  const { name } = props;

  return <p>Hellow {name}!</p>;
};

export { GreetPerson };
