import renderWithRouter from "./renderWithRouter";
import App from './App';
import routes from './routes'
import { fireEvent, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";

describe('Tests for App', () => {
  it('should render without crashing', () => {
    renderWithRouter(<App />);
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithRouter(<App />);

    expect(asFragment()).toMatchSnapshot();
  })
})

describe('Tests for navigation', () => {
  it('should have links to move between pages', async () => {
    const { queryByLabelText } = renderWithRouter(<App />, routes);

    fireEvent.click(screen.getByText('Sign Up'));

    waitFor(() => {
      expect(queryByLabelText('First Name')).toBeInTheDocument();
      expect(screen.getByText('Welcome to Yodlr!')).not.toBeInTheDocument();
    })
  })
})