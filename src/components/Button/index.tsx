import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'normal' | 'medium' | 'small';
  color?: 'primary' | 'secondary' | 'ternary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  size = 'normal',
  color = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <S.Container size={size} color={color} {...rest}>
      {children}
    </S.Container>
  );
};
