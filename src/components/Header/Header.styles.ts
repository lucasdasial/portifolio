import styled from "styled-components";

export const Container = styled.header`
  padding: 1.5rem 2rem;
  background: var(--dark-soft);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 5px var(--accent-1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
export const ButtonMenu = styled.span`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  > svg {
    cursor: pointer;
  }
`;
export const Logo = styled.a`
  font-weight: 500;
  font-size: 1.2rem;
`;
