import { fireEvent, render, screen } from '@testing-library/react';
import RestrauntMenu from '../RestrauntMenu';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import Header from '../Header';
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Cart';


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});


it("should Load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestrauntMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
  
    const accordionHeader = screen.getByText("Non Veg Pizza (12)");
    fireEvent.click(accordionHeader);
  
    expect(screen.getAllByTestId("foodItems").length).toBe(12);
  
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  
    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);
  
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  
    fireEvent.click(addBtns[1]);
  
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  
    expect(screen.getAllByTestId("foodItems").length).toBe(14);
  
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  
    expect(screen.getAllByTestId("foodItems").length).toBe(12);
  
    expect(
      screen.getByText("No Items in the cart!")
    ).toBeInTheDocument();
  });

