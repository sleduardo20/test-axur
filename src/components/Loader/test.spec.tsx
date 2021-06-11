import { render, screen } from '../../utils/tests-utilitary';

import { Loader } from '.';

describe('<Loader />', () => {
  it('should render Loader with icon', () => {
    render(<Loader />);

    expect(screen.getByLabelText(/loading/i)).toMatchSnapshot();
  });
});
