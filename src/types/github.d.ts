export interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    languages_url: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    topics?: string[];
    fork: boolean;
    has_pages: boolean;
}

export interface GitHubProject extends GitHubRepo {
    programmingLanguages?: Record<string, number>;
    readme?: string;
}

export type GitHubProjectWithLanguages = GitHubProject & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    programmingLanguages: any;
};
