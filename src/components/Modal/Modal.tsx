import { PropsWithChildren } from "react";
import icons from "../../icons";
import { Button } from "../Button";
import {
  ModalWrapper,
  ModalContent,
  ModalCloseButton,
  CloseIcon,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalButtonWrapper,
} from "./Modal.styles";

interface ModalProps {
  title?: string;
  description?: string;
  onClose?: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  onSubmit?: (e: React.SyntheticEvent) => void;
}

export const Modal = ({
  children,
  title,
  description,
  onClose,
  onSubmit,
  submitLabel,
  submitDisabled,
}: PropsWithChildren<ModalProps>) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalCloseButton data-testid="modal-close" onClick={onClose}>
          <CloseIcon src={icons.close} alt="Close modal" />
        </ModalCloseButton>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeader>
        {children}
        <ModalButtonWrapper>
          <Button
            testId="modal-submit-button"
            disabled={submitDisabled}
            onClick={onSubmit}
          >
            {submitLabel}
          </Button>
        </ModalButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};
