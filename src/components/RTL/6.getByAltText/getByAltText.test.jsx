import { render, screen } from "@testing-library/react";
import { Form } from "../form";

describe("Form", () => {
  test("render correctly", () => {
    render(<Form />);

    const imageElement = screen.getByAltText("Form Heading");

    expect(imageElement).toBeInTheDocument();
  });
});
