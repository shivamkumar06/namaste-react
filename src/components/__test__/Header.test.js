import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Should render Header component and multiple checks for login button", () => {
  it("case 1: check using getByRole for login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton1 = screen.getByRole("button");
    expect(loginButton1).toBeInTheDocument();
  });

  //not suggested to use getByText for button
  it("case 2: check using getByText for login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton2 = screen.getByText("Login");
    expect(loginButton2).toBeInTheDocument();
  });

  it("case 3: check using getByRole for multiple button and extract only login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton3 = screen.getByRole("button", { name: "Login" });
    expect(loginButton3).toBeInTheDocument();
  });
});

describe("Should render Header component and check for cart items", () => {
  it("Case 1: Should render Header Component with cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });
  it("Case 2: Should render Header Component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart (0 items)");
    expect(cartItems).toBeInTheDocument();
  });
});

describe("Check for Login Button in Header Component", () => {
  it("Should change Login Button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButtonCheck = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButtonCheck);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
