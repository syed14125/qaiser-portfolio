import type { MetadataRoute } from 'next';
import { projects } from '@/data/portfolio';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  if (!url) return [];
  return [{ url: `${url}/`, changeFrequency: 'monthly', priority: 1 }, ...projects.map(p => ({ url: `${url}/projects/${p.slug}/`, changeFrequency: 'monthly' as const, priority: 0.8 }))];
}
