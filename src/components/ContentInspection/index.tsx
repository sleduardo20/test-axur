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

        <S.Title>
          <strong>
            Nome: <span>{id}</span>
          </strong>
          <strong>
            Status: <span>{status}</span>
          </strong>
        </S.Title>

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
      </S.Container>
    </Wrapper>
  );
};
