export interface Person {
    name: string;
    role: {
        'pt-BR': string;
        en: string;
    };
    description: {
        'pt-BR': string;
        en: string;
    };
    social: {
        github: string;
        linkedin: string;
    };
    contact: {
        email: string;
    };
    location: {
        city: string;
        country: {
            'pt-BR': string;
            en: string;
        }
    }
}
