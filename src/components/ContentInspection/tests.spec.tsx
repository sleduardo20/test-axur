import {
  mockContentInpectioin,
  mockContentInpectioinWithoutUrls,
} from './mock';
import { render, screen } from '../../utils/tests-utilitary';

import { ContentInspeciton } from '.';

describe('<ContentInspeciton />', () => {
  it('should be able render with list urls', () => {
    render(<ContentInspeciton {...mockContentInpectioin} />);

    expect(screen.getAllByRole('link')).toHaveLength(4);
  });

  it('should be able render without list url', () => {
    render(<ContentInspeciton {...mockContentInpectioinWithoutUrls} />);

    expect(screen.getAllByRole('link')).toHaveLength(1);
  });
});
