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

export const Selector = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;

  // Stack above custom arrow
  z-index: 1;

  // Remove dropdown arrow in IE10 & IE11
  // @link https://www.filamentgroup.com/lab/select-css.html
  &::-ms-expand {
    display: none;
  }

  // Remove focus outline, will add on alternate element
  outline: none;

  grid-area: select;

  // custom styles
  font-size: 14px;
  padding: 14px 12px;
  border: 1px solid #e0e2e5;
  border-radius: 4px;
  cursor: pointer;
`;

export const SelectorWrapper = styled.div`
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    justify-self: end;
    margin-right: calc(8px + 6px);
    width: 12px;
    height: 6px;
    background-color: #1f2228;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    grid-area: select;
  }
`;
