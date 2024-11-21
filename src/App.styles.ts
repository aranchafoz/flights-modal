import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  position: relative;
`;

export const AppContent = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const SuccessMessage = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding: 16px;
  border-radius: 4px;
  background-color: #3aad70;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;
