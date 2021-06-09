import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type ContainerProps = Pick<ButtonProps, 'size' | 'color'>;

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
  `,
  normal: () => css`
    width: 20rem;
    height: 7rem;
  `,
  medium: () => css`
    width: 12rem;
    height: 4rem;
  `,
  small: () => css`
    width: 6rem;
    height: 4rem;
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, color, size }) => css`
    border-radius: 0.4rem;
    font-size: ${theme.font.size.sm};
    padding: ${theme.spacings.sm} ${theme.spacings.md};
    font-weight: 700;
    text-transform: uppercase;
    color: ${theme.colors.white};
    border: none;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    ${color && modifiers[color](theme)};
    ${size && modifiers[size]};

    &:hover {
      cursor: pointer;
      filter: brightness(90%);
    }
  `}
`;
