import { useState } from "react";
import { ModalWrapper } from "./EditSubscriberFlightsModal.styles";

interface EditSubscriberFlightsModalProps {
  flightsLeft?: number;
}

export const EditSubscriberFlightsModal = ({
  flightsLeft = 0,
}: EditSubscriberFlightsModalProps) => {
  const [newFlightsLeft, setNewFlightsLeft] = useState(flightsLeft);

  const handleDecreaseFlightsLeft = () => {
    setNewFlightsLeft(newFlightsLeft - 1);
  };

  const handleIncreaseFlightsLeft = () => {
    setNewFlightsLeft(newFlightsLeft + 1);
  };

  return (
    <ModalWrapper>
      <p>Edit Flights</p>
      <p>Add or remove flights from the subscriber</p>
      <div>
        <span>Flights Left</span>
        <div>
          <button onClick={handleDecreaseFlightsLeft}>-</button>
          <span data-testid="flights-left-count">{newFlightsLeft}</span>
          <button onClick={handleIncreaseFlightsLeft}>+</button>
        </div>
      </div>
      <span>What is the motive?</span>
      <div>
        <button>Save changes</button>
      </div>
    </ModalWrapper>
  );
};
