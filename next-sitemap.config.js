/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ciscospainting.com',
  generateRobotsTxt: true, // Generates both sitemap.xml and robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/admin'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
