import { render, screen } from "@testing-library/react";
import { Form } from "../form";

describe("<Form/>", () => {
  test("render correctly", () => {
    render(<Form />);

    const textAreaElementValue =
      "I'm baby man braid vaporware DIY tattooed stumptown. Enamel pin venmo cold-pressed jawn kinfolk plaid asymmetrical skateboard quinoa semiotics...";

    const inputTextElement = screen.getByDisplayValue("Jane Doe");
    const textAreaElement = screen.getByDisplayValue(textAreaElementValue);

    expect(inputTextElement).toBeInTheDocument();
    expect(textAreaElement).toBeInTheDocument();
  });
});
