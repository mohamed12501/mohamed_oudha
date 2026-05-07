import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiDownload } from 'react-icons/fi';

const projects = [
    {
        title: 'Saudi Scholarship Helper',
        desc: 'A high-performance scholarship discovery portal for Saudi university programs with advanced multi-select filtering, negative filters, and instant local search across large datasets.',
        stack: ['React 19', 'Vite', 'Tailwind CSS 4', 'Framer Motion', 'XLSX'],
        status: 'live',
        year: '2026',
        link: 'https://saudi-scholarships-helper16.netlify.app/',
        linkLabel: 'View Live App',
        isWorkflow: false,
        accent: '#f59e0b',
        flow: ['Large Dataset Import', 'Multi-Select Filters', 'Exclude Mode', 'None Logic Detection', 'Instant Results'],
    },
    {
        title: 'Algiers International Film Festival App',
        desc: 'The official mobile app of the AIFF. Covers festival events, schedules, workshops, investor networking, podcasts, multilingual support.',
        stack: ['Flutter', 'Laravel'],
        status: 'live',
        year: '2025',
        link: 'https://aiff.rsolution.dz/download/apk',
        linkLabel: 'Download APK',
        isWorkflow: false,
        accent: '#10b981',
        badge: 'Mobile + Admin Panel',
    },
    {
        title: 'Real Estate AI Content Engine',
        desc: 'Fully automated marketing pipeline. Takes a property brief, generates strategy via LLaMA-3.3, creates AI image + 6s video, writes caption, publishes to Instagram Reels & Facebook — zero human touch.',
        stack: ['N8N', 'Groq', 'Pollinations.ai', 'Kie.ai', 'Meta Graph API'],
        status: 'workflow',
        year: '2025',
        isWorkflow: true,
        accent: '#6366f1',
        flow: ['Property Brief', 'AI Strategy (Groq)', 'Image Gen + Video Gen', 'Caption Writer', 'Published to IG + FB'],
    },
    {
        title: 'Telegram Social Media Bot',
        desc: 'Operator sends voice note or text via Telegram → Gemini transcribes → AI decides image or video → content generated → preview for approval → published on confirmation.',
        stack: ['N8N', 'Telegram API', 'Gemini', 'Kie.ai', 'Instagram API'],
        status: 'workflow',
        year: '2025',
        isWorkflow: true,
        accent: '#6366f1',
        flow: ['Voice/Text Input', 'Gemini Transcribe', 'AI Content Decision', 'Preview & Approve', 'Social Publish'],
    },
    {
        title: 'Instagram Reels Discovery & Scraper',
        desc: 'Telegram-triggered tool: AI generates creative search queries → scrapes Reels via ScrapeCreators API → filters content → saves to Sheets → streams videos back.',
        stack: ['N8N', 'Groq', 'ScrapeCreators API', 'Google Sheets', 'Telegram'],
        status: 'workflow',
        year: '2025',
        isWorkflow: true,
        accent: '#6366f1',
        flow: ['Telegram Trigger', 'AI Query Gen', 'Scrape Reels', 'Filter & Sheets', 'Stream to User'],
    },
    {
        title: 'Instagram DM Auto-Responder',
        desc: 'Real-time DM handler for a real estate brand. Webhook-driven → Gemini AI agent trained on company projects → validates responses → professional replies with spam protection.',
        stack: ['N8N', 'Gemini', 'Webhook', 'Instagram Graph API'],
        status: 'workflow',
        year: '2025',
        isWorkflow: true,
        accent: '#6366f1',
        flow: ['Incoming DM', 'Webhook Route', 'Gemini Agent', 'Format Validate', 'Auto Reply'],
    },
    {
        title: 'Saudi Scholarship Scraper Workflow',
        desc: 'An n8n pipeline that crawls Saudi university institutions and program detail pages, extracts structured scholarship data, and syncs the results into Google Sheets for the portal dataset.',
        stack: ['n8n', 'JavaScript', 'HTTP Request', 'Google Sheets', 'Execute Workflow'],
        status: 'workflow',
        year: '2026',
        isWorkflow: true,
        accent: '#8b5cf6',
        flow: ['Institution List', 'Program URL Loop', 'Detail Page Parse', 'Append to Sheets', 'Reusable Sub-Workflow'],
    },
    {
        title: 'Dental Follow-Up WhatsApp Assistant',
        desc: 'A patient follow-up automation that drafts caring bilingual messages after clinic visits, looks up patient notes, and sends the final WhatsApp reply through an AI-assisted n8n flow.',
        stack: ['n8n', 'Groq', 'OpenRouter', 'WhatsApp API', 'Data Tables'],
        status: 'workflow',
        year: '2026',
        isWorkflow: true,
        accent: '#8b5cf6',
        flow: ['Webhook Trigger', 'Patient Lookup', 'LLM Draft', 'Send WhatsApp Reply', 'Batch Processing'],
    },
    {
        title: 'ANPC Legal Advisory App',
        desc: 'Helps Algerian citizens find verified lawyers and legal advisors. Admin panel for document verification at Wilaya offices.',
        stack: ['Flutter', 'Laravel'],
        status: 'built',
        year: '2025',
        isWorkflow: false,
        accent: '#06b6d4',
        link: 'http://anpcecom.dz/achkibih/',
        linkLabel: 'View App',
        badge: 'Full Ecosystem',
    },
    {
        title: 'Hani Services App',
        desc: 'Marketplace: stores publish offers, clients have QR codes, providers scan for access, Google Maps store discovery.',
        stack: ['Flutter', 'Laravel'],
        status: 'built',
        year: '2024',
        isWorkflow: false,
        accent: '#06b6d4',
        link: 'http://hani.anpcecom.dz/hani_app',
        linkLabel: 'View App',
        badge: 'Full Ecosystem',
    },
    {
        title: 'School Management System',
        desc: 'Teacher attendance, session scheduling, payment tracking, and analytics dashboard.',
        stack: ['Flutter'],
        status: 'built',
        year: '2024',
        isWorkflow: false,
        accent: '#06b6d4',
    },
    {
        title: 'Event Management Apps',
        desc: 'DevUp Check-In (QR-based) + A2I-25 international conference app for logistics & scheduling.',
        stack: ['Flutter', 'Express.js'],
        status: 'built',
        year: '2025',
        isWorkflow: false,
        accent: '#06b6d4',
    },
    {
        title: 'E-Commerce Website',
        desc: 'Product catalog, cart system, and order management.',
        stack: ['Express.js', 'Tailwind CSS'],
        status: 'built',
        year: '2024',
        isWorkflow: false,
        accent: '#06b6d4',
        link: 'https://ironbodies.netlify.app',
        linkLabel: 'View App',
    },
    {
        title: 'Note-Taking App',
        desc: 'CRUD with image uploads and JWT authentication.',
        stack: ['Express.js', 'HTML5', 'Tailwind CSS'],
        status: 'built',
        year: '2024',
        isWorkflow: false,
        accent: '#06b6d4',
    },
    {
        title: 'ClinicApp – Medical Practice Management System',
        desc: 'A Flutter-based clinic dashboard for managing patients, appointments, payments, chats, and prescription PDFs with secure authentication and real-time data flow.',
        stack: ['Flutter', 'Riverpod', 'Supabase', 'GoRouter', 'PDF Generation'],
        status: 'built',
        year: '2026',
        isWorkflow: false,
        accent: '#14b8a6',
        flow: ['Patient Records', 'Appointment Scheduling', 'Payments & Expenses', 'Chat & Notifications', 'PDF Documents'],
    },
];

const statusConfig = {
    live: { label: 'Live', color: 'bg-success/20 text-success border-success/30' },
    workflow: { label: 'Workflow', color: 'bg-primary/20 text-primary border-primary/30' },
    concept: { label: 'Concept', color: 'bg-text-secondary/20 text-text-secondary border-text-secondary/30' },
    built: { label: 'Built', color: 'bg-secondary/20 text-secondary border-secondary/30' },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.05, ease: 'easeOut' },
    }),
};

function WorkflowDiagram({ steps }) {
    return (
        <div className="flex flex-col gap-1 mt-4 border-t border-border/50 pt-4">
            {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-xs font-mono text-text-secondary">{step}</span>
                    {i < steps.length - 1 && (
                        <span className="text-primary/50 text-xs ml-auto">↓</span>
                    )}
                </div>
            ))}
        </div>
    );
}

function ProjectCard({ project, index }) {
    const status = statusConfig[project.status];

    return (
        <motion.div
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] flex flex-col"
        >
            {/* Accent bar */}
            <div className="h-1 w-full" style={{ backgroundColor: project.accent }} />

            <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                    </h3>
                    <span className={`shrink-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${status.color}`}>
                        {status.label}
                    </span>
                </div>

                {project.badge && (
                    <div className="mb-2 flex items-center gap-1">
                        <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 text-primary">
                            ✨ {project.badge}
                        </span>
                    </div>
                )}

                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {project.desc}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-md bg-surface border border-border text-text-secondary"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Workflow diagram */}
                {project.flow && <WorkflowDiagram steps={project.flow} />}

                {/* Link */}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors no-underline"
                    >
                        {project.linkLabel || 'View Project'}
                        {project.linkLabel?.includes('Download') ? <FiDownload /> : <FiExternalLink />}
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [tab, setTab] = useState('all');
    const filtered = tab === 'workflows'
        ? projects.filter((p) => p.isWorkflow)
        : projects;

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    What I've <span className="gradient-text">Built</span>
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-text-secondary text-center mb-10 max-w-xl mx-auto"
                >
                    From mobile apps to AI-powered automation workflows
                </motion.p>

                {/* Tabs */}
                <motion.div
                    variants={fadeUp}
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center gap-2 mb-12"
                >
                    {[
                        { key: 'all', label: 'All Projects' },
                        { key: 'workflows', label: '⚡ N8N Workflows' },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setTab(key)}
                            className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-200 border cursor-pointer ${tab === key
                                ? 'bg-primary text-white border-primary'
                                : 'bg-transparent text-text-secondary border-border hover:border-primary/50 hover:text-text'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </motion.div>

                {/* Cards grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={tab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((project, i) => (
                            <ProjectCard key={project.title} project={project} index={i} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
