import { render, screen } from "@testing-library/react";
import { Form } from "../form";

describe("<Form/>", () => {
  test("render correctly", () => {
    render(<Form />);

    const formElement = screen.getByTestId("form");

    expect(formElement).toBeInTheDocument();
  });
});
