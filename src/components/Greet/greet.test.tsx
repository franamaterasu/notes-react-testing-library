import { render, screen } from "@testing-library/react";
import { Greet } from ".";

test("Greet renders correctly", () => {
  render(<Greet />);

  const greetMessage = screen.getByText("Hellow world!");

  expect(greetMessage).toBeInTheDocument();
});
