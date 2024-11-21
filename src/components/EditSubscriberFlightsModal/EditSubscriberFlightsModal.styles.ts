import styled from "styled-components";

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

export const FormColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 32px;
  align-items: center;
`;
