import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

  it("Test app render login route", async () => {
    render(<App />);
    const element =await screen.findByText('Logowanie');
    expect(element).toBeInTheDocument();
  }) 
  
});
