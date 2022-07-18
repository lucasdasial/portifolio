import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--bg-2);
  border-top: solid 2px var(--dark-soft);
`;

export const Content = styled.main`
  max-width: 1200px;
  min-height: 100vh;
  margin: auto;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  color: var(--letter);

  > img {
    width: 45px;
    height: 50px;
  }
`;
