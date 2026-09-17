import { cars } from '@/data/cars';

export function GET() {
  const baseUrl = 'https://fancha-cars.vercel.app';
  const staticRoutes = ['', '/cars', '/booking', '/conditions', '/services', '/contact', '/a-propos', '/faq'];

  const urls = [
    ...staticRoutes.map(
      (route) =>
        `<url><loc>${baseUrl}${route}</loc><changefreq>weekly</changefreq><priority>${route === '' ? '1.0' : '0.8'}</priority></url>`
    ),
    ...cars.map(
      (car) =>
        `<url><loc>${baseUrl}/cars/${car.slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`
    ),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
