import { render, screen } from "@testing-library/react";
import { GreetPerson } from ".";

test("Greet Person", () => {
  render(<GreetPerson name="Moka" />);
  const greetingPerson = screen.getByText("Hellow Moka!");
  expect(greetingPerson).toBeInTheDocument();
});
