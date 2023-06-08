import { render, screen } from "@testing-library/react";
import { City } from ".";

describe("<City/>", () => {
  it("render component", () => {
    render(<City name="" />);

    const content = screen.getByText("My city is");

    expect(content).toBeInTheDocument();
  });
  it("show city name", () => {
    render(<City name="Almeria" />);

    const city = screen.getByText("My city is Almeria");

    expect(city).toBeInTheDocument();
  });
});
