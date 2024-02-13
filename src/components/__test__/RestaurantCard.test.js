import RestaurantCard from '../RestaurantCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MOCK_DATA from '../../components/mocks/resCardMock.json';

it('should render RestaurantCard component with Props Data', () => {
  render(<RestaurantCard resData={MOCK_DATA}/>);
  const name = screen.getByText('Wow! Momo');
  expect(name).toBeInTheDocument();
});