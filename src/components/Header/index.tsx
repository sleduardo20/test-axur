import Image from 'next/image';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <Image src="/img/logo.svg" width={196} height={33} />
      <h1>Teste Técnico Front End Software Developer</h1>
    </S.Container>
  );
};
