import { renderProse } from '@/lib/svg';

type Props = {
  html: string;
  className?: string;
};

export function Prose({ html, className }: Props) {
  if (!html) return null;
  const rendered = renderProse(html);
  return (
    <div
      className={className ?? 'prose'}
      dangerouslySetInnerHTML={{ __html: rendered }}
    />
  );
}
