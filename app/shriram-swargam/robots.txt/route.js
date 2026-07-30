import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /shriram-swargam

Sitemap: https://shriramprojects.in/shriram-swargam/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
