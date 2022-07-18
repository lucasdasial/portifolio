import styled from "styled-components";

export const Container = styled.section`
  /* background-color: var(--accent-1); */
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  margin-top: 1.5rem;
`;

export const Btn = styled.a`
  background-color: var(--accent-2);
  color: var(--letter);
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 400ms;

  &:hover {
    color: white;
    background-color: var(--accent-1);
    transform: translate(-6px, -6px);
  }
`;
