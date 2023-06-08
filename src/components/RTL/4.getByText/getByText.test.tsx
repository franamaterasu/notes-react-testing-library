import { render, screen } from "@testing-library/react";
import { Form } from "../form";

// Si da la casualidad de que dos elementos tienen el mismo texto, podemos diferenciarlos con la opcion de "Selector" y decirle que tipo de selector HTML es

describe("<Form />", () => {
  test("render correctly", () => {
    render(<Form />);

    const mandatoryMessage = screen.getByText("All fields are mandatory", {
      selector: "p",
    });

    expect(mandatoryMessage).toBeInTheDocument();
  });
});
