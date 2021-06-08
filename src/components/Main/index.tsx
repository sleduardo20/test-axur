import * as S from './styles';

export const Main = ({ title = 'React Avançado' }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
    </S.Container>
  );
};
