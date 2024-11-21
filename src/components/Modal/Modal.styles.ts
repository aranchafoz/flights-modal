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
  width: 80vw;
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

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
