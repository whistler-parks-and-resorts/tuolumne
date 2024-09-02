import { render, screen } from "@testing-library/vue";
import BaseInputHarness from "./BaseInput.harness.vue";
import userEvent from "@testing-library/user-event";

describe("baseInput", () => {
  const placeholder = "myInput";

  it("has correct default values", () => {
    render(BaseInputHarness);

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute(
      "type",
      "text",
    );
    expect(screen.getByPlaceholderText(placeholder)).toHaveValue(
      "defaultValue",
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeRequired();
  });

  it("updates state correctly", async () => {
    const user = userEvent.setup();

    render(BaseInputHarness);

    await user.tripleClick(screen.getByPlaceholderText(placeholder));

    const newValue = "newStateValue";

    await user.keyboard(newValue);

    expect(await screen.findByPlaceholderText(placeholder)).toHaveValue(
      newValue,
    );
  });

  it("handle focus correctly", async () => {
    const user = userEvent.setup();

    render(BaseInputHarness);

    await user.click(screen.getByPlaceholderText(placeholder));

    expect(screen.getByPlaceholderText(placeholder)).toHaveFocus();
  });
});
