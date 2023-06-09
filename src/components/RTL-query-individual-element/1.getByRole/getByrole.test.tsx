import { render, screen } from "@testing-library/react";
import { Form } from "../form";

// Pagina oficial de RTL sobre getByRole: https://testing-library.com/docs/queries/byrole
// Pagina para ver los roles de cada elemento HTML: https://www.w3.org/TR/html-aria/#docconformance

describe("<Form />", () => {
  test("render correctly", () => {
    render(<Form />);

    // Trabajando con Headings, puedes obtener el elemento correcto por el name (texto que contiene), o bien por el level del heading (H1 => level 1, H2 => level 2 ....)

    /*
      Las opciones que les puedes pasar al getByRole son:
        - Name
        - Level
        - Hidden
        - Selected
        - Checked
        - Pressed
    */

    const pageHeading = screen.getByRole("heading", {
      name: "Job Application Form",
      level: 1,
    });

    const sectionHeading = screen.getByRole("heading", {
      name: "Section 1",
      level: 2,
    });

    const inputNameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    const textAreaElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    const selectElement = screen.getByRole("combobox");
    const inputTermsElement = screen.getByRole("checkbox");
    const submitButtonElement = screen.getByRole("button");

    expect(pageHeading).toBeInTheDocument();
    expect(sectionHeading).toBeInTheDocument();
    expect(inputNameElement).toBeInTheDocument();
    expect(textAreaElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(inputTermsElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  });
});
