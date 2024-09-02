import { render, screen } from "@testing-library/vue";
import UseInputHarness from "./UseInput.harness.vue";
import userEvent from "@testing-library/user-event";

describe("useInput", () => {
  const placeholder = "myInput";

  it("has correct default state", () => {
    render(UseInputHarness);

    expect(screen.getByPlaceholderText(placeholder)).toHaveValue("myState");
  });

  it("updates value correctly", async () => {
    const user = userEvent.setup();

    render(UseInputHarness);

    const newValue = "newValue";

    await user.tripleClick(screen.getByPlaceholderText(placeholder));

    await user.keyboard(newValue);

    expect(await screen.findByPlaceholderText(placeholder)).toHaveValue(
      newValue,
    );
  });

  it("updates validity correctly", async () => {
    const user = userEvent.setup();

    render(UseInputHarness);

    await user.tripleClick(screen.getByPlaceholderText(placeholder));

    await user.keyboard("[Backspace]");

    expect(screen.getByPlaceholderText(placeholder)).toBeInvalid();
    expect(screen.getByRole("heading", { name: /false/i })).toBeInTheDocument();
  });
});
