import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() { return <main id="main" className="container not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Let’s find the right direction.</h1><p>This page could not be found. Explore the portfolio and its six projects instead.</p><Link href="/#projects" className="button button-primary"><ArrowLeft size={17} aria-hidden="true" />Explore Projects</Link></main>; }
