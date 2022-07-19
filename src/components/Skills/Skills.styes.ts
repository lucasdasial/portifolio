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
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  color: var(--letter);

  h1 {
    font-size: 3rem;
  }

  .langs {
    text-align: center;
  }
`;

export const Langs = styled.section`
  padding: 1rem;
  display: flex;
  gap: 24px;
  justify-content: center;
  text-align: center;

  > img {
    width: 65px;
    cursor: pointer;
  }
`;

export const DsLang = styled.section`
  padding: 1rem;
  max-width: 500px;
  background-color: var(--dark);
`;
