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
  small: () => css`
    width: 12rem;
    height: 4rem;
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ theme, color, size }) => css`
    border-radius: 0.4rem;
    font-size: ${theme.font.size.sm};
    font-weight: 700;
    text-transform: uppercase;
    color: ${theme.colors.white};
    border: none;
    transition: 0.2s;

    ${color && modifiers[color](theme)};
    ${size && modifiers[size]};

    &:hover {
      cursor: pointer;
      filter: brightness(90%);
    }
  `}
`;
