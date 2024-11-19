import { render, screen } from "@testing-library/react";
import { EditSubscriberFlightsModal } from "./EditSubscriberFlightsModal";

test("renders edit flights modal", () => {
  render(<EditSubscriberFlightsModal flightsLeft={1} />);
  const modalTitle = screen.getByText(/Edit flights/i);
  const modalDescription = screen.getByText(
    "Add or remove flights from the subscriber"
  );
  const flightsLeftCount = screen.getByTestId("flights-left-count").textContent;
  expect(modalTitle).toBeInTheDocument();
  expect(modalDescription).toBeInTheDocument();
  expect(flightsLeftCount).toBe("1");
});
