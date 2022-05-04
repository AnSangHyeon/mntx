import React, { createContext, ReactElement } from 'react'
import { Observer } from 'mobx-react'

import * as store from '@store/index'
import { RootStore } from '@store/types'


interface ChildrenProps<T> {
  children: (value: T) => ReactElement
} 

export const RootContext = createContext<RootStore | null>(null)

export const RootConsumer = ({ children }: ChildrenProps<RootStore>) => <Observer>{() => children(store)}</Observer>

export default function Provider({ children }: { children?: React.ReactNode }) {
  return <RootContext.Provider value={{ ...store }}>{children}</RootContext.Provider>
}