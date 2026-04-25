import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GitHubProject } from '../types/github';
import { fetchProjects } from '../data/github-api';
import { getProjectInfo } from '../data/projects-shared';

const MAX_PROJECTS = 4;

export function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const repos = await fetchProjects();
        if (!cancelled) {
          setProjects(repos.slice(0, MAX_PROJECTS));
          setError(null);
        }
      } catch (err) {
        console.error('Failed to load projects:', err);
        if (!cancelled) {
          setError(t('work.loadError'));
          setProjects([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [t]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin inline-block w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-600 dark:text-red-400">
        {error}
      </div>
    );
  }

  return (
    <section id="work" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
          {t('work.title')}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const info = getProjectInfo(project.name);
            const tags = Object.keys(project.programmingLanguages || {}).slice(0, 3);

            return (
              <div
                key={project.name}
                className="rounded-3xl bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50"
              >
                <img
                  src={info.imageUrl}
                  alt={info.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {info.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    {project.description || t(`work.${getProjectKey(project.name)}.desc`)}
                  </p>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-3 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-6">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      <ExternalLink size={16} />
                      {t('work.view')}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getProjectKey(name: string): string {
  const map: Record<string, string> = {
    'ufms-lbd-web-sgbd': 'proj1',
    'ufms-apsoo-venda-carros': 'proj2',
    'ufms-tdsoft-restful-students': 'proj3',
    'producer-consumer-hid': 'proj4',
  };
  return map[name] || 'proj1';
}
