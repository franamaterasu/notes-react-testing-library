import { render, screen } from "@testing-library/react";
import { Form } from "../form";

// Con getByLabelText podemos obtener el input asociado a un label mediante el ID con el texto que contiene dicho labely

// Si da la casualidad de que dos labels tienen el mismo texto, podemos diferenciarlos con las opcion de "Selector", y decirle que tipo de selector de HTML es

describe("<Form />", () => {
  test("render correctly", () => {
    render(<Form />);

    const inputName = screen.getByLabelText("Name", {
      selector: "input",
    });
    const textAreaBio = screen.getByLabelText("Bio", {
      selector: "textarea",
    });

    const termsInput = screen.getByLabelText(
      "I agree to the terms and conditions"
    );

    expect(inputName).toBeInTheDocument();
    expect(textAreaBio).toBeInTheDocument();
    expect(termsInput).toBeInTheDocument();
  });
});
