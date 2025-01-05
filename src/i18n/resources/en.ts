import { person } from "../../data/person";

export default {
    translation: {
        languages: {
            en: 'English',
        },
        navigation: {
            about: 'About',
            projects: 'Projects',
            blog: 'Blog',
            contact: 'Contact',
            roles: 'Roles',
            skills: 'Skills',
        },
        home: {
            greeting: "Hi, I'm",
            role: person.role.en,
            cta: 'View my work',
            contact: 'Get in touch',
            resume: 'View my resume',
        },
        about: {
            title: 'About Me',
            description: `
Sou **desenvolvedor full-stack** com expertise em todas as camadas do desenvolvimento de software, desde backend, frontend, bancos de dados, até monitoramento e automação. Tenho experiência em criar soluções completas e escaláveis que atendem às necessidades de clientes e empresas. Minha abordagem integra desenvolvimento de alta qualidade com práticas modernas de DevOps e monitoramento para garantir o desempenho e a confiabilidade das aplicações.

## **Áreas de Atuação**

- **Backend:** Domínio em **TypeScript**, **Java** e **PHP**, com ampla experiência nos principais frameworks como **NestJS**, **Spring Boot** e **Laravel**.
- **Frontend:** Desenvolvimento de interfaces modernas e responsivas com **React** e aplicativos móveis utilizando **React Native**.
- **Bancos de Dados:** Conhecimento avançado em **MongoDB**, **Redis**, **MySQL**, **PostgreSQL** e **SQLite**, com foco em desempenho e integração eficiente.
- **Mensageria e Log:** Integração de sistemas usando **RabbitMQ**, **Kafka** e **Elasticsearch**, garantindo comunicação robusta e análise eficiente de logs.
- **Monitoramento e Observabilidade:** Experiência em implementar soluções de monitoramento com **Prometheus**, **Grafana** e **Zabbix**, garantindo métricas precisas e visibilidade do sistema.
- **DevOps e Automação:** Automação e gerenciamento de pipelines CI/CD com **Jenkins**, **Kubernetes**, **Docker**, e **GitHub/GitLab Actions**, entregando aplicações de forma ágil e confiável.
- **Testes:** Desenvolvimento orientado a testes com foco na validação de funcionalidades, garantindo a qualidade do software.
- **Controle de Versão:** Proficiência no uso de **Git**, incluindo **GitHub** e **GitLab**, com práticas avançadas de branching e integração contínua.

## **Diferenciais**
- **Sistemas Operacionais:** Conhecimento avançado em **Linux**, incluindo configuração, administração e otimização para ambientes de desenvolvimento e produção.
- **Documentação e Requisitos:** Habilidade para elaborar e manter documentação técnica clara e objetiva, além de transformar requisitos em soluções práticas.
- **Experiência Holística:** Capacidade de integrar UX design, monitoramento e práticas de DevOps para entregar projetos completos e bem alinhados às expectativas dos stakeholders.

Se você busca um profissional confiável e multidisciplinar para criar soluções completas e escaláveis, que unem inovação, qualidade e eficiência, estou pronto para colaborar. **Vamos transformar ideias em realidade!**`
        },
        roles: {
            title: 'Areas of Expertise',
            frontend: {
                title: 'Frontend Development',
                description: 'Crafting beautiful and responsive user interfaces using modern web technologies.',
            },
            backend: {
                title: 'Backend Development',
                description: 'Building robust and scalable server-side applications and APIs.',
            },
            design: {
                title: 'UI/UX Design',
                description: 'Creating intuitive and engaging user experiences.',
            },
            devops: {
                title: 'DevOps',
                description: 'Automating and optimizing development and deployment processes.',
            },
            database: {
                title: 'Database Administration',
                description: 'Managing and optimizing databases for high performance.',
            },
            observability: {
                title: 'Observability',
                description: 'Monitoring and ensuring system visibility for better performance.',
            },
            tester: {
                title: 'Software Testing',
                description: 'Ensuring software quality through rigorous testing.',
            },
            business_requirements: {
                title: 'Business Requirements',
                description: 'Transforming business requirements into practical and efficient solutions.',
            },
            documentation_teaching: {
                title: 'Documentation and Teaching',
                description: 'Creating clear and concise technical documentation and providing training.',
            },
            customer_support: {
                title: 'Customer Support',
                description: 'Providing technical support and customer service.',
            },
            security: {
                title: 'Security',
                description: 'Ensuring the security of applications and data.',
            },
            project_management: {
                title: 'Project Management',
                description: 'Planning and managing projects to ensure successful deliveries.',
            },
        },
        skills: {
            title: 'Skills',
            categories: {
                languages: 'Languages',
                frameworks: 'Frameworks',
                databases: 'Databases',
                devops: 'DevOps',
                others: 'Others',
            },
        },
        projects: {
            title: 'My Projects',
            viewCode: 'Code',
            viewDemo: 'Demo',
            viewBlogPost: 'View Post',
        },
        blog: {
            title: 'Blog',
            readMore: 'Read More',
        },
        contact: {
            title: 'Get In Touch',
            info: 'Contact Information',
            form: {
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send Message',
            },
        },
        footer: {
            allRightsReserved: 'All rights reserved.',
            builtWithDedication: 'Built with dedication and hard work',
        },
    },
} as const;
