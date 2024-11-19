import { render, screen, waitFor } from "@testing-library/react";
import { EditSubscriberFlightsModal } from "./EditSubscriberFlightsModal";
import userEvent from "@testing-library/user-event";

const renderComponent = (flightsLeft?: number) => {
  return render(<EditSubscriberFlightsModal flightsLeft={flightsLeft} />);
};

const getFlightsLeftCount = () =>
  screen.getByTestId("flights-left-count").textContent;
const getIncreaseButton = () => screen.getByTestId("increase-count");
const getDecreaseButton = () => screen.getByTestId("decrease-count");

describe("EditSubscriberFlightsModal component", () => {
  it("should render the component", () => {
    renderComponent(1);
    const modalTitle = screen.getByText(/Edit flights/i);
    const modalDescription = screen.getByText(
      "Add or remove flights from the subscriber"
    );
    const flightsLeftCount = getFlightsLeftCount();
    expect(modalTitle).toBeInTheDocument();
    expect(modalDescription).toBeInTheDocument();
    expect(flightsLeftCount).toBe("1");
  });

  it("should increase the flights count", async () => {
    renderComponent(1);
    const increaseButton = getIncreaseButton();

    userEvent.click(increaseButton);

    await waitFor(() => expect(getFlightsLeftCount()).toBe("2"));
  });

  it("shouldn't increase the flights count", async () => {
    renderComponent(3);
    const increaseButton = getIncreaseButton();

    userEvent.click(increaseButton);

    expect(getFlightsLeftCount()).toBe("3");
    expect(increaseButton).toBeDisabled();
  });

  it("should decrease the flights count", async () => {
    renderComponent(1);
    const decreaseButton = getDecreaseButton();

    userEvent.click(decreaseButton);

    await waitFor(() => expect(getFlightsLeftCount()).toBe("0"));
  });

  it("shouldn't decrease the flights count", async () => {
    renderComponent(0);
    const decreaseButton = getDecreaseButton();

    userEvent.click(decreaseButton);

    expect(getFlightsLeftCount()).toBe("0");
    expect(decreaseButton).toBeDisabled();
  });
});
