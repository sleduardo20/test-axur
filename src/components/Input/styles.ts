import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 48rem;
    height: 7rem;
    background-color: ${theme.colors.white};
    border-radius: 0.4rem;
    font-size: ${theme.font.size.sm};
    border: 2px solid ${theme.colors.darkGray};

    ${media.lessThan('medium')`
        width: 28rem;
        margin: 0 0 ${theme.spacings.lg} 0;
      `}

    input {
      padding: ${theme.spacings.xs};
      width: 100%;
      height: 100%;
      font-size: ${theme.font.size.md};
      outline-color: ${theme.colors.primary};
      border: none;

      &::placeholder {
        color: ${theme.colors.darkGray};
      }
    }
  `}
`;
