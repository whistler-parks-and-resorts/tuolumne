import { render, screen } from "@testing-library/vue";
import InputForm, { type InputFormProperties } from "./InputForm.vue";
import renderProperties from "@/utilities/testing/RenderProperties";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("inputForm", () => {
  it("has correct properties", () => {
    const properties: InputFormProperties = {
      disableSubmit: true,
      legend: "form Legend",
      submit: vi.fn(),
    };

    render(InputForm, renderProperties(properties));

    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
    expect(
      screen.getByRole("group", { name: /form legend/i }),
    ).toBeInTheDocument();
  });

  it("submit handles callback", async () => {
    const user = userEvent.setup();

    const mock = vi.fn();

    const properties: InputFormProperties = {
      disableSubmit: false,
      legend: "formLegend",
      submit: mock,
    };

    render(InputForm, renderProperties(properties));

    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(mock).toHaveBeenCalledOnce();
  });
});
