import { render, screen } from "@testing-library/react";
import { Skills } from "../skills";

/*

  queryBy = Devuelve un unico elemento encontrado

  queryAllBy = Devuelve un array con todos los elementos encontrados

  Estos metodos devuelve o devuelven los elementos HTML mediante el metodo SCREEN, pero la ventaja de queryBy es que si NO nada dentro del DOM,
  el test NO FALLA.

  Si NO ENCUENTRA el elemento en el DOM devuelve un NULL
*/

describe("<Skills/>", () => {
  const skillsList = ["HTML", "CSS", "Javascript", "React", "Jest", "RTL"];

  test("render login button", () => {
    render(<Skills skills={skillsList} />);

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  test("no render 'start learning' button", () => {
    render(<Skills skills={skillsList} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });
});
