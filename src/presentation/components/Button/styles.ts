import styled, { keyframes } from "styled-components";

export const ButtonUI = styled.button`
  width: 100%;
  height: 100%;

  max-width: 250px;

  max-height: 50px;
  min-height: 30px;

  padding: 16px;

  border: 0;
  outline: 0;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

const grow = keyframes`
  from {
    transform: scale(0, 0);
    opacity: 0;
  }
  to {
    transform: scale(1, 1);
    opacity: 1;
  }
`;
const move = keyframes`
  from {
    transform: translateX(0px)
  }
  to {
    transform: translateX(100%)
  }
`;

export const Circle = styled.div`
  width: 15px;
  height: 15px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.white};

  animation: ${move} 500ms linear 0ms infinite;

  &:first-child {
    position: absolute;
    top: 0;
    left: 0;
    animation: ${grow} 500ms linear 0ms infinite;
  }
  &:last-child {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0;
    animation: ${grow} 500ms linear 0s infinite reverse;
  }
`;

export const RenderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;
`;
