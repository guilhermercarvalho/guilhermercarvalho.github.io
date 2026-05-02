import { GitHubProject, GitHubProjectWithLanguages, GitHubRepo } from "../types/github";
import { projectShared } from "./projects-shared";

const GITHUB_API = {
  base_url: 'https://api.github.com',
  username: '/guilhermercarvalho',
  repos: '/repos',
};

const { base_url, username, repos } = GITHUB_API;

const getRepoUrl = (repoName: string) =>
  `${base_url}${repos}${username}/${repoName}`;

// URL do README
const getReadmeUrl = (repoName: string) =>
  `${base_url}${repos}${username}/${repoName}/readme`;

const token = import.meta.env.VITE_GITHUB_TOKEN;
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github.v3+json',
};

const CACHE_TTL = 60 * 60 * 1000; // 1 hora
const CACHE_KEY = 'portfolio_projects_cache';

export const fetchProjects = async (): Promise<GitHubProject[]> => {
  const cached = getFromCache();
  if (cached) return cached;

  const repoNames = Object.keys(projectShared);
  const enrichedRepos = await Promise.all(
    repoNames.map(async (name) => {
      try {
        const repoRes = await fetch(getRepoUrl(name), { headers });
        if (!repoRes.ok) throw new Error(`Repo ${name} not found`);
        const repo: GitHubRepo = await repoRes.json();

        const langRes = await fetch(repo.languages_url, { headers });
        const languages = langRes.ok ? await langRes.json() : {};

        let readme = '';
        try {
          const readmeRes = await fetch(getReadmeUrl(name), { headers });
          if (readmeRes.ok) {
            const data = await readmeRes.json();
            readme = decodeReadme(data.content);
          }
        } catch {
          console.warn(`README não encontrado para ${name}`);
        }

        return {
          ...repo,
          programmingLanguages: languages,
          readme: shortReadmeContent(readme),
        } as GitHubProjectWithLanguages;
      } catch (error) {
        console.error(`Erro ao processar ${name}:`, error);
        return null;
      }
    })
  );

  const validRepos = enrichedRepos.filter((r) => !!r) as GitHubProject[];

  saveToCache(validRepos);
  return validRepos;
};

function getFromCache(): GitHubProject[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp < CACHE_TTL) {
      return data;
    }
    localStorage.removeItem(CACHE_KEY);
  } catch {
    localStorage.removeItem(CACHE_KEY);
  }
  return null;
}

function saveToCache(projects: GitHubProject[]) {
  const payload = {
    data: projects,
    timestamp: Date.now(),
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
}

function shortReadmeContent(readme: string): string {
  return readme.split('\n').slice(0, 3).join('\n');
}

function decodeReadme(content: any) {
  const binaryString = atob(content);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new TextDecoder('utf-8').decode(bytes);
}
