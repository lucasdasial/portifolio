import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--light);
  height: calc(90vh - 80px);
  padding: 1rem;

  background-image: url("images/bg.jpg");

  > h1 {
    font-size: 5rem;
    color: var(--light);
    text-align: center;
    line-height: 67.5px;
    /* background-color: var(--pink); */
    padding: 1rem;
  }
  > h2 {
    font-size: 2rem;
    text-align: center;
    color: pink;
  }

  > svg {
    position: absolute;
    bottom: 100px;
    color: pink;
  }
`;
