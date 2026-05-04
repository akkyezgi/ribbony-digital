import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Ad soyad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^(\+90|0)?[5][0-9]{9}$/.test(val.replace(/\s/g, '')),
      'Geçerli bir telefon numarası giriniz',
    ),
  company: z.string().optional(),
  service: z.string().min(1, 'Lütfen bir hizmet seçiniz'),
  message: z.string().optional(),
});

type ContactPayload = z.infer<typeof contactSchema>;

function buildEmailHtml(data: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Yeni İletişim Formu Mesajı</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:#e13e90;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                Ribbony
              </p>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.85);">
                Yeni İletişim Formu Mesajı
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">

              <p style="margin:0 0 24px;font-size:16px;color:#3d3d3d;line-height:1.6;">
                Web sitesi iletişim formundan yeni bir mesaj alındı.
              </p>

              <!-- Info Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ebebeb;border-radius:12px;overflow:hidden;">
                ${buildRow('Ad Soyad', data.name)}
                ${buildRow('E-posta', `<a href="mailto:${data.email}" style="color:#e13e90;text-decoration:none;">${data.email}</a>`)}
                ${data.phone ? buildRow('Telefon', `<a href="tel:${data.phone}" style="color:#e13e90;text-decoration:none;">${data.phone}</a>`) : ''}
                ${data.company ? buildRow('Şirket', data.company) : ''}
                ${buildRow('İlgilenilen Hizmet', data.service)}
              </table>

              ${data.message ? `
              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td style="padding:20px;background:#fce8f3;border-radius:12px;border-left:4px solid #e13e90;">
                    <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#e13e90;text-transform:uppercase;letter-spacing:0.8px;">
                      Mesaj
                    </p>
                    <p style="margin:0;font-size:15px;color:#3d3d3d;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
                  </td>
                </tr>
              </table>` : ''}

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a
                      href="mailto:${data.email}"
                      style="display:inline-block;background:#e13e90;color:#ffffff;font-size:15px;font-weight:700;padding:14px 32px;border-radius:999px;text-decoration:none;"
                    >
                      Yanıtla
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #ebebeb;text-align:center;">
              <p style="margin:0;font-size:12px;color:#6b6b6b;">
                Bu e-posta ribbony.com iletişim formu aracılığıyla gönderilmiştir.
              </p>
              <p style="margin:6px 0 0;font-size:12px;color:#6b6b6b;">
                © ${new Date().getFullYear()} Ribbony. Tüm hakları saklıdır.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function buildRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:14px 20px;background:#f5f5f5;border-bottom:1px solid #ebebeb;font-size:12px;font-weight:700;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.6px;width:36%;white-space:nowrap;">
        ${label}
      </td>
      <td style="padding:14px 20px;border-bottom:1px solid #ebebeb;font-size:15px;color:#0f0f0f;">
        ${value}
      </td>
    </tr>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Geçersiz istek formatı.' },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validasyon hatası.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log('[contact/route] RESEND_API_KEY not set — form submission:', data);
    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla iletildi.' },
      { status: 200 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'Ribbony <noreply@ribbony.com>',
      to: process.env.CONTACT_EMAIL ?? 'info@ribbony.com',
      replyTo: data.email,
      subject: `Yeni İletişim Formu Mesajı — ${data.name}${data.company ? ` (${data.company})` : ''}`,
      html: buildEmailHtml(data),
    });

    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla iletildi.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('[contact/route] Resend error:', error);

    return NextResponse.json(
      { success: false, message: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' },
      { status: 500 },
    );
  }
}
