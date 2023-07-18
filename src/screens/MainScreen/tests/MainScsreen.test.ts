import {screen, render} from '@testing-library/react'
import {MainScreen} from '../MainScreen'

test('MainScreen', () => {
  render(MainScreen());
  const linkElement = screen.getByText(/Podcaster/i);
  expect(linkElement).toBeInTheDocument();
});