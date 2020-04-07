import { useEffect, useState } from 'react';

/**
 * 处理使用rn ListView组件/ant-mobile ListView组件时的数据，数据为listView dataSource 格式，变化时自动更新
 * @param {DataSource} react-native的ListView.DataSource或antd-mobile的ListView.DataSource
 * @param {*} listData 列表数据，变化时自动更新dataSource
 * @param {function} 判断数据是否变化的比较函数
 */
export default function useListViewDataSource(DataSource, listData = [], rowHasChanged = (r1, r2) => r1 !== r2) {
  let ds;
  // 列表数据
  try {
    ds = new DataSource({ rowHasChanged });
  } catch (error) {
    throw new Error('DatSource类不正确！请检查是否正确传递了react-native的ListView.DataSource或antd-mobile的ListView.DataSource');
  }
  const [dataSource, setDataSource] = useState(ds);

  // 数据变化时刷新列表渲染
  const updateDataSource = (newData) => {
    setDataSource(dataSource.cloneWithRows(newData));
  };

  useEffect(() => {
    updateDataSource(listData); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listData]);

  return [dataSource, updateDataSource];
}
