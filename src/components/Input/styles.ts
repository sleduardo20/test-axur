import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 110%;
    height: 5rem;
    background-color: ${theme.colors.white};
    border-radius: 12px;
    font-size: ${theme.font.size.sm};

    input {
      padding: ${theme.spacings.xs};
      border-radius: 12px;
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
