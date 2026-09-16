export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://fanchacars.ma/sitemap.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
