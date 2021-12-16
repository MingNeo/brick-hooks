import * as React from 'react'
// @ts-ignore-next-line
import { NavigationContext } from 'react-navigation'

export default function useNavigation<T = any>(root?: any): T {
  const navigation = React.useContext(NavigationContext)

  if (navigation === undefined && root === undefined) {
    throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?")
  }

  return (navigation ?? root) as unknown as T
}
