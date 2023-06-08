import { render, screen } from "@testing-library/react";
import { Form } from "../form";

// Pagina para ver los roles de cada elemento HTML: https://www.w3.org/TR/html-aria/#docconformance

describe("<Form />", () => {
  test("render correctly", () => {
    render(<Form />);
    const inputNameElement = screen.getByRole("textbox");
    const selectElement = screen.getByRole("combobox");
    const inputTermsElement = screen.getByRole("checkbox");
    const submitButtonElement = screen.getByRole("button");

    expect(inputNameElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(inputTermsElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });
});
