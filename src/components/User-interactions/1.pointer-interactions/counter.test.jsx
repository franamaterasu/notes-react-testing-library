import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import userEvent from "@testing-library/user-event";

describe("<Counter/>", () => {
  test("render correctly", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", {
      name: "Counter",
    });

    const decrementButton = screen.getByRole("button", {
      name: "-1",
    });

    const resetButton = screen.getByRole("button", {
      name: "Reset",
    });

    const incrementButton = screen.getByRole("button", {
      name: "+1",
    });

    expect(heading).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  test("render a count of 0", () => {
    render(<Counter />);

    const counter = screen.getByText(/0/i);

    expect(counter).toBeInTheDocument();
  });

  test("renders a count of 1 after click in increment button", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "+1",
    });

    const counter = screen.getByText(/0/i);

    await user.click(incrementButton);

    expect(counter).toHaveTextContent("1");
  });

  test("renders a count of -1 after click in decrement button", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const decrementButton = screen.getByRole("button", {
      name: "-1",
    });

    const counter = screen.getByText(/0/i);

    await user.click(decrementButton);

    expect(counter).toHaveTextContent("-1");
  });

  test("renders a count of 0 after click in increment button and reset button", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "+1",
    });

    const resetButton = screen.getByRole("button", {
      name: "Reset",
    });

    const counter = screen.getByText(/0/i);

    await user.click(incrementButton);

    await user.click(resetButton);

    expect(counter).toHaveTextContent("0");
  });
});
