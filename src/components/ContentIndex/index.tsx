import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Inspection } from 'components/Inspection';
import { Wrapper } from 'components/Wrapper';
import { Loader } from 'components/Loader';

import { useInspections } from '../../hooks/useInspections';

import * as S from './styles';

type FormData = {
  keyword: string;
};

export const ContentIndex = () => {
  const { register, handleSubmit } = useForm();

  const { createInspections, inspections, loading } = useInspections();

  const handleCreateInspection: SubmitHandler<FormData> = async values => {
    createInspections(values.keyword);
  };

  return (
    <Wrapper>
      <S.Container>
        <form onSubmit={handleSubmit(handleCreateInspection)}>
          <Input
            placeholder="Digite sua solicitação..."
            {...register('keyword')}
          />
          <Button color="secondary" type="submit">
            {loading ? <Loader /> : 'Cadastrar'}
          </Button>
        </form>

        <h3>Listagem de Inspeções:</h3>

        <ul>
          {inspections.map(inspection => (
            <Inspection key={inspection.id} {...inspection} />
          ))}
        </ul>
      </S.Container>
    </Wrapper>
  );
};
