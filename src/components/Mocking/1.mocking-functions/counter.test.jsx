import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import userEvent from "@testing-library/user-event";

describe("<Counter />", () => {
  render(<Counter />);
  test("Render correctly", () => {
    const header = screen.getByRole("heading", {
      level: 1,
      name: "Counter",
    });

    expect(header).toBeInTheDocument();
  });

  test("Function mmust be called", async () => {
    const user = userEvent.setup();

    const handleDecrementClick = jest.fn();
    const handleIncrementClick = jest.fn();

    render(
      <Counter
        handleDecrementClick={handleDecrementClick}
        handleIncrementClick={handleIncrementClick}>
        Click me
      </Counter>
    );

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(handleIncrementClick).toHaveBeenCalledTimes(1);
    expect(handleDecrementClick).toHaveBeenCalledTimes(1);
  });
});
