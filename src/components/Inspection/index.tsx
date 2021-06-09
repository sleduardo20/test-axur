import Link from 'next/link';
import { FiTrash } from 'react-icons/fi';

import { Button } from 'components/Button';
import { useInspections } from 'hooks/useInspections';

import * as S from './styles';

export type InspectionProps = {
  id: string;
  nameInspection: string;
};

export const Inspection = ({ id, nameInspection }: InspectionProps) => {
  const { deleteInspections } = useInspections();

  return (
    <S.Container>
      <strong>{nameInspection}</strong>

      <S.GroupButtons>
        <Link href={`inspection/${id}`}>
          <a>
            <Button size="medium">Consultar</Button>
          </a>
        </Link>

        <Button
          size="small"
          color="ternary"
          onClick={() => deleteInspections(id)}
        >
          <FiTrash size={24} />
        </Button>
      </S.GroupButtons>
    </S.Container>
  );
};
