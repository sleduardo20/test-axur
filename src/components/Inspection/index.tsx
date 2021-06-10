import Link from 'next/link';
import { FiList } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

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
            <Button size="small">
              <FiList size={24} />
            </Button>
          </a>
        </Link>

        <MdDelete
          size={24}
          onClick={() => deleteInspections(id)}
          color="#C92828"
        />
      </S.GroupButtons>
    </S.Container>
  );
};
