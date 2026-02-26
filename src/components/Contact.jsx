import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiCopy, FiCheck, FiExternalLink, FiSend } from 'react-icons/fi';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
};

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-surface border border-border hover:border-primary/50 text-text-secondary hover:text-primary transition-all cursor-pointer"
            aria-label="Copy"
        >
            {copied ? <FiCheck className="text-success" /> : <FiCopy />}
        </button>
    );
}

const contactCards = [
    {
        icon: <FiMail className="text-2xl" />,
        label: 'Email',
        value: 'mohamedoudha82@gmail.com',
        action: 'copy',
    },
    {
        icon: <FiPhone className="text-2xl" />,
        label: 'Phone',
        value: '+213 664 842 015',
        action: 'copy',
    },
    {
        icon: <FiGithub className="text-2xl" />,
        label: 'GitHub',
        value: 'github.com/mohamed12501',
        link: 'https://github.com/mohamed12501',
        action: 'link',
    },
];

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setStatus('sending');
        setError('');

        const { name, email, phone, message } = formState;

        fetch("https://formcarry.com/s/YrbE8tInqo7", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, phone, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    setStatus('sent');
                    setFormState({ name: '', email: '', phone: '', message: '' });
                    setTimeout(() => setStatus('idle'), 4000);
                } else {
                    setStatus('error');
                    setError(response.message || 'Something went wrong. Please try again.');
                }
            })
            .catch(err => {
                setStatus('error');
                setError(err.message ? err.message : 'Network error. Please try again.');
            });
    };

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    Let's <span className="gradient-text">Build Something</span>
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-text-secondary text-center mb-12 max-w-xl mx-auto"
                >
                    Available for freelance projects, collaborations, and full-time opportunities.
                </motion.p>

                {/* Contact cards */}
                <div className="grid sm:grid-cols-3 gap-4 mb-12">
                    {contactCards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            custom={i + 2}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-all"
                        >
                            <div className="text-primary">{card.icon}</div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-text-secondary mb-0.5">{card.label}</p>
                                <p className="text-sm text-text font-medium truncate">{card.value}</p>
                            </div>
                            {card.action === 'copy' && <CopyButton text={card.value} />}
                            {card.action === 'link' && (
                                <a
                                    href={card.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-surface border border-border hover:border-primary/50 text-text-secondary hover:text-primary transition-all"
                                    aria-label="Open"
                                >
                                    <FiExternalLink />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Contact form */}
                <motion.form
                    onSubmit={handleSubmit}
                    variants={fadeUp}
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8"
                >
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm text-text-secondary mb-2" htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors text-sm"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-text-secondary mb-2" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors text-sm"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-text-secondary mb-2" htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors text-sm"
                            placeholder="Your phone number"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm text-text-secondary mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors text-sm resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    {error && (
                        <p className="text-red-400 text-sm mb-4">{error}</p>
                    )}
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border-none disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {status === 'sending' ? (
                            <>Sending...</>
                        ) : status === 'sent' ? (
                            <>Sent! <FiCheck /></>
                        ) : (
                            <>Send Message <FiSend /></>
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
