import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 90rem;
    padding: ${theme.spacings.sm};
    margin: 16rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.lessThan('medium')`
      margin: 4rem auto;
    `}
  `}
`;
