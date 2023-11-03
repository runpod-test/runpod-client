import {render, screen} from '@testing-library/react';
import HomePage from './HomePage';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

test('renders home page with title and description', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <HomePage/>
    </QueryClientProvider>
  );

  const titleElement = screen.getByText(/Imaginator/i);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(/Bring your imaginations to life using RunPod text to image API/i);
  expect(descriptionElement).toBeInTheDocument();
});
