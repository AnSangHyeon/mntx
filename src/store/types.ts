import { AuthStore } from '@store/authStore'

export interface RootStore {
  routerStore: RouterStore
  authStore: AuthStore
}