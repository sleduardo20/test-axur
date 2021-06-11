import { renderHook } from '@testing-library/react-hooks';
import { act } from 'utils/tests-utilitary';

import {
  useInspections,
  InpectionsProvider,
  InspectionProviderProps,
} from './useInspections';

describe('useInspections', () => {
  it('should be able create and inspection', async () => {
    const wrapper = ({ children }: InspectionProviderProps) => (
      <InpectionsProvider>{children}</InpectionsProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useInspections(), {
      wrapper,
    });

    expect(result.current.loading).toBe(false);

    act(() => {
      result.current.createInspections('windows');
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.inspections[0].nameInspection).toEqual('windows');
    expect(result.current.loading).toBe(false);
  });

  it('should be able delele and inspection', async () => {
    const wrapper = ({ children }: InspectionProviderProps) => (
      <InpectionsProvider>{children}</InpectionsProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useInspections(), {
      wrapper,
    });
  });
});
