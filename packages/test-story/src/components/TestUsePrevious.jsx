import { useState } from 'react';
import { Button } from '@storybook/react/demo';
import { usePrevious , useForceRender } from '@bricks-hooks/common';

export default function Test({ equalsMode }) {
  const [state, setState] = useState(0)
  const last = usePrevious(state, equalsMode);
  const forceUpdate = useForceRender()
  return (
    <div>
      <Button
        onClick={() => {
          setState(prevState => prevState + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setState(prevState => prevState - 1);
        }}
      >
        -
      </Button>
      <Button
        onClick={() => forceUpdate()}
      >
        强制渲染
      </Button>
      <p>
        current {state}
      </p>
      <p>
        previous {last}
      </p>
    </div>
  );
}
