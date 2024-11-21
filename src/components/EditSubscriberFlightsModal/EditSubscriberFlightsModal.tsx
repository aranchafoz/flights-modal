import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { ModalWrapper } from "./EditSubscriberFlightsModal.styles";
import {
  EditQuotaType,
  QUOTA_REASONS_FOR_TYPE,
  editQuotaTypes,
} from "../../constants/editQuotaReasons";

const MIN_FLIGTHS_LEFT = 0;
const MAX_FLIGHTS_LEFT = 3;

interface EditSubscriberFlightsModalProps {
  flightsLeft?: number;
  onClose?: VoidFunction;
  onSubmit?: (flightsLeft: number, motive: string) => void;
}

export const EditSubscriberFlightsModal = ({
  flightsLeft = 0,
  onSubmit,
}: EditSubscriberFlightsModalProps) => {
  const [newFlightsLeft, setNewFlightsLeft] = useState(flightsLeft);
  const [selectedMotive, setSelectedMotive] = useState<string>("");

  const editQuotaType = useMemo<EditQuotaType | null>(() => {
    if (newFlightsLeft < flightsLeft) return editQuotaTypes.decrease;
    if (newFlightsLeft > flightsLeft) return editQuotaTypes.increase;
    return null;
  }, [newFlightsLeft, flightsLeft]);

  useEffect(() => {
    if (!editQuotaType) {
      setSelectedMotive("");
    }
  }, [editQuotaType]);

  const canDecreaseQuota = newFlightsLeft > MIN_FLIGTHS_LEFT;
  const canIncreaseQuota = newFlightsLeft < MAX_FLIGHTS_LEFT;
  const canSaveChanges = editQuotaType && selectedMotive;

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

  const handleSubmit = () => {
    onSubmit?.(newFlightsLeft, selectedMotive);
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
          data-testid="motive-selector"
          disabled={!editQuotaType} // Should be disabled or just display 0 options?
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
        <button
          data-testid="save-changes-button"
          disabled={!canSaveChanges}
          onClick={handleSubmit}
        >
          Save changes
        </button>
      </div>
    </ModalWrapper>
  );
};
