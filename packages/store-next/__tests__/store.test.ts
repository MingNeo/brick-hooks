import { act, renderHook } from '@testing-library/react-hooks';
import { createStore } from '../src/index'

describe('@bricks-hooks/store-next 校验', () => {
  it('引用正常', () => {
    expect(createStore).toBeDefined();
  });

  const singleStore = createStore({
    modules: {
      test: {
        state: {
          a: 1,
        },
      },
    },
    devtoolId: 'Test Next Store',
  })

  it('初始状态正常', () => {
    const { result } = renderHook(() => singleStore.useStore('test'));
    expect(result.current[0]).toEqual({ a: 1});
  });

  it('加减正常', () => {
    const { result } = renderHook(() => singleStore.useStore('test'));
    const [, setStore] = result.current;

    expect(result.current[0]).toEqual({ a: 1});

    act(() => setStore(prev => ({ a: prev.a + 1 })));
    console.log('result.current[0]', result.current[0], JSON.stringify(result.current[0]?.a))
    expect(result.current[0]).toEqual({ a: 2 });

    act(() => setStore(prev => ({ a: prev.a + 1 })));
    expect(result.current[0]).toEqual({ a: 3});

    act(() => setStore(prev => ({ a: prev.a - 1 })));
    expect(result.current[0]).toEqual({ a: 2});

    act(() => setStore(prev => ({ a: prev.a - 1 })));
    expect(result.current[0]).toEqual({ a: 1 });
  });
});
