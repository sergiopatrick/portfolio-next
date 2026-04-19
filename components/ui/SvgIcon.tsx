import { iconSvg } from '@/lib/svg';

type Props = {
  name: 'arrow-right' | 'menu' | 'moon' | 'sun' | 'whatsapp';
  width?: number | string;
  height?: number | string;
  ariaHidden?: boolean;
  className?: string;
};

export function SvgIcon({ name, width, height, ariaHidden = true, className }: Props) {
  const attrs: Record<string, string | number> = {};
  if (width !== undefined) attrs.width = width;
  if (height !== undefined) attrs.height = height;
  if (ariaHidden) attrs['aria-hidden'] = 'true';
  if (className) attrs.class = className;
  const html = iconSvg(name, attrs);
  if (!html) return null;
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
