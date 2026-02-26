import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiPhone, FiArrowDown } from 'react-icons/fi';

const titles = [
    'Full-Stack Developer',
    'Flutter & Laravel Engineer',
    'N8N Automation Expert',
    'AI Workflow Builder',
];

function TypewriterText() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = titles[titleIndex];
        let timeout;

        if (!deleting && charIndex < current.length) {
            timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
        } else if (!deleting && charIndex === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setTitleIndex((i) => (i + 1) % titles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, titleIndex]);

    return (
        <span className="text-secondary">
            {titles[titleIndex].slice(0, charIndex)}
            <span className="animate-pulse">|</span>
        </span>
    );
}

function ParticleBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient orbs */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary/15 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
        </div>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <ParticleBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side — Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <p className="text-text-secondary text-lg mb-2">Hi, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        <span className="gradient-text">Mohamed Oudha</span>
                    </h1>
                    <div className="text-xl md:text-2xl font-medium mb-6 h-8">
                        <TypewriterText />
                    </div>
                    <p className="text-text-secondary text-lg leading-relaxed max-w-xl mb-8">
                        I build mobile apps, backend systems, and AI-powered automation workflows that actually ship.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 no-underline"
                        >
                            View My Work <FiArrowDown className="text-lg" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary text-text-secondary hover:text-text font-medium rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 no-underline"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/mohamed12501" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-xl" aria-label="GitHub">
                            <FiGithub />
                        </a>
                        <a href="mailto:mohamedoudha82@gmail.com" className="text-text-secondary hover:text-primary transition-colors text-xl" aria-label="Email">
                            <FiMail />
                        </a>
                        <a href="tel:+213664842015" className="text-text-secondary hover:text-primary transition-colors text-xl" aria-label="Phone">
                            <FiPhone />
                        </a>
                    </div>
                </motion.div>

                {/* Right side — Animated visual */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-80 h-80">
                        {/* Floating N8N-style workflow mock */}
                        <div className="absolute inset-0 animate-float">
                            <svg viewBox="0 0 320 320" className="w-full h-full">
                                {/* Connection lines */}
                                <line x1="160" y1="60" x2="80" y2="160" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
                                <line x1="160" y1="60" x2="240" y2="160" stroke="#06b6d4" strokeWidth="2" opacity="0.4" />
                                <line x1="80" y1="160" x2="160" y2="260" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
                                <line x1="240" y1="160" x2="160" y2="260" stroke="#06b6d4" strokeWidth="2" opacity="0.4" />

                                {/* Nodes */}
                                <circle cx="160" cy="60" r="22" fill="#111118" stroke="#6366f1" strokeWidth="2" />
                                <text x="160" y="65" textAnchor="middle" fill="#6366f1" fontSize="18">⚡</text>

                                <circle cx="80" cy="160" r="22" fill="#111118" stroke="#06b6d4" strokeWidth="2" />
                                <text x="80" y="165" textAnchor="middle" fill="#06b6d4" fontSize="18">🤖</text>

                                <circle cx="240" cy="160" r="22" fill="#111118" stroke="#6366f1" strokeWidth="2" />
                                <text x="240" y="165" textAnchor="middle" fill="#6366f1" fontSize="18">📱</text>

                                <circle cx="160" cy="260" r="22" fill="#111118" stroke="#10b981" strokeWidth="2" />
                                <text x="160" y="265" textAnchor="middle" fill="#10b981" fontSize="18">🚀</text>

                                {/* Labels */}
                                <text x="160" y="28" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">INPUT</text>
                                <text x="30" y="165" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">AI</text>
                                <text x="290" y="165" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">APP</text>
                                <text x="160" y="300" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">DEPLOY</text>

                                {/* Animated data flow dots */}
                                <circle r="4" fill="#6366f1">
                                    <animateMotion dur="3s" repeatCount="indefinite" path="M160,60 L80,160 L160,260" />
                                </circle>
                                <circle r="4" fill="#06b6d4">
                                    <animateMotion dur="3s" repeatCount="indefinite" path="M160,60 L240,160 L160,260" begin="1.5s" />
                                </circle>
                            </svg>
                        </div>

                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full border border-primary/20 glow" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
