import { motion } from 'framer-motion';

const categories = [
    {
        title: 'Mobile Development',
        icon: '📱',
        tags: ['Flutter', 'Android', 'Dart'],
    },
    {
        title: 'Backend & Web',
        icon: '⚙️',
        tags: ['Laravel', 'Node.js', 'Express.js', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        tags: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
    },
    {
        title: 'Automation & AI',
        icon: '🤖',
        tags: [
            'N8N', 'Groq (LLaMA-3.3)', 'Google Gemini', 'Kie.ai', 'Pollinations.ai',
            'Instagram Graph API', 'Facebook Graph API', 'Telegram Bot API',
            'Webhook Automation', 'AI Agents',
        ],
    },
    {
        title: 'Tools',
        icon: '🛠️',
        tags: ['Git', 'GitHub', 'Postman', 'REST APIs'],
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

const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, delay: i * 0.04 },
    }),
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    What I <span className="gradient-text">Work With</span>
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-text-secondary text-center mb-16 max-w-xl mx-auto"
                >
                    Technologies and tools I use to bring ideas to life
                </motion.p>

                {/* Skill category cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {categories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.title}
                            custom={catIdx}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group"
                        >
                            <div className="text-3xl mb-3">{cat.icon}</div>
                            <h3 className="text-lg font-semibold text-text mb-4 group-hover:text-primary transition-colors">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.tags.map((tag, tagIdx) => (
                                    <motion.span
                                        key={tag}
                                        custom={tagIdx}
                                        variants={tagVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-primary/30 bg-primary/5 text-primary/90 hover:bg-primary/15 hover:border-primary/60 transition-all cursor-default"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* N8N Banner */}
                <motion.div
                    variants={fadeUp}
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-6 border-secondary/30 bg-secondary/5 text-center"
                >
                    <div className="text-2xl mb-2">⚡</div>
                    <h3 className="text-lg font-bold text-secondary mb-2">
                        N8N Automation — Intermediate to Expert Level
                    </h3>
                    <p className="text-text-secondary text-sm max-w-2xl mx-auto">
                        Building end-to-end AI workflows: content generation → media creation → social publishing → zero human touch
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
