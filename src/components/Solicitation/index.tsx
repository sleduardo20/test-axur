import { Button } from 'components/Button';
import Link from 'next/link';
import * as S from './styles';

export const Solicitation = () => {
  return (
    <S.Container>
      <strong>Body</strong>
      <Link href="#">
        <a>
          <Button size="small">Consultar</Button>
        </a>
      </Link>
    </S.Container>
  );
};
