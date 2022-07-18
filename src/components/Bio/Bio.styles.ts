import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--bg-1);
  padding: 4rem 0;
`;

export const Content = styled.main`
  max-width: 1200px;
  min-height: 100vh;
  margin: auto;
  padding: 1rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 2rem;
  color: var(--letter);
`;

export const TextBox = styled.article`
  > p {
    font-size: 1.1rem;
    @media (max-width: 768px) {
    }
  }
  max-width: 600px;
`;
export const ImageBox = styled.div`
  overflow: hidden;
  width: 400px;
  height: 400px;
  object-fit: cover;

  > img {
    width: 100%;
  }
`;
