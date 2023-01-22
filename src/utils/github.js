import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

async function getRepositories(keyword, page) {
  const repoData = await octokit.rest.search.repos({
    q: keyword,
    page,
    per_page: 10
  });

  return repoData.data;
}

async function getIssues(owner, repo) {
  const issueData = await octokit.rest.issues.listForRepo({
    owner, repo, per_page: 10
  });

  return issueData.data;
}

export { getRepositories, getIssues };