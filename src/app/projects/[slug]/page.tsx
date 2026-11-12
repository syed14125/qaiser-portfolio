import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, CircleCheck, Info } from 'lucide-react';
import { Github } from '@/components/brand-icons';
import { projects } from '@/data/portfolio';
import { Artwork, Contact, Tags } from '@/components/ui';

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return { title: 'Project not found' };
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  return { title: project.title, description: project.summary, ...(siteUrl ? { alternates: { canonical: `/projects/${slug}/` } } : {}), openGraph: { title: project.title, description: project.summary, type: 'article', ...(siteUrl ? { url: `/projects/${slug}/`, images: [{ url: project.image, width: 1280, height: 853, alt: project.imageAlt }] } : {}) }, twitter: { card: siteUrl ? 'summary_large_image' : 'summary', title: project.title, description: project.summary, ...(siteUrl ? { images: [project.image] } : {}) } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex(p => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  return <main id="main"><div className="container detail-container"><Link href="/#projects" className="back-link"><ArrowLeft size={17} aria-hidden="true" />All projects</Link><header className="detail-header"><p className="eyebrow">PROJECT 0{index + 1}<span className="detail-category">{project.category}</span>{project.status && <span className="status-pill">{project.status}</span>}</p><h1>{project.title}</h1><p>{project.tagline}</p><div className="detail-header-bottom"><Tags items={project.technologies} />{project.repository && <a className="button button-outline" href={project.repository} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" />View Repository<ArrowUpRight size={15} aria-hidden="true" /></a>}</div></header><figure className="detail-visual"><Artwork project={project} priority /><figcaption>Original concept artwork · Not an application screenshot</figcaption></figure><div className="detail-content"><aside className="detail-toc"><p className="eyebrow">ON THIS PAGE</p><nav aria-label="Project contents"><a href="#overview">Overview</a><a href="#purpose">Problem & purpose</a><a href="#capabilities">Verified capabilities</a><a href="#approach">Technical approach</a><a href="#technologies">Technologies</a></nav></aside><div className="detail-prose"><section id="overview"><p className="eyebrow">01 / OVERVIEW</p><h2>{project.status ? 'A project in development.' : 'The project at a glance.'}</h2><p>{project.overview}</p></section><section id="purpose"><p className="eyebrow">02 / PROBLEM & PURPOSE</p><h2>Why this project?</h2><p>{project.problem}</p></section><section id="capabilities"><p className="eyebrow">03 / VERIFIED CAPABILITIES</p><h2>What is established.</h2><ul className="capability-list">{project.capabilities.map(item => <li key={item}><CircleCheck size={19} aria-hidden="true" /><span>{item}</span></li>)}</ul></section><section id="approach"><p className="eyebrow">04 / TECHNICAL APPROACH</p><h2>How the pieces fit.</h2>{project.approach.map(item => <div key={item.title} className="approach-item"><h3>{item.title}</h3><p>{item.description}</p></div>)}</section><section id="technologies"><p className="eyebrow">05 / TECHNOLOGIES</p><h2>The project toolkit.</h2><Tags items={project.technologies} /></section><aside className="project-boundary"><Info size={20} aria-hidden="true" /><div><h3>Scope & interpretation</h3><p>{project.boundary}</p></div></aside></div></div><div className="detail-next"><Link href="/#projects" className="back-link"><ArrowLeft size={17} aria-hidden="true" />Back to all projects</Link><Link href={`/projects/${nextProject.slug}/`} className="next-project"><span>EXPLORE NEXT<strong>{nextProject.title}</strong></span><ArrowRight size={25} aria-hidden="true" /></Link></div></div><Contact /></main>;
}
