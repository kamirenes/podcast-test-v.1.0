import {screen, render} from '@testing-library/react'
import {PodcastDetailsScreen} from '../PodcastDetailsScreen'

test('MainScreen', () => {
  render(PodcastDetailsScreen());
  const linkElement = screen.getByText(/Podcaster/i);
  expect(linkElement).toBeInTheDocument();
});