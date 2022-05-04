import http from '@services/http'

export default {
  loginByLocal(data: {}): Promise<{}> {
    return http.post('auth/signin_by_local', data || {})
  },
  logout(data: {}): Promise<{}> {
    return http.get('auth/logout', data || {})
  },
  loginByGoogle(data: {}): Promise<{}> {
    return http.post('auth/signin_by_google', data || {})
  }
}

