import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import { rest } from "msw";
import { server } from "../../mocks/server";

describe("<Users />", () => {
  test("render correctly", () => {
    render(<Users />);

    const title = screen.getByRole("heading", { name: "Fetch User list" });

    expect(title).toBeInTheDocument();
  });

  test("render list correctly", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(3);
  });

  test("render error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);

    const error = await screen.findByText("Error fetching users");

    expect(error).toBeInTheDocument();
  });
});
