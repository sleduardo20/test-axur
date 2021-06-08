import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 90rem;
    padding: ${theme.spacings.sm};
    margin: 16rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.size.md};
      margin: ${theme.spacings.xxlg} 0;
    }

    ul {
      li + li {
        margin-top: ${theme.spacings.md};
      }
    }

    ${media.lessThan('small')`
        margin-top: 4rem;
      `}

    form {
      width: 100%;
      display: flex;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;

      ${media.lessThan('medium')`
        flex-direction: column;
      `}
    }
  `}
`;
