import { render, screen, waitFor } from "@testing-library/react";
import { EditSubscriberFlightsModal } from "./EditSubscriberFlightsModal";
import userEvent from "@testing-library/user-event";
import {
  ADD_QUOTA_REASONS,
  REMOVE_QUOTA_REASONS,
} from "../../constants/editQuotaReasons";

const onCloseMock = jest.fn();
const onSubmitMock = jest.fn();

const renderComponent = (flightsLeft?: number) => {
  return render(
    <EditSubscriberFlightsModal
      flightsLeft={flightsLeft}
      onClose={onCloseMock}
      onSubmit={onSubmitMock}
    />
  );
};

const getFlightsLeftCount = () =>
  screen.getByTestId("flights-left-count").textContent;
const getIncreaseButton = () => screen.getByTestId("increase-count");
const getDecreaseButton = () => screen.getByTestId("decrease-count");
const getMotiveSelector = () => screen.getByTestId("motive-selector");
const getMotiveOptionElement = (value: string) =>
  screen.getByText(value) as HTMLOptionElement;
const getSaveChangesButton = () => screen.getByTestId("modal-submit-button");
const getCloseIcon = () => screen.getByTestId("modal-close");

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

  it("displays add quota motives when the quota is increased", async () => {
    renderComponent();
    const increaseButton = getIncreaseButton();

    userEvent.click(increaseButton);
    await waitFor(() => expect(getFlightsLeftCount()).toBe("1"));

    expect(getMotiveOptionElement(ADD_QUOTA_REASONS[0])).toBeInTheDocument();
    expect(getMotiveOptionElement(ADD_QUOTA_REASONS[1])).toBeInTheDocument();
    expect(getMotiveOptionElement(ADD_QUOTA_REASONS[2])).toBeInTheDocument();
    expect(getMotiveOptionElement(ADD_QUOTA_REASONS[3])).toBeInTheDocument();
  });

  it("displays remove quota motives when the quota is decreased", async () => {
    renderComponent(1);
    const decreaseButton = getDecreaseButton();

    userEvent.click(decreaseButton);
    await waitFor(() => expect(getFlightsLeftCount()).toBe("0"));

    expect(getMotiveOptionElement(REMOVE_QUOTA_REASONS[0])).toBeInTheDocument();
    expect(getMotiveOptionElement(REMOVE_QUOTA_REASONS[1])).toBeInTheDocument();
    expect(getMotiveOptionElement(REMOVE_QUOTA_REASONS[2])).toBeInTheDocument();
    expect(getMotiveOptionElement(REMOVE_QUOTA_REASONS[3])).toBeInTheDocument();
    expect(getMotiveOptionElement(REMOVE_QUOTA_REASONS[4])).toBeInTheDocument();
  });

  it("keeps the save changes button disabled while there are no changes", () => {
    renderComponent();

    expect(getSaveChangesButton()).toBeDisabled();
  });

  it("enables the save changes button when the quota is modified and a motive is selected", async () => {
    renderComponent();
    const increaseButton = getIncreaseButton();
    const motiveSelector = getMotiveSelector();
    const motiveToSelect = "Subscriber canceled flight";

    userEvent.click(increaseButton);
    await waitFor(() => expect(getFlightsLeftCount()).toBe("1"));

    userEvent.selectOptions(motiveSelector, motiveToSelect);

    const motiveOptionElement = getMotiveOptionElement(motiveToSelect);
    await waitFor(() => expect(motiveOptionElement.selected).toBeTruthy());
    expect(getSaveChangesButton()).toBeEnabled();

    userEvent.click(getSaveChangesButton());

    await waitFor(() =>
      expect(onSubmitMock).toHaveBeenCalledWith(1, motiveToSelect)
    );
  });

  it("renders the modal with a close icon", async () => {
    renderComponent();

    expect(getCloseIcon()).toBeInTheDocument();

    userEvent.click(getCloseIcon());

    await waitFor(() => expect(onCloseMock).toHaveBeenCalled());
  });
});
