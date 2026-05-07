import { motion } from 'framer-motion';

const stats = [
    { value: '7', label: 'Systems Shipped', subtitle: 'mobile · desktop · backend' },
    { value: '5+', label: 'Workflows Built' },
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
                        {/* Profile photo */}
                        <div className="relative mb-8">
                            <div className="w-52 h-52 rounded-[2rem] overflow-hidden border border-primary/40 glow bg-surface shadow-2xl shadow-black/30">
                                <img
                                    src={encodeURI('/work.jpeg')}
                                    alt="Mohamed Oudha portrait"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <div className="absolute -inset-2 rounded-[2rem] border border-primary/20" />
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
                                    {stat.subtitle && <div className="text-[10px] text-text-secondary/70 mt-1 font-medium">{stat.subtitle}</div>}
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
                            I don't just build apps — I architect full-stack systems. Each project I ship includes a mobile client, a desktop or web admin panel, and a shared <span className="text-primary font-medium">Laravel</span> backend. Three complete systems delivered end-to-end.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
