import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';

import theme from 'styles/theme';

import { ReactElement } from 'react';
import {
  ContextDataProps,
  defaultValuesContextData,
  InspectionContext,
} from 'hooks/useInspections';

type CustomRenderProps = {
  inspectionsProviderProps?: ContextDataProps;
} & Omit<RenderOptions, 'queries'>;

const renderCustum = (
  ui: ReactElement,
  {
    inspectionsProviderProps = defaultValuesContextData,
    ...renderOptions
  }: CustomRenderProps = {},
) =>
  render(
    <ThemeProvider theme={theme}>
      <InspectionContext.Provider value={inspectionsProviderProps}>
        {ui}
      </InspectionContext.Provider>
    </ThemeProvider>,
    renderOptions,
  );

export * from '@testing-library/react';

export { renderCustum as render };
