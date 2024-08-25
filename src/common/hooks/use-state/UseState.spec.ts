import { render, screen } from "@testing-library/vue";
import UseStateHarness from "./UseState.harness.vue";
import userEvent from "@testing-library/user-event";

describe("useState", () => {
  it("has correct initial value", () => {
    render(UseStateHarness);

    expect(screen.getByPlaceholderText(/input/i)).toHaveValue("");
  });

  it("sets new value correctly", async () => {
    const user = userEvent.setup();

    render(UseStateHarness);

    await user.click(screen.getByPlaceholderText(/input/i));

    const expected = "123";

    await user.keyboard(expected);

    expect(await screen.findByPlaceholderText(/input/i)).toHaveValue(expected);
  });
});
