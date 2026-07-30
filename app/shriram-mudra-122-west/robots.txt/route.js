import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /shriram-mudra-122-west

Sitemap: https://shriramprojects.in/shriram-mudra-122-west/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
