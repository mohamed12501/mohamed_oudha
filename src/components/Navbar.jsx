import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    
    { label: 'Contact', href: '#contact' },
    { label: 'In the Field', href: '#gallery' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i]);
                    return;
                }
            }
            setActiveSection('');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (href) => {
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tight">
                    <span className="gradient-text">MO</span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ label, href }) => (
                        <button
                            key={href}
                            onClick={() => handleClick(href)}
                            className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none ${activeSection === href.slice(1)
                                    ? 'text-primary'
                                    : 'text-text-secondary hover:text-text'
                                }`}
                        >
                            {label}
                            {activeSection === href.slice(1) && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-text-secondary hover:text-text transition-colors bg-transparent border-none cursor-pointer text-2xl"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-strong overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-3">
                            {navLinks.map(({ label, href }) => (
                                <button
                                    key={href}
                                    onClick={() => handleClick(href)}
                                    className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-colors bg-transparent border-none cursor-pointer ${activeSection === href.slice(1)
                                            ? 'text-primary bg-primary/10'
                                            : 'text-text-secondary hover:text-text hover:bg-white/5'
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
