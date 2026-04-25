import { person } from '../data/person';

export function Footer() {
  return (
    <footer className="py-6 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200/50 dark:border-neutral-700/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} {person.name}
        </p>
      </div>
    </footer>
  );
}
