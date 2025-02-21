// env.d.ts
interface ImportMetaEnv {
  readonly VITE_BLOG_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
