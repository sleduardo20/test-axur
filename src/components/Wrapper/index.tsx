import * as S from './styles';

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <S.Container>{children}</S.Container>;
};
