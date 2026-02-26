import { motion } from 'framer-motion';

const achievements = [
    {
        icon: '🥇',
        title: 'AI Bootcamp — 1st Place',
        subtitle: 'Team TETA · March 2025',
        desc: 'Built an AI-powered outfit advisor. Won first place among all competing teams.',
        glowColor: 'rgba(245, 158, 11, 0.15)',
        borderColor: 'border-gold/30',
    },
    {
        icon: '🎯',
        title: 'Hackathon Organizer',
        subtitle: 'Boumerdes Smart City · Dec 2024',
        desc: 'Organized a full city-scale hackathon event.',
        glowColor: 'rgba(99, 102, 241, 0.15)',
        borderColor: 'border-primary/30',
    },
    {
        icon: '🌍',
        title: 'International Event Co-Organizer',
        subtitle: 'A2I-25 · 2025',
        desc: 'Co-organized an international tech conference.',
        glowColor: 'rgba(6, 182, 212, 0.15)',
        borderColor: 'border-secondary/30',
    },
    {
        icon: '🎓',
        title: 'NVIDIA AI Workshops',
        subtitle: 'Practical Training',
        desc: 'Practical AI/ML experience through official NVIDIA training.',
        glowColor: 'rgba(16, 185, 129, 0.15)',
        borderColor: 'border-success/30',
    },
    {
        icon: '🚀',
        title: 'Real World App Builder',
        subtitle: 'Full-Stack Development',
        desc: 'Designed and shipped production-ready web & mobile apps for real clients and businesses.',
        glowColor: 'rgba(239, 68, 68, 0.15)',
        borderColor: 'border-red-500/30',
    },
    {
        icon: '⚡',
        title: 'Automation Workflows',
        subtitle: 'N8N & Process Automation',
        desc: 'Built smart automation workflows to streamline business processes and boost productivity.',
        glowColor: 'rgba(168, 85, 247, 0.15)',
        borderColor: 'border-purple-500/30',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
};

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    <span className="gradient-text">Highlights</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {achievements.map((a, i) => (
                        <motion.div
                            key={a.title}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`glass rounded-2xl p-8 ${a.borderColor} hover:scale-[1.03] transition-transform duration-300 animate-float`}
                            style={{
                                boxShadow: `0 0 40px ${a.glowColor}`,
                                animationDelay: `${i * 0.5}s`,
                            }}
                        >
                            <div className="text-4xl mb-4">{a.icon}</div>
                            <h3 className="text-xl font-bold text-text mb-1">{a.title}</h3>
                            <p className="text-sm text-secondary font-medium mb-3">{a.subtitle}</p>
                            <p className="text-sm text-text-secondary leading-relaxed">{a.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
