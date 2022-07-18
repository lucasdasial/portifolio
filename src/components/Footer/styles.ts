import styled from "styled-components";
export const Container = styled.footer`
  background-color: var(--bg-2);
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-top: solid 2px var(--dark-soft);

  > h1 {
    color: var(--accent-1);
    font-size: 3rem;
  }
`;
