import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const { fullName, company, email, phone, message } = await req.json()

    if (!fullName || !email) {
      return NextResponse.json(
        { errors: [{ message: 'Missing required fields' }] },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })
    const doc = await payload.create({
      collection: 'packaging-forms',
      data: { fullName, company: company || '', email, phone: phone || '', message: message || '' },
    })

    return NextResponse.json({ doc }, { status: 201 })
  } catch (err) {
    console.error('packaging-forms submission error:', err)
    return NextResponse.json({ errors: [{ message: 'Submission failed' }] }, { status: 500 })
  }
}
