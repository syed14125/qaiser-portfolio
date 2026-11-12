import type { SVGProps } from 'react';
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

// Brand marks are kept local; general interface icons use Lucide.
export function Github({ size = 24, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.08c-3.12.68-3.78-1.33-3.78-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.49-.28-5.11-1.25-5.11-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.15a10.8 10.8 0 0 1 5.61 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.53.23 2.67.11 2.95.72.78 1.16 1.78 1.16 3 0 4.3-2.63 5.26-5.13 5.54.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" /></svg>;
}
export function Linkedin({ size = 24, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.7 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.1-.02-2.53-1.54-2.53-1.54 0-1.77 1.2-1.77 2.45v4.73H9.54V9.2h2.83v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.55 1.97 3.55 4.53v5.26Z" /></svg>;
}
