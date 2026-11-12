import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Download, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './brand-icons';
import { profile, type Project } from '@/data/portfolio';

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> {label}</p><h2>{title}</h2></div>{children && <div className="section-intro">{children}</div>}</div>;
}

export function Tags({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export function Artwork({ project, priority = false, className = '' }: { project: Project; priority?: boolean; className?: string }) {
  return <Image src={project.image} alt={project.imageAlt} width={1280} height={853} priority={priority} className={`project-image ${className}`} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 40vw" />;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card">
    <Link href={`/projects/${project.slug}/`} className="card-image-link" aria-label={`Explore ${project.title}`}><Artwork project={project} /><span className="image-corner"><ArrowUpRight size={20} aria-hidden="true" /></span></Link>
    <div className="card-content"><div className="card-meta"><span>{project.category}</span><span>{project.status || `0${index + 1}`}</span></div>
      <h3><Link href={`/projects/${project.slug}/`}>{project.title}</Link></h3><p>{project.summary}</p><Tags items={project.technologies} />
      <div className="card-links"><Link href={`/projects/${project.slug}/`}>Explore Project <ArrowUpRight size={15} aria-hidden="true" /></Link>{project.repository && <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub (opens in a new tab)`}><Github size={17} aria-hidden="true" /><span>GitHub</span></a>}</div>
    </div>
  </article>;
}

export function Contact() {
  return <section id="contact" className="contact-section"><div className="container contact-inner">
    <div><p className="eyebrow"><span>07</span> GET IN TOUCH</p><h2>Have an AI challenge?<br /><span>Let’s work on it.</span></h2><p>For AI/ML opportunities, research conversations and practical ideas.</p><p className="location"><MapPin size={16} aria-hidden="true" />{profile.location}</p></div>
    <div className="contact-actions"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={26} aria-hidden="true" /></a><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" />GitHub<ArrowUpRight size={14} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} aria-hidden="true" />LinkedIn<ArrowUpRight size={14} aria-hidden="true" /></a></div><a href={profile.cv} download className="cv-link"><Download size={17} aria-hidden="true" />Download CV <span>PDF</span></a></div>
  </div></section>;
}

export function Footer() {
  return <footer className="footer container"><Link href="/" className="footer-name">{profile.shortName}<span>Machine Learning Engineer</span></Link><p>Built with curiosity. Grounded in research.</p><a href="#top" aria-label="Back to top">Back to top <ArrowUp size={15} aria-hidden="true" /></a></footer>;
}
