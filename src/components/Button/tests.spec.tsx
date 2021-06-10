import { render, screen } from '../../utils/tests-utilitary';

import { Button } from '.';

describe('<Buttom />', () => {
  it('should be able render a button with children, size normal and color primary', () => {
    render(
      <Button>
        <span>Salve</span>
      </Button>,
    );

    expect(screen.getByRole('button', { name: /salve/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /salve/i })).toHaveStyle({
      width: '10rem',
    });
    expect(screen.getByRole('button', { name: /salve/i })).toHaveStyle({
      height: '10rem',
    });

    expect(screen.getByRole('button', { name: /salve/i })).toHaveStyle({
      backgroundColor: '#FF8303',
    });
  });

  it('should be able render a button with size medium and color secondary', () => {
    render(
      <Button size="medium" color="secondary">
        OK
      </Button>,
    );

    expect(screen.getByRole('button', { name: /OK/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /OK/i })).toHaveStyle({
      width: '6rem',
    });
    expect(screen.getByRole('button', { name: /OK/i })).toHaveStyle({
      height: '6rem',
    });

    expect(screen.getByRole('button', { name: /OK/i })).toHaveStyle({
      backgroundColor: '#FF5824',
    });
  });

  it('should be able render a button with size medium and color secondary', () => {
    render(
      <Button size="small" color="ternary">
        OK
      </Button>,
    );

    expect(screen.getByRole('button', { name: /OK/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /OK/i })).toHaveStyle({
      width: '4.6rem',
    });
    expect(screen.getByRole('button', { name: /OK/i })).toHaveStyle({
      height: '4.6rem',
    });

    expect(screen.getByRole('button', { name: /OK/i })).toHaveStyle({
      backgroundColor: '#C92828',
    });
  });
});
