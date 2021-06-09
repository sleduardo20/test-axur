import { Button } from 'components/Button';
import Link from 'next/link';
import * as S from './styles';

export type InspectionProps = {
  id: string;
  nameInspection: string;
};

export const Inspection = ({ id, nameInspection }: InspectionProps) => {
  return (
    <S.Container>
      <strong>{nameInspection}</strong>
      <Link href={`inspection/${id}`}>
        <a>
          <Button size="medium">Consultar</Button>
        </a>
      </Link>
    </S.Container>
  );
};
