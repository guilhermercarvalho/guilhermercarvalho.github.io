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
        linkedin: 'https://linkedin.com/guilhermercarvalho'
    },
    location: {
        city: 'São Paulo',
        country: {
            'pt-BR': 'Brasil',
            en: 'Brazil'
        }
    },
    contact: {
        email: 'dev.gcarvalho@gmail.com'
    }
};
