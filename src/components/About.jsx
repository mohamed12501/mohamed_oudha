import { motion } from 'framer-motion';

const stats = [
    { value: '5+', label: 'Apps Shipped' },
    { value: '4', label: 'Workflows Built' },
    { value: '2', label: 'Events Organized' },
    { value: '🥇', label: '1st Place' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
};

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Photo + Stats */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="flex flex-col items-center"
                    >
                        {/* Photo placeholder */}
                        <div className="relative mb-8">
                            <div className="w-48 h-48 rounded-full bg-surface border-2 border-primary/50 glow flex items-center justify-center">
                                <span className="text-5xl font-bold gradient-text">MO</span>
                            </div>
                            <div className="absolute inset-0 rounded-full border border-primary/20 scale-110" />
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    custom={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="glass rounded-xl p-4 text-center hover:border-primary/50 transition-colors"
                                >
                                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-xs text-text-secondary">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Bio text */}
                    <motion.div
                        variants={fadeUp}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            I'm a Computer Science student at <span className="text-text font-medium">UMBB Boumerdes</span> (Bachelor's degree, graduating 2025), specializing in Software Engineering & Databases. I build production-ready mobile apps with <span className="text-primary font-medium">Flutter</span> and <span className="text-primary font-medium">Laravel</span>, design robust backend APIs, and create intelligent automation workflows with <span className="text-secondary font-medium">N8N</span> that connect AI models, social media platforms, and third-party services.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            Organizer in Boumerdes Smart City Hackathon, co-organized an international tech event, and shipped real apps used by real people — including the official app of the <span className="text-text font-medium">Algiers International Film Festival</span>.
                        </p>
                        <p className="text-xl font-semibold text-text">
                            I don't just write code. I solve problems end-to-end.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
