import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const { sessionId, field, value, allFields } = await req.json()

    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'packaging-partials',
      where: { sessionId: { equals: sessionId } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      const prev = existing.docs[0]
      await payload.update({
        collection: 'packaging-partials',
        id: prev.id,
        data: {
          fullName: allFields.fullName || prev.fullName || '',
          company: allFields.company || prev.company || '',
          email: allFields.email || prev.email || '',
          phone: allFields.phone || prev.phone || '',
          message: allFields.message || prev.message || '',
          lastField: field,
        },
      })
    } else {
      await payload.create({
        collection: 'packaging-partials',
        data: {
          sessionId,
          ...allFields,
          lastField: field,
        },
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false })
  }
}