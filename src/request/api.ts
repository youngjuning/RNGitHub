import qs from 'qs'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const handleRequestConfig = (config: AxiosRequestConfig) => {
  if (config.method === 'get') {
    config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' })
  }
  return config
}

class Api {
  instance: AxiosInstance
  constructor(baseConfig?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: 'https://api.github.com',
      timeout: 10000,
      ...baseConfig,
    })

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      config => handleRequestConfig(config),
      error => Promise.reject(error),
    )

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        return response.data
      },
      error => {
        // 对响应错误做点什么
        return Promise.reject(error)
      },
    )
  }
}

const api: AxiosInstance = new Api().instance
export const CNodeApi: AxiosInstance = new Api({ baseURL: 'https://cnodejs.org/api/v1' }).instance
export const GitHubApi: AxiosInstance = new Api().instance

export default api
