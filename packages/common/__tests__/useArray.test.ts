import { act, renderHook } from '@testing-library/react-hooks';
import useCounter from '../src/useCounter';

describe('useCounter 校验', () => {
  it('引用正常', () => {
    expect(useCounter).toBeDefined();
  });

  it('初始状态正常', () => {
    const { result } = renderHook(({ initialValue, options }) => useCounter(initialValue, options), {
      initialProps: { initialValue: 0, options: { min: 0, max: 3 } },
    });
    expect(result.current[0]).toBe(0);
  });
  it('加减正常', () => {
    const { result } = renderHook(({ initialValue, options }) => useCounter(initialValue, options), {
      initialProps: { initialValue: 0, options: { min: 0, max: 3 } },
    });
    const [, actions] = result.current;

    expect(result.current[0]).toBe(0);

    act(() => actions.inc());
    expect(result.current[0]).toBe(1);

    act(() => actions.inc(2));
    expect(result.current[0]).toBe(3);

    act(() => actions.dec());
    expect(result.current[0]).toBe(2);

    act(() => actions.dec(2));
    expect(result.current[0]).toBe(0);
  });

  it('min max 正常', () => {
    const { result } = renderHook(({ initialValue, options }) => useCounter(initialValue, options), {
      initialProps: { initialValue: 0, options: { min: 0, max: 3 } },
    });
    const [, actions] = result.current;
    act(() => actions.dec(2));

    expect(result.current[0]).toBe(0);
  });


  it('reset正常', () => {
    const { result } = renderHook(({ initialValue, options }) => useCounter(initialValue, options), {
      initialProps: { initialValue: 0, options: { min: 0, max: 3 } },
    });
    const [, actions] = result.current;
    act(() => actions.reset());

    expect(result.current[0]).toBe(0);
  });
});
