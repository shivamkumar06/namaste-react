import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// beforeAll(() => {
//   console.log("Before All");
// });

// beforeEach(() => {
//   console.log("Before Each");
// });

// afterEach(() => {
//   console.log("After Each");
// });

// afterAll(() => {
//   console.log("After All");
// });


describe("Contact Component", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  // test("Should check submit button inside contact component", () => {
  //   render(<Contact />);
  //   const button = screen.getByText("Submit");
  //   expect(button).toBeInTheDocument();
  // });

  // test("Should load input name inside contact component", () => {
  //   render(<Contact />);
  //   const inputName = screen.getByPlaceholderText("Name");
  //   expect(inputName).toBeInTheDocument();
  // });

  // it("Should load 2 input boxes inside contact component", () => {
  //   render(<Contact />);
  //   const inputBoxes = screen.getAllByRole("textbox");
  //   expect(inputBoxes.length).toBe(2);
  // });
});
