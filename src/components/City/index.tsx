import { CityProps } from "./city.types";

const City = (props: CityProps) => {
  const { name } = props;

  return <p>My city is {name}</p>;
};

export { City };
