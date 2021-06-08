import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Solicitation } from 'components/Solicitation';
import * as S from './styles';

export const ContentIndex = () => {
  return (
    <S.Container>
      <form action="#">
        <Input name="search" placeholder="Digite sua solicitação..." />
        <Button color="secondary" type="submit">
          Cadastrar
        </Button>
      </form>

      <h3>Listagem de Solicitações:</h3>

      <ul>
        <Solicitation />
        <Solicitation />
        <Solicitation />
      </ul>
    </S.Container>
  );
};
