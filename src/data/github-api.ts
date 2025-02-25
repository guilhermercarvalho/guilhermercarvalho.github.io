import { GitHubProject, GitHubProjectWithLanguages, GitHubRepo } from "../types/github";
import { projectShared } from "./projects-shared";
import { person } from "./person"

const GITHUB_API = {
    base_url: 'https://api.github.com',
    username: '/guilhermercarvalho',
    users: '/users',
    repos: '/repos',
    query: '?sort=updated&type=owner'
}

const {
    base_url,
    username,
    users,
    repos,
    query
} = GITHUB_API

const GITHUB_API_REPOS_URL = `${base_url}${users}${username}${repos}${query}`

const getRepoUrl = (repoName: string) => `${base_url}${repos}${username}/${repoName}/readme`

const token = import.meta.env.VITE_GITHUB_TOKEN;
const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github.v3+json'
};

export const fetchProjects = async (): Promise<GitHubProject[]> => {
    const repoResponse = await fetch(GITHUB_API_REPOS_URL, { headers }
    );

    if (!repoResponse.ok) {
        throw new Error(`GitHub API error: ${repoResponse.statusText}`);
    }

    const repos: GitHubRepo[] = await repoResponse.json();

    const enrichedRepos = await Promise.all(repos.map(async (repo) => getEnrichedReposRepos(repo)));

    console.log({ enrichedRepos })

    const validRepos = enrichedRepos.filter((r) =>
        !!r && Object.keys(projectShared).includes(r.name)
    ) as GitHubProjectWithLanguages[];

    return validRepos
};

async function getEnrichedReposRepos(repo: GitHubRepo) {
    // if (repo.fork) return null;
    try {
        const programmingLanguagesRes = await fetch(repo.languages_url, { headers });
        const programmingLanguages = programmingLanguagesRes.ok ? await programmingLanguagesRes.json() : {};

        let readme = '';
        try {
            const readmeRes = await fetch(
                getRepoUrl(repo.name),
                { headers }
            );

            if (readmeRes.ok) {
                const data = await readmeRes.json();
                readme = decodeReadme(data.content);
            }
        } catch (readmeError) {
            console.warn(`README not found for ${repo.name}\n${readmeError}`);
        }

        return {
            ...repo,
            programmingLanguages,
            readme: shortReadmeContent(readme)
        };
    } catch (error) {
        console.error(`Error processing ${repo.name}:`, error);
        return null;
    }
}

function shortReadmeContent(readme: string): string {
    return readme.split('\n').slice(0, 3).join('\n');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decodeReadme(content: any) {
    const base64Content = content;
    const binaryString = atob(base64Content);
    const bytes = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    const decoder = new TextDecoder('utf-8');
    return decoder.decode(bytes);
}

export const getDemoUrl = (project: GitHubProject) => {
    const url = project.has_pages
        ? `${person.sites.portfolio}/${project.name}`
        : project.homepage;
    return url ?? ""
};
