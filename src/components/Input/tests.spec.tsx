import { FiSearch } from 'react-icons/fi';
import { render, screen } from '../../utils/tests-utilitary';

import Input from '.';

describe('<Input />', () => {
  it('should render Input with icon', () => {
    render(
      <Input
        name="search"
        placeholder="search"
        icon={<FiSearch aria-label="icon" />}
      />,
    );

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/icon/i)).toBeInTheDocument();
  });

  it('should render Input without icon', () => {
    render(<Input name="search" placeholder="search" />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();

    expect(screen.queryByLabelText(/icon/i)).not.toBeInTheDocument();
  });
});
