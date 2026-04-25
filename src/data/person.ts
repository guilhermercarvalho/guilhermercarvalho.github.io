import { Person } from "../types/person";

export const person: Person = {
  name: 'Guilherme Carvalho',
  role: {
    'pt-BR': 'Desenvolvedor Full Stack',
    en: 'Full Stack Developer'
  },
  description: {
    'pt-BR': 'Desenvolvedor apaixonado com experiência em construir aplicações web usando tecnologias modernas.',
    en: 'Passionate developer with experience in building web applications using modern technologies.'
  },
  social: {
    github: 'https://github.com/guilhermercarvalho',
    linkedin: 'https://www.linkedin.com/in/guilhermercarvalho/'
  },
  location: {
    city: 'Franca',
    state: 'São Paulo',
    countryCode: 'BR',
    country: {
      'pt-BR': 'Brasil',
      en: 'Brazil'
    }
  },
  contact: {
    email: 'dev.gcarvalho@gmail.com'
  },
  sites: {
    portfolio: 'https://guilhermercarvalho.github.io',
    blog: 'https://guilhermercarvalho.github.io/blog'
  },
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
};
