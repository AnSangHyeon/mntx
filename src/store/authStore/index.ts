import { action, computed, observable } from 'mobx'
import { StoreExt } from '@utils/reactExt'

export class AuthStore extends StoreExt {
  @observable
  user: {} = {}

  @observable
  signedIn: boolean = false

  @computed
  get isSigned(): boolean {
    return this.isSigned === true
  }

  @action
  login = async (params: {}) => {
    const res = await this.api.auth.loginByLocal(params)
  }

}

export default new AuthStore()
