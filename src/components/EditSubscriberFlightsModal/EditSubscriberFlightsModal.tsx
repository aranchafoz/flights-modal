import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { ModalWrapper } from "./EditSubscriberFlightsModal.styles";
import {
  EditQuotaType,
  QUOTA_REASONS_FOR_TYPE,
} from "../../constants/editQuotaReasons";

const MIN_FLIGTHS_LEFT = 0;
const MAX_FLIGHTS_LEFT = 3;

interface EditSubscriberFlightsModalProps {
  flightsLeft?: number;
}

export const EditSubscriberFlightsModal = ({
  flightsLeft = 0,
}: EditSubscriberFlightsModalProps) => {
  const [newFlightsLeft, setNewFlightsLeft] = useState(flightsLeft);
  const [selectedMotive, setSelectedMotive] = useState<string>("");

  const editQuotaType = useMemo<EditQuotaType | null>(() => {
    if (newFlightsLeft < flightsLeft) return "decrease";
    if (newFlightsLeft > flightsLeft) return "increase";
    return null;
  }, [newFlightsLeft, flightsLeft]);

  useEffect(() => {
    if (!editQuotaType) {
      setSelectedMotive("");
    }
  }, [editQuotaType]);

  const canDecreaseQuota = newFlightsLeft > MIN_FLIGTHS_LEFT;
  const canIncreaseQuota = newFlightsLeft < MAX_FLIGHTS_LEFT;

  const handleDecreaseFlightsLeft = () => {
    if (!canDecreaseQuota) return;
    setNewFlightsLeft(newFlightsLeft - 1);
  };

  const handleIncreaseFlightsLeft = () => {
    if (!canIncreaseQuota) return;
    setNewFlightsLeft(newFlightsLeft + 1);
  };

  const handleMotiveChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMotive(e.target.value);
  };

  return (
    <ModalWrapper>
      <p>Edit Flights</p>
      <p>Add or remove flights from the subscriber</p>
      <div>
        <span>Flights Left</span>
        <div>
          <button
            data-testid="decrease-count"
            onClick={handleDecreaseFlightsLeft}
            disabled={!canDecreaseQuota}
          >
            -
          </button>
          <span data-testid="flights-left-count">{newFlightsLeft}</span>
          <button
            data-testid="increase-count"
            onClick={handleIncreaseFlightsLeft}
            disabled={!canIncreaseQuota}
          >
            +
          </button>
        </div>
      </div>
      <label>
        <select
          name="motive-selector"
          disabled={!editQuotaType}
          value={selectedMotive}
          onChange={handleMotiveChange}
        >
          <option value={""}>What is the motive?</option>
          {editQuotaType &&
            QUOTA_REASONS_FOR_TYPE[editQuotaType].map((reason, key) => (
              <option key={key} value={reason}>
                {reason}
              </option>
            ))}
        </select>
      </label>
      <div>
        <button>Save changes</button>
      </div>
    </ModalWrapper>
  );
};
