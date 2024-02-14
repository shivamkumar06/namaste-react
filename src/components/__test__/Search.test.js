import { fireEvent, render, screen,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with search button", async () => {
  await act(async () => 
  render(
  <BrowserRouter>
  <Body />
  </BrowserRouter>
  )
  );
  const searchButton = screen.getByRole("button", { name: "Search" });
 
  
  expect(searchButton).toBeInTheDocument();
});

it("Should render the Body Component with search button and load cards accordingly", async () => {
    await act(async () => 
    render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    )
    );
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "ice cream" } });
    fireEvent.click(searchBtn);
  
 
     const cards = screen.getAllByTestId("resCard");
      expect(cards.length).toBe(4);
  });


  it("Should filter top rated restaurants", async () => {
    await act(async () => 
    render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    )
    );
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(17);
  });