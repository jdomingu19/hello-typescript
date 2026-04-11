// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 053 Strong Typing GitHub API Response

// 1. Types generated with quicktype.io for GitHub API response
export type GitHubAPIResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
};

export type Item = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: Language | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  has_pull_requests: boolean;
  pull_request_creation_policy: PullRequestCreationPolicy;
  topics: string[];
  visibility: Visibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: DefaultBranch;
  score: number;
};

export enum DefaultBranch {
  Dev = "dev",
  Develop = "develop",
  Main = "main",
  Master = "master",
  V2 = "v2",
}

export enum Language {
  Go = "Go",
  JavaScript = "JavaScript",
  Rust = "Rust",
  TypeScript = "TypeScript",
  Vue = "Vue",
}

export type License = {
  key: string;
  name: string;
  spdx_id: string;
  url: null | string;
  node_id: string;
};

export type Owner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  user_view_type: Visibility;
  site_admin: boolean;
};

export enum Type {
  Organization = "Organization",
  User = "User",
}

export enum Visibility {
  Public = "public",
}

export enum PullRequestCreationPolicy {
  All = "all",
}

(async () => {
  // 2. Define API endpoint
  const API_URL = "https://api.github.com/search/repositories?q=typescript";

  // 3. Perform request with top-level await
  const response = await fetch(API_URL);

  // 4. Handle error response
  if (!response.ok) {
    throw new Error("Request failed");
  }

  // 5. Parse JSON response with strong typing
  const data = (await response.json()) as GitHubAPIResponse;

  // 6. Access strongly typed properties
  console.log(data.items);
  console.log(data.total_count);
  console.log(data.incomplete_results);

  // 7. Map repositories with type safety
  data.items.map((repository) => {
    return {
      name: repository.name,
      stars: repository.stargazers_count,
      languages: repository.languages_url,
      url: repository.html_url,
      // 8. TypeScript prevents access to non-existent properties
      // Error: Property 'abc' does not exist on type 'Item'.
      // abc: repository.abc,
    };
  });
})();
