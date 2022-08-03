import { storiesOf } from '@storybook/react';
import { AnimatedValueDemo, Demo1, Demo2, Demo3, DemoLoop, RangeDemo } from './../../../../native/src/useAnimate/demo';

storiesOf('useAnimate', module)
  .add('default', Demo1)
  .add('设置duration、autoRun、delay、easing', Demo2)
  .add('多个 keyframe', Demo3)
  .add('使用 range 自定义 keyframe', RangeDemo)
  .add('loop', DemoLoop)
  .add('使用 animatedValue interpolate', AnimatedValueDemo)


