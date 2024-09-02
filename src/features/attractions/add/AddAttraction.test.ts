import { render, screen } from "@testing-library/vue";
import AddAttraction, {
  type AddAttractionProperties,
} from "./AddAttraction.vue";
import { vi } from "vitest";
import renderProperties from "@/utilities/testing/RenderProperties";

describe("AddAttraction", () => {
  it("renders correctly", () => {
    const properties: AddAttractionProperties = {
      addAttraction: vi.fn(),
    };

    render(AddAttraction, renderProperties(properties));

    expect(
      screen.getByRole("heading", { name: /add attraction/i }),
    ).toBeInTheDocument();
  });
});
