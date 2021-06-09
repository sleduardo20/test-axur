import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.darkGray};
      font-size: ${theme.font.size.md};
      margin-bottom: ${theme.spacings.xs};
    }
    h3 {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.size.md};
      margin: ${theme.spacings.xxlg} 0 ${theme.spacings.lg} 0;
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
      height: 12rem;
      padding: ${theme.spacings.sm};
      display: flex;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
      border: 1px solid ${theme.colors.darkGray};
      border-radius: 0.4rem;

      ${media.lessThan('medium')`
        flex-direction: column;
      `}
    }
  `}
`;
export const Field = styled.div`
  ${({ theme }) => css`
    span {
      color: ${theme.colors.ternary};
      font-size: ${theme.font.size.xsm};
      font-weight: 500;
    }
  `}
`;
