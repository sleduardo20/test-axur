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
  ternary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.ternary};
  `,
  normal: () => css`
    width: 10rem;
    height: 10rem;
  `,
  medium: () => css`
    width: 6rem;
    height: 6rem;
  `,
  small: () => css`
    width: 4.6rem;
    height: 4.6rem;
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, color, size }) => css`
    border-radius: 50%;
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
