import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders edit flights button", () => {
  render(<App />);
  const editFlightsButton = screen.getByText(/edit flights/i);
  expect(editFlightsButton).toBeInTheDocument();
});
