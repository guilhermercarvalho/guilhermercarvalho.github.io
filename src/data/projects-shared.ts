interface RepoInfo {
  title: string;
  blogPost: string | null;
  imageUrl: string;
}

interface RepoInfoFallback {
  title: string;
  blogPost: null;
  imageUrl: string;
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600';

export const projectShared: Record<string, RepoInfo> = {
  'ufms-lbd-web-sgbd': {
    title: 'Sistema de Gerenciamento de Bancos de Dados',
    blogPost: null,
    imageUrl: 'https://images.unsplash.com/photo-1604335398980-ededcadcc37d',
  },
  'producer-consumer-hid': {
    title: 'Produtor-Consumidor',
    blogPost: null,
    imageUrl: 'https://images.unsplash.com/photo-1642516303080-431f6681f864',
  },
  'ufms-apsoo-venda-carros': {
    title: 'Venda de Carros',
    blogPost: null,
    imageUrl: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013',
  },
  'ufms-tdsoft-restful-students': {
    title: 'RESTful API de Estudantes',
    blogPost: null,
    imageUrl: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72',
  },
};

export const getProjectInfo = (repoName: string): RepoInfo | RepoInfoFallback => {
  return projectShared[repoName] ?? {
    title: repoName.replace(/-/g, ' '),
    blogPost: null,
    imageUrl: PLACEHOLDER_IMAGE,
  };
};
