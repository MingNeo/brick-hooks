import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import useCounter from './index';

describe('useCounter 校验', () => {
  it('引用正常', () => {
    expect(useCounter).toBeDefined();
  });

  const hook = renderHook(({ initialValue, options }) => useCounter(initialValue, options), {
    initialProps: { initialValue: 0, options: { min: 0, max: 3 } },
  });
  const { result, rerender } = hook;

  const [, actions] = result.current;

  it('初始状态正常', () => {
    act(() => {
      expect(result.current[0]).toBe(0);
    });
  });

  it('加减正常', () => {
    act(() => {
      actions.inc();
    });

    expect(result.current[0]).toBe(1);

    act(() => {
      actions.inc(2);
    });

    expect(result.current[0]).toBe(3);

    act(() => {
      actions.dec();
    });

    expect(result.current[0]).toBe(2);

    act(() => {
      actions.dec(2);
    });

    expect(result.current[0]).toBe(0);
  });

  it('min max 正常', () => {
    act(() => {
      actions.dec(2);
    });

    expect(result.current[0]).toBe(0);
  });


  it('reset正常', () => {
    act(() => {
      actions.reset();
    });

    expect(result.current[0]).toBe(0);
  });
});
