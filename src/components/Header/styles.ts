import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 10rem;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.md};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-top: ${theme.spacings.xs};
      color: ${theme.colors.secondary};
      text-align: center;

      ${media.lessThan('medium')`
        display: none;
      `}
    }
  `}
`;
