import { InputHTMLAttributes } from 'react';
import * as S from './styles';

export type InputProps = {
  name: string;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, icon, ...rest }: InputProps) => {
  return (
    <S.Container>
      <input name={name} type="text" {...rest} />
      {icon && icon}
    </S.Container>
  );
};
