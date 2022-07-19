import styled from "styled-components";

export const Container = styled.section`
  padding-top: 4rem;
  background-color: var(--bg-2);
  border-top: solid 2px var(--dark-soft);
`;

export const Content = styled.main`
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
  padding: 1rem;

  color: var(--letter);
`;

export const Header = styled.section`
  h1 {
    font-size: 3rem;
    color: var(--accent-1);
    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
  > p {
    max-width: 500px;
  }
  margin-bottom: 4rem;
`;

export const LangsSection = styled.section`
  h2 {
    color: var(--accent-2);
  }
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .icons {
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;

    > img {
      cursor: pointer;
    }
  }
  .tip {
    color: pink;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  .ds {
    padding: 1rem;
    max-width: 500px;
    width: 100%;
    min-height: 100px;
    background-color: var(--dark);
  }
`;

export const FrontContainer = styled.section`
  > img {
    width: 45px;
    margin-right: 10px;
  }

  height: 300px;
  /* h2 {
    color: var(--accent-2);
  } */
`;
export const BackContainer = styled.section`
  > img {
    width: 45px;
    margin-right: 10px;
  }

  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* h2 {
    color: var(--accent-2);
  } */
`;
export const StacksBack = styled.section`
  width: 500px;
  background-color: pink;
`;
