import { GitHubApi } from './api'

class GitHUb {
  getRepositories = async (
    params: {
      q?: string
      sort?: string
    },
    page?: number,
    size?: number,
  ): Promise<{ data: any[]; total: number }> => {
    const { items, total_count } = await GitHubApi.get('/search/repositories', {
      params: { ...params, page, per_page: size },
    })
    return { data: items, total: total_count }
  }
}

export default new GitHUb()
