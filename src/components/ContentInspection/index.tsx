import Link from 'next/link';

import { FiArrowLeft } from 'react-icons/fi';

import { Button } from 'components/Button';
import { Wrapper } from 'components/Wrapper';

import { useInspections } from 'hooks/useInspections';
import * as S from './styles';

export type ContentInspectionProps = {
  id: string;
  status: string;
  urls: string[];
};

export const ContentInspeciton = ({
  id,
  status,
  urls,
}: ContentInspectionProps) => {
  const { inspections } = useInspections();

  const inspection = inspections.filter(
    ({ idInspection }) => idInspection === id,
  );

  return (
    <Wrapper>
      <S.Container>
        <Link href="/">
          <a>
            <Button color="secondary" size="small">
              <FiArrowLeft size={24} />
            </Button>
          </a>
        </Link>

        <S.Title status={status}>
          <strong>
            Nome da Inspeção: <span>{inspection[0]?.nameInspection}</span>
          </strong>
          <strong>
            Status: <span>{status}</span>
          </strong>
        </S.Title>

        {urls?.length > 0 ? (
          <S.ListLinks>
            <strong>Links encontrados:</strong>
            <ul>
              {urls.map(link => (
                <li key={link}>
                  <Link href={link}>
                    <a target="_blank">{link}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </S.ListLinks>
        ) : (
          <S.ListLinks>
            <span>Nenhum Link encontrado</span>
          </S.ListLinks>
        )}
      </S.Container>
    </Wrapper>
  );
};
