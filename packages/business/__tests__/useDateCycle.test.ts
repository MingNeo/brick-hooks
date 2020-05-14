// import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks';
// import moment from 'moment'
// import business from 'moment-business'
import useDateCycle from '../src/useDateCycle';

describe('useDateCycle 校验', () => {
  it('引用正常', () => {
    expect(useDateCycle).toBeDefined();
  });

  // const hook = renderHook(({ initialValue }) => useDateCycle(initialValue), {
  //   initialProps: { initialValue: {} },
  // });
  // const { result, rerender } = hook;

  // const current = result.current;

  // it('初始状态正常', () => {
  //   act(() => {
  //     expect(result.current.model).toBe('');
  //     expect(result.current.cycle).toBe('');
  //   });
  // });

  // function checkCheckDateDisable() {
  //   const params = getCheckDateDisableParams()

  //   // 单日测试
  //   if(params.isCurrentOdd) {
  //     params.dates.odd.map(moment => {
  //       expect(result.current.checkDateDisable(moment)).toBe(false);
  //     })
  //   } else if(params.isCurrentEven) {

  //   }
  // }

  // it('选择模式正常', () => {
  //   // 每日送
  //   result.current.onChangeModel('everyday')
  //   act(() => {
  //     expect(result.current.model).toBe('everyday');
  //     checkCheckDateDisable()
  //   });

  //   act(() => {
  //     actions.inc(2);
  //   });

  //   expect(result.current[0]).toBe(3);

  //   act(() => {
  //     actions.dec();
  //   });

  //   expect(result.current[0]).toBe(2);

  //   act(() => {
  //     actions.dec(2);
  //   });

  //   expect(result.current[0]).toBe(0);
  // });

  // it('min max 正常', () => {
  //   act(() => {
  //     actions.dec(2);
  //   });

  //   expect(result.current[0]).toBe(0);
  // });

  // it('reset正常', () => {
  //   act(() => {
  //     actions.reset();
  //   });

  //   expect(result.current[0]).toBe(0);
  // });
});

// function getCheckDateDisableParams() {
//   const current = moment()
//   // 今日是单日还是双日
//   const isCurrentOdd = current.date() % 2 === 0;
//   const isCurrentEven = !isCurrentOdd;
//   const isCurrentWeekDay = business.isWeekDay(current);
//   const isCurrentWeekend = !isCurrentWeekDay;

//   const dates: {[x:string]: any[]} = {
//     odd:[]
//   }

//   if(isCurrentOdd) {
//     dates.odd = [current, getNewMoment(moment().add(2, 'd'), {before: current.endOf('month')})]
//     dates.even =  [getNewMoment(moment().add(1, 'd'), {before: current.endOf('month')}), getNewMoment(moment().add(3, 'd'), {before: current.endOf('month')})]
//   }

//   if(isCurrentEven) {

//   }

//   return {
//     isCurrentOdd,isCurrentEven,isCurrentWeekDay,isCurrentWeekend,
//     dates
//   }
// }

// function getNewMoment(current, { before } = {}) {
//   if(!before) return current;
//   if(current.isSameOrBefore(before)) {
//     return current
//   }
//   return undefined
// }
