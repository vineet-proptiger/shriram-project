import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /shriram-park-63

Sitemap: https://shriramprojects.in/shriram-park-63/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
