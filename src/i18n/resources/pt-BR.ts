import { person } from "../../data/person";

export default {
    translation: {
        languages: {
            'pt-BR': 'Português Brasil',
        },
        navigation: {
            about: 'Sobre',
            projects: 'Projetos',
            blog: 'Blog',
            contact: 'Contato',
            roles: 'Atuação',
            skills: 'Habilidades',
        },
        home: {
            greeting: 'Olá, eu sou',
            role: person.role['pt-BR'],
            cta: 'Veja meus trabalhos',
            contact: 'Entre em contato',
            resume: 'Veja meu currículo',
        },
        about: {
            title: 'Sobre Mim',
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
            title: 'Áreas de Atuação',
            frontend: {
                title: 'Desenvolvimento Frontend',
                description: 'Criando interfaces de usuário bonitas e responsivas usando tecnologias web modernas.',
            },
            backend: {
                title: 'Desenvolvimento Backend',
                description: 'Construindo aplicações e APIs robustas e escaláveis.',
            },
            design: {
                title: 'Design UI/UX',
                description: 'Criando experiências de usuário intuitivas e envolventes.',
            },
            devops: {
                title: 'DevOps',
                description: 'Automatizando e otimizando processos de desenvolvimento e implantação.',
            },
            database: {
                title: 'Administração de Banco de Dados',
                description: 'Gerenciando e otimizando bancos de dados para alta performance.',
            },
            observability: {
                title: 'Observabilidade',
                description: 'Monitorando e garantindo a visibilidade do sistema para melhor desempenho.',
            },
            tester: {
                title: 'Testes de Software',
                description: 'Garantindo a qualidade do software através de testes rigorosos.',
            },
            business_requirements: {
                title: 'Requisitos de Negócio',
                description: 'Transformando requisitos de negócio em soluções práticas e eficientes.',
            },
            documentation_teaching: {
                title: 'Documentação e Ensino',
                description: 'Elaborando documentação técnica clara e objetiva e ministrando treinamentos.',
            },
            customer_support: {
                title: 'Suporte ao Cliente',
                description: 'Fornecendo suporte técnico e atendimento ao cliente.',
            },
            security: {
                title: 'Segurança',
                description: 'Garantindo a segurança das aplicações e dados.',
            },
            project_management: {
                title: 'Gerenciamento de Projetos',
                description: 'Planejando e gerenciando projetos para garantir entregas bem-sucedidas.',
            },
        },
        skills: {
            title: 'Habilidades',
            categories: {
                languages: 'Linguagens',
                frameworks: 'Frameworks',
                databases: 'Bancos de Dados',
                devops: 'DevOps',
                others: 'Outros',
            },
        },
        projects: {
            title: 'Meus Projetos',
            viewCode: 'Código',
            viewDemo: 'Demo',
            viewBlogPost: 'Ver Post',
        },
        blog: {
            title: 'Blog',
            readMore: 'Ler Mais',
        },
        contact: {
            title: 'Entre em Contato',
            info: 'Informações de Contato',
            form: {
                name: 'Nome',
                email: 'Email',
                message: 'Mensagem',
                send: 'Enviar Mensagem',
            },
        },
        footer: {
            allRightsReserved: 'Todos os direitos reservados.',
            builtWithDedication: 'Construído com dedicação e trabalho árduo',
        },
    },
} as const;
