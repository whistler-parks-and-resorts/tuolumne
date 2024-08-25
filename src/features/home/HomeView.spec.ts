import HomeView from "./HomeView.vue";
import { render, screen } from "@testing-library/vue";

describe("homeView", () => {
  it("renders", () => {
    render(HomeView);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
