import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'normal' | 'small';
  color?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  size = 'normal',
  color = 'primary',
}: ButtonProps) => {
  return (
    <S.Container size={size} color={color}>
      {children}
    </S.Container>
  );
};
