import userEvent from '@testing-library/user-event';
import { defaultValuesContextData } from 'hooks/useInspections';
import { render, screen, waitFor } from '../../utils/tests-utilitary';

import { ContentIndex } from '.';

describe('<ContentIndex />', () => {
  it('should be able create inspection correctly', async () => {
    const inspectionsProviderProps = {
      ...defaultValuesContextData,
      createInspections: jest.fn(),
    };

    render(<ContentIndex />, {
      inspectionsProviderProps,
    });

    const input = screen.getByPlaceholderText(/adicionar inspeção/i);
    const button = screen.getByRole('button', { name: /add inpection/i });

    userEvent.type(input, 'windows');
    userEvent.click(button);

    await waitFor(() => {
      expect(inspectionsProviderProps.createInspections).toBeCalledWith(
        'windows',
      );
    });
  });

  it('should be able show error message when typing a few characters', async () => {
    render(<ContentIndex />);

    const input = screen.getByPlaceholderText(/adicionar inspeção/i);
    const button = screen.getByRole('button', { name: /add inpection/i });

    userEvent.type(input, 'win');
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/mínimo 4 caracteres/i)).toBeInTheDocument();
    });
  });

  it('should be able show error message when input is empty', async () => {
    render(<ContentIndex />);

    const button = screen.getByRole('button', { name: /add inpection/i });

    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Digite um algum nome/i)).toBeInTheDocument();
    });
  });
});
