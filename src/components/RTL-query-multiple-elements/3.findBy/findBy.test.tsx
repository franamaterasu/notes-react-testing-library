import { render, screen } from "@testing-library/react";
import { Skills } from "../skills";

/*
  findBy y findAllBy permite testear sin que el test de error, elementos HTML que puedes aparecer o desaparecer del cualquier momento del DOM
  o que no esten presenten inicialmente en el DOM.

  Como por ejemplo la informacion que consultamos de una API, que aparece despues de unos milisegundos de cargar el DOM y no directamente.

  Como por ejemplo un button que aparece o desaparece segun el valor de un booleano
*/

describe("Skills", () => {
  const skillsList = ["HTML", "CSS", "Javascript", "React", "Jest", "RTL"];
  test("'Start learning' button is eventually displayed", async () => {
    render(<Skills skills={skillsList} />);

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000, // Hacemos que el test espero 2 segundos para que se ejecute y asi darle tiempo al DOM de pintar el button
      }
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
