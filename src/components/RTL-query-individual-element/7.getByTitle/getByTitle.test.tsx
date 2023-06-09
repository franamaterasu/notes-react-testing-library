import { render, screen } from "@testing-library/react";
import { Form } from "../form";

describe("<Form />", () => {
  test("render correctly", () => {
    render(<Form />);

    const linkElement = screen.getByTitle("Remote job platform");

    expect(linkElement).toBeInTheDocument();
  });
});
