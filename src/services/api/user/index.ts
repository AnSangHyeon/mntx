import http from '@services/http'

export default {
  getUser(data: {}): Promise<{}> {
    return http.get('user/info', data || {})
  },
}
