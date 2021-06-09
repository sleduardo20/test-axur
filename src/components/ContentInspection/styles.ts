import styled, { css } from 'styled-components';
import { ContentInspectionProps } from '.';

type TitleProps = Pick<ContentInspectionProps, 'status'>;

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.size.md};
  `}
`;

export const Title = styled.div<TitleProps>`
  ${({ theme, status }) => css`
    width: 100%;
    margin-top: ${theme.spacings.xxlg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.sm};

    & strong :nth-child(2) {
      span {
        color: ${status === 'active'
          ? theme.colors.green
          : theme.colors.ternary};
      }
    }

    span {
      text-transform: uppercase;
    }
  `}
`;

export const ListLinks = styled.div`
  ${({ theme }) => css`
    border-radius: 0.4rem;
    background: ${theme.colors.white};
    padding: ${theme.spacings.sm};
    margin-top: ${theme.spacings.lg};

    ul {
      margin-top: ${theme.spacings.lg};
    }

    li {
      list-style: none;
      padding-bottom: ${theme.spacings.lg};
      border-bottom: 1px solid ${theme.colors.secondary};
    }

    li + li {
      margin-top: ${theme.spacings.xlg};
    }
  `}
`;
