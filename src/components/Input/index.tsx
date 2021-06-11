import { forwardRef, InputHTMLAttributes, useRef } from 'react';
import * as S from './styles';

export type InputProps = {
  name: string;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.ForwardRefRenderFunction<T, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  return (
    <S.Container>
      <input ref={ref} name={name} type="text" {...rest} />
      {icon && icon}
    </S.Container>
  );
};

export default forwardRef(Input);
