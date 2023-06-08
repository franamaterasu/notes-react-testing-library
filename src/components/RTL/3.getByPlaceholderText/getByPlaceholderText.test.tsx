import { render, screen } from "@testing-library/react";
import { Form } from "../form";

describe("<Form/>", () => {
  test("render correctly", () => {
    render(<Form />);

    const inputNameElement = screen.getByPlaceholderText("Insert your name...");
    const textAreaBioElement = screen.getByPlaceholderText(
      "Insert a short resume of your bio..."
    );

    expect(inputNameElement).toBeInTheDocument();
    expect(textAreaBioElement).toBeInTheDocument();
  });
});
