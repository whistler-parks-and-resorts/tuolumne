describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /home/i });
  });
});
