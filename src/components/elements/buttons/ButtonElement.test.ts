import { render, screen } from "@testing-library/vue";
import ButtonElement, {
  type ButtonElementProperties,
} from "./ButtonElement.vue";
import renderProperties from "@/utilities/testing/RenderProperties";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("button", () => {
  it("has correct default properties", () => {
    const properties: ButtonElementProperties = {
      text: "my button",
      onClick: vi.fn(),
    };

    render(ButtonElement, renderProperties(properties));

    expect(
      screen.getByRole("button", { name: /my button/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /my button/i })).toHaveAttribute(
      "type",
      "button",
    );

    expect(screen.getByRole("button", { name: /my button/i })).toBeEnabled();
  });

  it("handle click correctly", async () => {
    const user = userEvent.setup();

    const mock = vi.fn();

    const properties: ButtonElementProperties = {
      text: "my button",
      onClick: mock,
    };

    render(ButtonElement, renderProperties(properties));

    await user.click(screen.getByRole("button", { name: /my button/i }));

    expect(mock).toHaveBeenCalledOnce();
  });
});
