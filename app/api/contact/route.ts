import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'nodejs';

function redirectBack(origin: string, path: string, sent: string): NextResponse {
  const target = new URL(path, origin);
  target.searchParams.set('sp_sent', sent);
  return NextResponse.redirect(target, { status: 303 });
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const form = await req.formData();

  const referer = req.headers.get('referer');
  const origin = req.nextUrl.origin;
  const backPath = referer ? new URL(referer).pathname : '/contact/';

  // Honeypot — real users leave it empty
  if ((form.get('sp_website') as string)?.length) {
    return redirectBack(origin, backPath, '1');
  }

  const name = String(form.get('sp_name') ?? '').trim();
  const email = String(form.get('sp_email') ?? '').trim();
  const message = String(form.get('sp_message') ?? '').trim();

  if (!name || !isEmail(email) || !message) {
    return redirectBack(origin, backPath, 'invalid');
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // Dev mode: log and pretend it worked
    console.log('[contact form] missing Resend config — would have sent:', {
      name,
      email,
      message,
    });
    return redirectBack(origin, backPath, '1');
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `[Portfolio] ${name}`,
      replyTo: `${name} <${email}>`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });
    if (error) {
      console.error('[contact form] resend error:', error);
      return redirectBack(origin, backPath, '0');
    }
    return redirectBack(origin, backPath, '1');
  } catch (err) {
    console.error('[contact form] unexpected error:', err);
    return redirectBack(origin, backPath, '0');
  }
}
