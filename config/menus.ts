export const coreHooks = {
  title: 'Brick-hooks',
  path: '/common',
  children: [
    'createContextHook',
    'useArray',
    'useAsync',
    'useCounter',
    'useDebounceEffect',
    'useDebounceFn',
    'useDebounceState',
    'useDebounceValue',
    'useDeepCompare',
    'useDidMount',
    'useWillUnmount',
    'useDidUpdate',
    'useUnmountedRef',
    'useEffectMaunal',
    'useIsoEffect',
    'useEventBus',
    'useForceRender',
    'useInput',
    'useInterval',
    'useMemoCompare',
    'useMethods',
    'useMethodsImmer',
    'useObjectState',
    'useObjectStateImmer',
    'usePolling',
    'usePrevious',
    'useReducerImmer',
    'useRefCallback',
    'useRefValue',
    'useSet',
    'useThrottleFn',

    // List 相关
    'useListChecked',
    'useListData',
    'useListState',
    'useListViewData',
    'useDataListToTree',
    'useDataListToMap',
    'useDataTreeToList',
    'useListSequenceLoad',

    // 开发工具
    'useLogRender',
    'useRenderCount',

    // 'hydrogen-store',
    'useTimeout',
    'useTimeoutFn',
    'useToggle',
    'useTrimState',
    'useTrim',
    'useCountdown',
    'useCountup',
    'useHistoryRef',
    'useHistoryState',
  ],
}

export const webHooks = {
  title: 'Brick-hooks-web',
  path: '/web',
  children: [
    'useAnimate',
    'useBreakpoint',
    'useCookie',
    'useDarkMode',
    'useEventListener',
    'useFreeDrag',
    'useGeoLocation',
    'useHover',
    'useInView',
    'useKey',
    'useLazyImage',
    'useLazySequenceLoad',
    'useLink',
    'useMedia',
    'useMediaQuery',
    'useOnline',
    'useScript',
    'useScroll',
    'useScrollFixed',
    'useStorage',
    'useStyle',
    'useTitle',
    'useTransition',
    'useWindowResize',
  ],
}

export const nativeHooks = {
  title: 'Brick-hooks-native',
  path: '/native',
  children: [
    {
      path: '/native/use-animate',
      title: 'useAnimate',
    },
    {
      path: '/native/use-animate-value',
      title: 'useAnimateValue',
    },
    {
      path: '/native/use-transition',
      title: 'useTransition',
    },
    {
      path: '/native/use-appstate',
      title: 'useAppstate',
    },
    {
      path: '/native/use-async-storage',
      title: 'useAsyncStorage',
    },
    {
      path: '/native/use-focus-app',
      title: 'useFocusApp',
    },
    {
      path: '/native/use-in-view',
      title: 'useInView',
    },
    {
      path: '/native/use-lazy-sequence-load',
      title: 'useLazySequenceLoad',
    },
    {
      path: '/native/use-scroll-to-top',
      title: 'useScrollToTop',
    },
    // 'useAnimateValue',
    // 'useTransition',
    // 'useAppstate',
    // 'useAsyncStorage',
    // 'useFocusApp',
    // 'useInView',
    // 'useLazySequenceLoad',
    // 'useScrollToTop'
  ],
}

export const businessHooks = {
  title: 'Brick-hooks-business',
  path: '/business',
  children: ['useAmapLocation', 'useAmapPoi', 'useCascader', 'useCycleBuy'],
}

export const reactNavigation4Hooks = {
  title: 'Brick-hooks-react-navigation4',
  path: '/navigation4',
  children: ['useFocusEffect', 'useIsFocused', 'useNavigation', 'useNavigationState', 'usePageFocus', 'useScrollToTop'],
}
