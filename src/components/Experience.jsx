import { motion } from 'framer-motion';

const experiences = [
    {
        period: '2025 – Current',
        role: 'Freelancer Full-Stack App Developer',
        company: 'Self-Employed',
        desc: 'Building full-stack web and mobile applications for clients, from concept to deployment.',
    },
    {
        period: '2025 – Current',
        role: 'Flutter Mentor',
        company: 'Independent',
        desc: 'Guiding new Flutter developers, code reviews, best practices coaching.',
    },
    {
        period: 'Mar – May 2025',
        role: 'Backend Developer (Volunteer)',
        company: 'DevUp Student Club',
        desc: 'Built RESTful APIs with Express.js & MongoDB for club projects.',
    },
    {
        period: 'Jul – Oct 2024',
        role: 'Sales & Inventory',
        company: 'Dymapec & Bergim',
        desc: 'Sales operations and inventory management.',
    },
    {
        period: 'Jun – Sep 2023',
        role: 'Barista / Sales',
        company: 'Belara Coffee Shop',
        desc: 'Customer service and sales.',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
    }),
};

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    Experience & <span className="gradient-text">Journey</span>
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-text-secondary text-center mb-16 max-w-xl mx-auto"
                >
                    My professional path so far
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow z-10 mt-6" />

                            {/* Content */}
                            <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                <span className="inline-block px-3 py-1 text-xs font-mono font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-3">
                                    {exp.period}
                                </span>
                                <h3 className="text-lg font-semibold text-text mb-1">{exp.role}</h3>
                                <p className="text-sm text-secondary font-medium mb-2">{exp.company}</p>
                                <p className="text-sm text-text-secondary leading-relaxed">{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
