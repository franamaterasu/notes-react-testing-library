import { render, screen } from "@testing-library/react";
import { Skills } from "../skills";

describe("<Skills />", () => {
  const skillsList = ["HTML", "CSS", "Javascript", "React", "Jest", "RTL"];

  test("render correctly", () => {
    render(<Skills skills={skillsList} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render a list of skills", () => {
    render(<Skills skills={skillsList} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skillsList.length);
  });
});
