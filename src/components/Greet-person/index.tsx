type GreetPersonProps = {
  name?: string;
};

const GreetPerson = (props: GreetPersonProps) => {
  const { name } = props;

  return <p>Hellow {name}!</p>;
};

export { GreetPerson };
