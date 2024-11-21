import styled from "styled-components";

export const StyledSelect = styled.select`
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

export const CustomSelectorWrapper = styled.div`
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
