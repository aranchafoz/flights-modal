import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  ControlButton,
  FlightsLeftCrontrolsWrapper,
  FlightsLeftLabel,
  FlightsLeftWrapper,
  Selector,
  FormColumns,
  SelectorWrapper,
} from "./EditSubscriberFlightsModal.styles";
import {
  EditQuotaType,
  QUOTA_REASONS_FOR_TYPE,
  editQuotaTypes,
} from "../../constants/editQuotaReasons";
import { Modal } from "../Modal";

const MIN_FLIGTHS_LEFT = 0;
const MAX_FLIGHTS_LEFT = 3;

interface EditSubscriberFlightsModalProps {
  flightsLeft?: number;
  onClose?: VoidFunction;
  onSubmit?: (flightsLeft: number, motive: string) => void;
}

export const EditSubscriberFlightsModal = ({
  flightsLeft = 0,
  onClose,
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
    <Modal
      title="Edit Flights"
      description="Add or remove flights from the subscriber"
      submitLabel="Save changes"
      submitDisabled={!canSaveChanges}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <FormColumns>
        <FlightsLeftWrapper>
          <FlightsLeftLabel>Flights Left</FlightsLeftLabel>
          <FlightsLeftCrontrolsWrapper>
            <ControlButton
              data-testid="decrease-count"
              onClick={handleDecreaseFlightsLeft}
              disabled={!canDecreaseQuota}
            >
              -
            </ControlButton>
            <span data-testid="flights-left-count">{newFlightsLeft}</span>
            <ControlButton
              data-testid="increase-count"
              onClick={handleIncreaseFlightsLeft}
              disabled={!canIncreaseQuota}
            >
              +
            </ControlButton>
          </FlightsLeftCrontrolsWrapper>
        </FlightsLeftWrapper>
        <SelectorWrapper>
          <Selector
            data-testid="motive-selector"
            value={selectedMotive}
            onChange={handleMotiveChange}
          >
            <option value={""} disabled>
              What is the motive?
            </option>
            {editQuotaType &&
              QUOTA_REASONS_FOR_TYPE[editQuotaType].map((reason, key) => (
                <option key={key} value={reason}>
                  {reason}
                </option>
              ))}
          </Selector>
        </SelectorWrapper>
      </FormColumns>
    </Modal>
  );
};
