import { siteOptions } from '@/content/site';

export type WhatsappContext = 'default' | 'hero' | 'case' | 'cta' | 'contact';

const MESSAGES: Record<WhatsappContext, string> = {
  default: 'Oi Sérgio, vi teu portfolio e queria conversar.',
  hero: 'Oi Sérgio, vi teu portfolio e queria trocar uma ideia.',
  case: 'Oi Sérgio, li teu case e queria entender se faz sentido pra um projeto que tenho aqui.',
  cta: 'Oi Sérgio, vi teu portfolio e tenho um projeto pra te mostrar.',
  contact: 'Oi Sérgio, cheguei no portfolio e queria conversar sobre um projeto.',
};

export function whatsappDisplay(): string {
  return siteOptions.whatsapp;
}

export function whatsappE164(): string {
  const digits = whatsappDisplay().replace(/\D/g, '');
  if (!digits) return '';
  return digits.length <= 11 ? `55${digits}` : digits;
}

export function whatsappUrl(context: WhatsappContext = 'default'): string {
  const number = whatsappE164();
  if (!number) return '';
  const text = MESSAGES[context] ?? MESSAGES.default;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
