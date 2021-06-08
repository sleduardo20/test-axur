import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    height: 7.2rem;
    padding: ${theme.spacings.xlg} ${theme.spacings.md};
    background: ${theme.colors.white};
    border-radius: 0.4rem;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    transition: 0.2s transform;

    &:hover {
      transform: translate(4px);
    }

    strong {
      text-transform: uppercase;
      font-weight: 700;
      font-size: ${theme.font.size.md};
    }

    a {
      text-decoration: none;
      color: ${theme.colors.white};
      font-weight: 500;
      font-size: ${theme.font.size.sm};
      width: 12rem;
      height: 4rem;
      background: ${theme.colors.primary};
      border-radius: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
