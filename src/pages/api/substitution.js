// Serverless endpoint behind the "Request Substitution" page.
// Sends a branded Product Substitution Request package to the recipient,
// copies the sender, and BCCs the CureWood inbox so every scan is a captured lead.
//
// Requires env var RESEND_API_KEY (set in Vercel). Optional overrides:
//   SUBSTITUTION_FROM    — e.g. "CureWood Seamless <substitutions@curewood.co>"
//   SUBSTITUTION_NOTIFY  — internal address BCC'd on every request
export const prerender = false;

import { products } from '../../data/products.js';

const FROM = import.meta.env.SUBSTITUTION_FROM || 'CureWood Seamless <substitutions@technical.curewood.co>';
// Internal inboxes that get a copy + summary of every request. Comma-separate to add more.
const NOTIFY = (import.meta.env.SUBSTITUTION_NOTIFY || 'bmckinnon@curewood.co')
  .split(',').map((s) => s.trim()).filter(Boolean);
const SITE = 'https://www.curewood.co';

const ROLES = ['Engineer', 'Architect', 'Home-Owner', 'Builder', 'Other'];

const isEmail = (s) => typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Vercel injects approximate geo headers from the requester's IP — no browser prompt.
function readLocation(request) {
  const h = request.headers;
  const dec = (v) => { try { return v ? decodeURIComponent(v) : ''; } catch { return v || ''; } };
  const city = dec(h.get('x-vercel-ip-city'));
  const region = dec(h.get('x-vercel-ip-country-region'));
  const country = dec(h.get('x-vercel-ip-country'));
  const parts = [city, region, country].filter(Boolean);
  return parts.length ? parts.join(', ') : 'Unknown';
}

// Best-effort: fetch each hosted PDF and attach it. Never blocks the send — a
// failed fetch just drops that one attachment; the email still carries the links.
async function buildAttachments(docs) {
  const out = [];
  for (const doc of docs) {
    try {
      const res = await fetch(SITE + doc.href);
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      out.push({ filename: doc.href.split('/').pop(), content: buf.toString('base64') });
    } catch {
      /* skip this attachment, keep going */
    }
  }
  return out;
}

function recipientEmail({ product, recipientName, senderName, senderCompany, role, docs }) {
  const p = products[product];
  const greeting = recipientName ? `Hello ${esc(recipientName)},` : 'Hello,';
  const senderLine = senderCompany
    ? `${esc(senderName)}, of ${esc(senderCompany)},`
    : `${esc(senderName)}`;
  const docLinks = docs.length
    ? docs.map((d) => `<li style="margin:0 0 8px"><a href="${SITE}${d.href}" style="color:#D4451F;text-decoration:none">${esc(d.label)} &rarr;</a></li>`).join('')
    : `<li style="margin:0 0 8px"><a href="${SITE}/technical" style="color:#D4451F;text-decoration:none">Technical data &rarr;</a></li>`;

  const summary = p.substitutionSummary || `a one-piece, engineered hollow-core ${esc(p.species)} member`;
  // Only QAI-certified products (Fascia Post — CERUS-1064) may reference code evaluation.
  const review = p.qaiCertified
    ? 'For load-bearing vertical applications, please review the enclosed structural data and code evaluation (QAI Report CERUS-1064, NDS 2024) to confirm suitability for your design.'
    : 'Please review the enclosed product information, installation guidance, and warranty to evaluate it for your application.';

  return `<!doctype html><html><body style="margin:0;background:#FAFAF7;font-family:Inter,Helvetica,Arial,sans-serif;color:#0A0A0A">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px">
    <div style="font-size:22px;font-weight:600;letter-spacing:-0.03em">SEAMLESS<span style="color:#D4451F">&trade;</span></div>
    <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#888;margin-top:4px">Product Substitution Request &middot; by CureWood</div>

    <div style="border-top:2px solid #0A0A0A;margin:24px 0"></div>

    <p style="font-size:16px;line-height:1.6;margin:0 0 16px">${greeting}</p>
    <p style="font-size:15px;line-height:1.65;color:#222;margin:0 0 16px">
      Attached is a product information package to support a request to substitute the
      <strong>${esc(p.name)}</strong> by CureWood into a current or upcoming project.
      ${senderLine} has identified this engineered wood product as a way to increase speed of
      construction and reduce cost, while meeting the structural and aesthetic intent
      of the specified material.
    </p>
    <p style="font-size:15px;line-height:1.65;color:#222;margin:0 0 16px">
      The ${esc(p.name)} is ${summary}. ${review}
    </p>

    <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#888;margin:24px 0 10px">Enclosed &amp; linked</div>
    <ul style="font-size:15px;line-height:1.5;padding-left:18px;margin:0 0 20px">${docLinks}</ul>

    <div style="background:#fff;border:1px solid #D4D2CC;padding:16px 18px;margin:0 0 20px">
      <div style="font-size:13px;color:#444;line-height:1.55">
        Final substitution approval rests with the Engineer of Record, specifier, and/or the
        Authority Having Jurisdiction. The enclosed indications are provided to support that
        evaluation and do not constitute a project-specific structural design.
      </div>
    </div>

    <p style="font-size:15px;line-height:1.65;color:#222;margin:0 0 24px">
      We'd welcome the opportunity to support your review &mdash; simply reply to this email to reach
      ${esc(senderName)} and the CureWood technical team.
    </p>

    <div style="border-top:1px solid #D4D2CC;padding-top:16px;font-size:12px;color:#888;line-height:1.6">
      CureWood Engineered Building Products &middot; Vancouver, BC<br>
      <a href="${SITE}" style="color:#888">www.curewood.co</a> &middot;
      <a href="mailto:technical@curewood.co" style="color:#888">technical@curewood.co</a>
    </div>
  </div>
</body></html>`;
}

function notifyEmail(data, location) {
  const rows = [
    ['Product', products[data.product]?.name || data.product],
    ['Sent to', `${data.recipientName || '—'} <${data.recipient}>`],
    ['Their role', data.role],
    ['From (sender)', `${data.senderName} <${data.sender}>`],
    ['Sender company', data.senderCompany || '—'],
    ['Scanned near', location],
  ];
  const body = rows
    .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#888;font-size:13px">${esc(k)}</td><td style="padding:6px 0;font-size:14px">${esc(v)}</td></tr>`)
    .join('');
  return `<!doctype html><html><body style="font-family:Inter,Helvetica,Arial,sans-serif;color:#0A0A0A;padding:24px">
    <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#888">New substitution request</div>
    <h2 style="font-size:20px;margin:6px 0 16px">A spec package was just sent</h2>
    <table style="border-collapse:collapse">${body}</table>
  </body></html>`;
}

export async function POST({ request }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  // Honeypot — bots fill hidden fields. Pretend success, send nothing.
  if (data.company_url) return json(200, { ok: true });

  const recipient = (data.recipient || '').trim();
  const sender = (data.sender || '').trim();
  const senderName = (data.senderName || '').trim();
  const role = (data.role || '').trim();
  const product = (data.product || '').trim();

  if (!isEmail(recipient)) return json(400, { error: 'Please enter a valid recipient email address.' });
  if (!isEmail(sender)) return json(400, { error: 'Please enter your valid email address.' });
  if (!senderName) return json(400, { error: 'Please enter your name.' });
  if (!ROLES.includes(role)) return json(400, { error: 'Please choose a role.' });
  if (!products[product]) return json(400, { error: 'Please choose a product.' });

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — cannot send substitution email.');
    return json(503, { error: 'Sending is not configured yet. Please email technical@curewood.co.' });
  }

  const clean = {
    recipient,
    recipientName: (data.recipientName || '').trim(),
    sender,
    senderName,
    senderCompany: (data.senderCompany || '').trim(),
    role,
    product,
  };
  const location = readLocation(request);
  const docs = products[product].documents || [];

  const attachments = await buildAttachments(docs);

  const payload = {
    from: FROM,
    to: [recipient],
    cc: [sender],
    bcc: NOTIFY,
    reply_to: sender,
    subject: `Product substitution request — ${products[product].name} (CureWood Seamless)`,
    html: recipientEmail({ ...clean, docs }),
    attachments,
  };

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend send failed:', res.status, detail);
      return json(502, { error: 'We could not send the package right now. Please try again shortly.' });
    }

    // Separate internal notification email so the lead capture is its own record.
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: NOTIFY,
        subject: `New substitution request — ${products[product].name}`,
        html: notifyEmail(clean, location),
      }),
    }).catch(() => { /* notification is non-critical */ });

    return json(200, { ok: true });
  } catch (err) {
    console.error('Substitution send error:', err);
    return json(500, { error: 'Something went wrong. Please try again shortly.' });
  }
}
