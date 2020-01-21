import { CNodeApi } from './api'

type Tab = 'ask' | 'share' | 'job' | 'good'

class CNode {
  getTopics = async (params: {
    /**
     * 页数
     */
    page: number
    /**
     * 主题分类
     */
    tab: Tab
    /**
     * 每一页的主题数量
     */
    limit?: number
    /**
     * 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
     */
    mdrender?: boolean
  }) => {
    const res = await CNodeApi.get('/topics', { params })
    return res.data
  }
}

export default new CNode()
