import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: white;
  padding: 16px;
  border-radius: 4px;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  display: flex;
  cursor: pointer;
`;

const ICON_SIZE = 16;

export const CloseIcon = styled.img`
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
`;

export const ModalTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export const ModalDescription = styled.h5`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #606c78;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const FlightsLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 4px;
  background-color: #e0e2e5;
`;

export const FlightsLeftLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

export const FlightsLeftCrontrolsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 12px;
  padding: 12px;
  border-radius: 4px;
  background-color: #fff;
`;

export const ControlButton = styled.button`
  padding: 4px;
  font-size: 16px;
  line-height: 18px;
  width: calc(18px + 2 * 4px);
  border: 0;
  border-radius: 50%;
  background-color: #e0e2e5;
  color: #1f2228;
  cursor: pointer;

  &:disabled {
    background-color: #f6f6f6;
    color: #e0e2e5;
    cursor: not-allowed;
  }
`;
