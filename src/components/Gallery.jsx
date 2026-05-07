import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const galleryItems = [
    {
        src: encodeURI('/work.jpeg'),
        title: 'Building in Focus',
        subtitle: 'Architecting full-stack solutions across mobile, backend, and automation',
        accent: 'from-secondary/70 to-cyan-400/70',
        span: 'lg:col-span-5 lg:row-span-2 sm:col-span-2 sm:row-span-1',
    },
    {
        src: encodeURI('/hackathon particpating.JPG'),
        title: 'ForsaTic Algerie Telecom Hackathon',
        subtitle: 'Competing in large-scale innovation challenges',
        accent: 'from-gold/70 to-orange-400/70',
        span: 'lg:col-span-6 lg:row-span-2 sm:col-span-2 sm:row-span-1',
    },
     {
        src: encodeURI('/orgnize.jpg'),
        title: 'Event Coordination',
        subtitle: 'Bringing teams and ideas together at scale',
        accent: 'from-fuchsia-400/70 to-secondary/70',
        span: 'lg:col-span-7 lg:row-span-2 sm:col-span-2 sm:row-span-1',
    },
    {
        src: encodeURI('/mentoring.jpg'),
        title: 'Mentoring the Next Generation',
        subtitle: 'Sharing knowledge and guiding emerging developers',
        accent: 'from-emerald-400/70 to-primary/70',
        span: 'lg:col-span-5 lg:row-span-2 sm:col-span-2 sm:row-span-1',
    },
   
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
    }),
};

function GalleryCard({ item, index }) {
    const [failed, setFailed] = useState(false);

    return (
        <motion.figure
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className={`group relative overflow-hidden rounded-3xl glass border border-border/70 shadow-2xl shadow-black/20 ${item.span}`}
        >
            <div className="absolute inset-0">
                {!failed ? (
                    <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        onError={() => setFailed(true)}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${item.accent} p-6 flex items-end`}>
                        <div>
                            <div className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">Photo</div>
                            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="text-white/80 text-sm mt-2">{item.subtitle}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />

            <figcaption className="relative z-10 p-5 flex h-full flex-col justify-end">
                <div className="mb-3 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Moment
                </div>
                <div className="flex items-end justify-between gap-3">
                    <div>
                        <h3 className="text-xl font-semibold text-white leading-tight">{item.title}</h3>
                        <p className="text-sm text-white/70 mt-1">{item.subtitle}</p>
                    </div>
                    <FiArrowUpRight className="text-white/70 text-lg shrink-0" />
                </div>
            </figcaption>
        </motion.figure>
    );
}

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <p className="text-xs uppercase tracking-[0.35em] text-secondary mb-3">In the Field</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">Behind the Work</span>
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                        Real moments from the projects, teams, and events that drive my work—building, mentoring, organizing, and shipping solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[180px] lg:auto-rows-[200px]">
                    {galleryItems.map((item, index) => (
                        <GalleryCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
