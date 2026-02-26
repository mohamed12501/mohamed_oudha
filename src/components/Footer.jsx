import { FiGithub, FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="border-t border-border py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                    <p className="text-sm text-text-secondary">
                        Mohamed Oudha © {new Date().getFullYear()}
                    </p>
                    <p className="text-xs text-text-secondary/60">
                        Built with React · Tailwind · Framer Motion · Algiers, Algeria
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/mohamed12501"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <FiGithub className="text-lg" />
                    </a>
                    <a
                        href="mailto:mohamedoudha82@gmail.com"
                        className="text-text-secondary hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <FiMail className="text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
