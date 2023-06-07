import { render, screen } from "@testing-library/react";
import { GreetTDD } from "./";

test("Greet render correctly with TDD", () => {
  render(<GreetTDD />);

  const greetMessage = screen.getByText("Hellow world with TDD!");

  expect(greetMessage).toBeInTheDocument();
});
