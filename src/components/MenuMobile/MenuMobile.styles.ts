import styled, { css } from "styled-components";

type Props = {
  isOpen: boolean;
};

export const Container = styled.div<Props>`
  right: 10px;
  width: 300px;
  height: 100%;
  padding: 3rem;
  background: var(--dark-soft);

  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  display: flex;
  transition: 400ms;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  > svg {
    transform: rotate(0deg);
    transition: 800ms;
    position: absolute;
    cursor: pointer;
    top: 1rem;
    right: 1rem;
  }

  > nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: 300ms;
  }

  ${(props) =>
    props.isOpen
      ? css`
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
          > svg {
            transform: rotate(90deg);
          }
        `
      : css`
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50px);
        `}

  @media (max-width: 768px) {
    width: 90%;
  }
`;
