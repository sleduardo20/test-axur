import { defaultValuesContextData } from 'hooks/useInspections';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../utils/tests-utilitary';

import { Inspection } from '.';

const mockInspection = {
  id: 'AdVe15',
  nameInspection: 'React',
};

describe('<Inspection />', () => {
  it('should be able render Inspection correctly', () => {
    render(<Inspection {...mockInspection} />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/inspection/${mockInspection.id}`,
    );

    expect(screen.getByText(mockInspection.nameInspection)).toBeInTheDocument();
  });

  it('should be able call function deleteInspections with id passed', () => {
    const inspectionsProviderProps = {
      ...defaultValuesContextData,
      deleteInspections: jest.fn(),
    };

    render(<Inspection {...mockInspection} />, { inspectionsProviderProps });

    userEvent.click(screen.getByLabelText('icon-delete'));

    expect(inspectionsProviderProps.deleteInspections).toBeCalledWith(
      mockInspection.id,
    );
  });
});
