import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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
    position: relative;
    transition: 0.2s transform;

    svg {
      &:hover {
        cursor: pointer;
      }
    }

    &:hover {
      transform: translate(4px);
    }

    strong {
      text-transform: uppercase;
      flex: 1;
      font-weight: 700;
      font-size: ${theme.font.size.md};
    }

    &::after {
      content: '';
      width: 4px;
      height: 100%;
      position: absolute;
      border-radius: 4px 0 0 4px;
      left: 0;
      background-color: ${theme.colors.secondary};
    }

    &::before {
      content: '';
      width: 4px;
      height: 100%;
      position: absolute;
      border-radius: 0 4px 4px 0;
      right: 0;
      background-color: ${theme.colors.secondary};
    }
  `}
`;

export const GroupButtons = styled.div`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
      width: 12rem;
  `}
`;
