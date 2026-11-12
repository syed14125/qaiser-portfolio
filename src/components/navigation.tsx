'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/portfolio';

const links = [['Projects', '/#projects'], ['Research', '/#research'], ['Experience', '/#experience']] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return <header className="site-header">
    <div className="container nav-inner">
      <Link href="/" className="wordmark" aria-label={`${profile.name} — home`} onClick={() => setOpen(false)}>
        <span className="monogram">{profile.initials}<span>.</span></span>
        <span className="wordmark-label">QAISER BUKHARI<span>AI / MACHINE LEARNING</span></span>
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <a href={`mailto:${profile.email}`} className="nav-contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
      </nav>
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>Contact Me <ArrowUpRight size={16} aria-hidden="true" /></a>
    </nav>}
  </header>;
}
