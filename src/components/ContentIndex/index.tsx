import { SubmitHandler, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';

import { Button } from 'components/Button';
import Input from 'components/Input';
import { Inspection } from 'components/Inspection';
import { Wrapper } from 'components/Wrapper';
import { Loader } from 'components/Loader';

import { useInspections } from '../../hooks/useInspections';

import * as S from './styles';

type FormData = {
  name: string;
};

export const ContentIndex = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createInspections, inspections, loading } = useInspections();

  const handleCreateInspection: SubmitHandler<FormData> = async (
    data,
    event,
  ) => {
    createInspections(data.name);

    event?.target.reset();
  };

  return (
    <Wrapper>
      <S.Container>
        <form onSubmit={handleSubmit(handleCreateInspection)}>
          <S.Field>
            <Input
              placeholder="adicionar inspeção..."
              {...register('name', {
                required: { value: true, message: 'Digite um algum nome.' },
                minLength: { value: 4, message: 'No mínimo 4 caracteres.' },
              })}
            />

            {errors.name && errors.name.type === 'required' && (
              <span>{errors.name.message}</span>
            )}
            {errors.name && errors.name.type === 'minLength' && (
              <span>{errors.name.message}</span>
            )}
          </S.Field>

          <Button
            color="secondary"
            type="submit"
            size="medium"
            name="add inpection"
            aria-label="add inpection"
          >
            <FiPlus size={24} />
          </Button>
        </form>

        {inspections?.length > 0 && (
          <>
            <h3>Listagem de Inspeções:</h3>

            <ul>
              {inspections.map(inspection => (
                <Inspection
                  key={inspection.idInspection}
                  id={inspection.idInspection}
                  nameInspection={inspection.nameInspection}
                />
              ))}
            </ul>
          </>
        )}
      </S.Container>
      {loading && <Loader aria-label="loading" />}
    </Wrapper>
  );
};
