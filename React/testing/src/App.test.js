import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //rendering our component 
  render(<App />);
  // screen -> will get output
  const linkElement = screen.getByText(/learn react/i);
  //compare the expected output with the actual output
  expect(linkElement).toBeInTheDocument();
});

// 1. name the file as per comp
// 2. import render, screen from RTL
// 3. import the component to be tested
// 4. write test case name 
// 5. render the compo to be tested
// 6. getByText, methods are used to fire and event listener
// 7. assertion 