import type { CollectionConfig } from 'payload'

const sendBrevo = async (payload: {
  sender: { email: string; name: string }
  to: { email: string; name?: string }[]
  subject: string
  htmlContent: string
}) => {
  const apiKey = (process.env.BREVO_API_KEY || '').trim()
  if (!apiKey) {
    console.error('❌ BREVO_API_KEY not set')
    return
  }

  for (let attempt = 1; attempt <= 2; attempt++) {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 10000)
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      })
      clearTimeout(timer)
      const text = await res.text().catch(() => '<no-body>')
      if (!res.ok) throw new Error(`Brevo ${res.status}: ${text}`)
      console.log(`✅ Brevo email sent (attempt ${attempt})`)
      return
    } catch (err: any) {
      clearTimeout(timer)
      console.error(`❌ Brevo attempt ${attempt} failed:`, err?.message)
      if (attempt === 2) throw err
      await new Promise((r) => setTimeout(r, 400))
    }
  }
}

export const UiForm: CollectionConfig = {
  slug: 'ui-forms',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'company', 'email', 'phone', 'createdAt'],
    group: 'Marketing',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'fullName', label: 'Full Name', type: 'text', required: true },
        { name: 'company', label: 'Company / Organization', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'email', label: 'Work Email', type: 'email', required: true },
        { name: 'phone', label: 'Contact Number', type: 'text' },
      ],
    },
    {
      name: 'message',
      label: 'Tell Us About the Project',
      type: 'textarea',
    },
  ],
  timestamps: true,

  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== 'create') return

        const verifiedSender = process.env.VERIFIED_SENDER || process.env.ADMIN_EMAIL
        const adminEmail = process.env.ADMIN_EMAIL

        if (!verifiedSender) {
          console.error('❌ VERIFIED_SENDER or ADMIN_EMAIL not set')
          return
        }

        const submittedAt = doc.createdAt || new Date().toISOString()

        if (adminEmail) {
          sendBrevo({
            sender: { email: verifiedSender, name: 'Integra Magna' },
            to: [{ email: adminEmail, name: 'Admin' }],
            subject: `📩 New UI/UX Enquiry — ${doc.fullName}`,
            htmlContent: `
              <h2 style="color:#333;font-family:sans-serif">New UI/UX Form Submission</h2>
              <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
                <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.fullName}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd"><strong>Company</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.company || '—'}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.email}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.phone || '—'}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd"><strong>Message</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.message || '—'}</td></tr>
              </table>
              <p style="color:#999;font-size:12px;font-family:sans-serif">Submitted on ${submittedAt}</p>
            `,
          }).catch((err) => console.error('❌ Failed to send admin email:', err))
        }

        try {
          const { docs: webhooks } = await req.payload.find({
            collection: 'ui-webhooks',
            where: {
              and: [
                { enabled: { equals: true } },
                { triggerOn: { equals: 'formSubmission' } },
              ],
            },
            limit: 20,
          })

          const webhookData = {
            fullName: doc.fullName,
            company: doc.company || '',
            email: doc.email,
            phone: doc.phone || '',
            message: doc.message || '',
            submittedAt: doc.createdAt,
          }

          webhooks.forEach((webhook: any) => {
            fetch(webhook.url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(webhookData),
            }).catch((err) => console.error(`❌ Webhook "${webhook.label}" failed:`, err?.message))
          })
        } catch (err) {
          console.error('❌ Failed to fire ui-webhooks:', err)
        }
      },
    ],
  },
}
