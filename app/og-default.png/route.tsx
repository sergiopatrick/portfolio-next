import { ImageResponse } from 'next/og';
import { siteOptions } from '@/content/site';

// Default social card (1200x630). Pages without their own image share it.
export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0a0a0a',
          color: '#fafafa',
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 4, textTransform: 'uppercase', color: '#a3a3a3' }}>
          sergiopatrick.com.br
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{siteOptions.hero_title}</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, color: '#a3a3a3' }}>
            {siteOptions.hero_title_tail}
          </div>
        </div>
        <div style={{ fontSize: 34, color: '#d4d4d4' }}>
          Sérgio Patrick · +105% QConcursos · +61% Cora · +32% Unilever
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
