import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';

import theme from 'styles/theme';

import { ReactElement } from 'react';

type CustomRenderProps = Omit<RenderOptions, 'queries'>;

const renderCustum = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {},
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);

export * from '@testing-library/react';

export { renderCustum as render };
