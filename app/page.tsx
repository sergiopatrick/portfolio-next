import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ResultsStrip } from '@/components/home/ResultsStrip';
import { Brands } from '@/components/home/Brands';
import { Manifesto } from '@/components/home/Manifesto';
import { ServicesTeaser } from '@/components/home/ServicesTeaser';
import { SelectedWork } from '@/components/home/SelectedWork';
import { Process } from '@/components/home/Process';
import { AboutPreview } from '@/components/home/AboutPreview';
import { LatestPosts } from '@/components/home/LatestPosts';
import { ContactCta } from '@/components/home/ContactCta';
import { HomeEffects } from '@/components/home/HomeEffects';
import { FaqSection } from '@/components/ui/Faq';
import { JsonLd } from '@/components/ui/JsonLd';
import {
  buildMetadata,
  personSchema,
  professionalServiceSchema,
  faqPageSchema,
} from '@/lib/seo';
import { siteOptions } from '@/content/site';
import type { Faq } from '@/content/types';
import '@/app/styles/home.css';

export const metadata: Metadata = buildMetadata({
  title: { absolute: siteOptions.home_seo_title },
  description: siteOptions.home_seo_description,
  path: '/',
  keywords: siteOptions.home_keywords,
});

const HOME_FAQS: Faq[] = [
  {
    q: 'O que faz um consultor de SEO técnico e GEO?',
    a: 'Ele encontra o que impede o site de ser rastreado, indexado e escolhido pelo Google, e o que impede as IAs de citarem a marca. Depois monta o plano e acompanha o resultado. No meu caso, eu também escrevo o código da correção.',
  },
  {
    q: 'Qual a diferença entre contratar um consultor e uma agência de SEO?',
    a: 'Com um consultor você fala direto com quem faz o diagnóstico e a implementação, sem gerente de conta no meio. A agência costuma ter mais gente para produção de conteúdo em volume. Muitas empresas usam os dois, com o consultor cuidando da parte técnica.',
  },
  {
    q: 'Em quanto tempo o SEO técnico dá resultado?',
    a: 'Correções de indexação e de Core Web Vitals aparecem em 2 a 6 semanas. Ganhos de arquitetura e link interno levam de 2 a 4 meses. Eu não prometo primeira posição em prazo nenhum, porque ninguém controla o Google.',
  },
  {
    q: 'Você atende empresas de fora de Salvador?',
    a: 'Sim. Trabalho remoto com empresas do Brasil inteiro e atendo em português e inglês.',
  },
  {
    q: 'Como começa um projeto?',
    a: 'Você me manda o contexto pelo WhatsApp ou por e-mail. Eu olho o site e o Search Console, se tiver acesso, e respondo em até 48 horas úteis com o que eu faria primeiro e o formato de contratação.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[personSchema(), professionalServiceSchema(), faqPageSchema(HOME_FAQS)]} />
      <Hero />
      <ResultsStrip />
      <Brands />
      <Manifesto />
      <ServicesTeaser />
      <SelectedWork />
      <Process />
      <AboutPreview />
      <LatestPosts />
      <FaqSection faqs={HOME_FAQS} kicker="Perguntas" title="Perguntas sobre a consultoria" />
      <ContactCta />
      <HomeEffects />
    </>
  );
}
