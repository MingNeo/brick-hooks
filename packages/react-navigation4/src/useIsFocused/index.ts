import * as React from 'react';
import { useRef, useState } from 'react';
import useNavigation from '../useNavigation';

/**
 * Hook to get the current focus state of the screen. Returns a `true` if screen is focused, otherwise `false`.
 * This can be used if a component needs to render something based on the focus state.
 */
export default function useIsFocused(root?: any): boolean {
  const navigation = useNavigation(root);
  const useNavigationref = useRef(navigation);
  useNavigationref.current = navigation
  const [isFocused, setIsFocused] = useState(navigation.isFocused);

  const valueToReturn = navigation.isFocused();

  if (isFocused !== valueToReturn) {
    // If the value has changed since the last render, we need to update it.
    // This could happen if we missed an update from the event listeners during re-render.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    // This is the same logic as in https://github.com/facebook/react/tree/master/packages/use-subscription
    setIsFocused(valueToReturn);
  }

  React.useEffect(() => {
    const focusSubscription = useNavigationref.current.addListener('focus', () =>
      setIsFocused(true)
    );

    const blurSubscription = useNavigationref.current.addListener('blur', () =>
      setIsFocused(false)
    );

    return () => {
      focusSubscription.remove();
      blurSubscription.remove();
    };
  }, []);

  React.useDebugValue(valueToReturn);

  return valueToReturn;
}