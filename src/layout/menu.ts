import baseLoadable from '@loadable/component'
import { filter } from 'lodash'

const loadable = func => {
  return baseLoadable(func, { fallback: '<div>Loading...</div>' })
}

export const loadComponent = (loader: () => Promise<any>) => loadable(loader)

export const asynchronousComponents = {
  Home: loadComponent(() => import(/* webpackChunkName: "Home" */ '@pages/Home')),
}

export type AsynchronousComponentKeys = keyof typeof asynchronousComponents

export interface RouteMenu {
  id: string
  exact: boolean
  isSigned?: boolean
  path?: string
  name?: string
  visible?: boolean
  // icon?: () => JSX.Element
  component?: AsynchronousComponentKeys
}

export interface MenuInTree extends RouteMenu {
  children?: MenuInTree[]
}

const menus: RouteMenu[] = [
  {
    id: '1',
    exact: true,
    isSigned: true,
    visible: true,
    path: '/home',
    name: 'HOME',
    component: 'Home',
  }
]

export const filterMenus = (isSigned: boolean) => {
  const excludeMenus = filter(menus, {isSigned: isSigned, visible: true})
  return excludeMenus
}

export default menus