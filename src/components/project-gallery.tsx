'use client';

import { useState } from 'react';
import { categories, projects, type Category } from '@/data/portfolio';
import { ProjectCard } from './ui';

export function ProjectGallery() {
  const [selected, setSelected] = useState<Category>('All projects');
  const filtered = selected === 'All projects' ? projects : projects.filter(p => p.category === selected);
  return <>
    <div className="filter-bar" role="group" aria-label="Filter projects by category">{categories.map(category => <button key={category} type="button" aria-pressed={selected === category} onClick={() => setSelected(category)} className="filter-button">{category}</button>)}</div>
    <p className="results-count" role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}{selected !== 'All projects' ? ` in ${selected}` : ' across research and applied AI'}</p>
    <div className="project-grid">{filtered.map(project => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />)}</div>
    <p className="artwork-note">Project visuals are original concept artwork, not application screenshots.</p>
  </>;
}
