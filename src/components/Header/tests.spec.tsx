import { render, screen } from '../../utils/tests-utilitary';

import { Header } from '.';

describe('<Header />', () => {
  it('should render header correctly', () => {
    render(<Header />);

    expect(screen.getByRole('img', { name: /logo axur/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Teste Técnico Front End/i }),
    ).toBeInTheDocument();
  });
});
