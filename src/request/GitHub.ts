import { GitHubApi } from './api'

type Tab = 'ask' | 'share' | 'job' | 'good'

class GitHUb {
  getRepositories = (params?: {
    q: string
    sort?: string
  }): Promise<{ items: any[]; total_count: number; incomplete_results: boolean }> => {
    return GitHubApi.get('/search/repositories', { params })
  }
}

export default new GitHUb()
