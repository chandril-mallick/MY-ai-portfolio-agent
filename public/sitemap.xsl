<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap | Chandril Mallick Portfolio</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #0B1120;
            color: #F8FAFC;
            margin: 0;
            padding: 2rem 1rem;
            display: flex;
            justify-content: center;
          }
          .container {
            max-width: 900px;
            width: 100%;
            background: #0F172A;
            border: 1px solid rgba(20, 184, 166, 0.3);
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }
          .header {
            border-bottom: 1px solid #1E293B;
            padding-bottom: 1.5rem;
            margin-bottom: 1.5rem;
          }
          h1 {
            color: #14B8A6;
            margin: 0 0 0.5rem 0;
            font-size: 1.75rem;
            font-weight: 800;
          }
          p {
            color: #94A3B8;
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.5;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
          }
          th {
            background-color: #1E293B;
            color: #14B8A6;
            text-align: left;
            padding: 0.85rem 1rem;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          td {
            padding: 1rem;
            border-bottom: 1px solid #1E293B;
            font-size: 0.9rem;
            word-break: break-all;
          }
          tr:hover td {
            background-color: rgba(20, 184, 166, 0.05);
          }
          a {
            color: #38BDF8;
            text-decoration: none;
            font-weight: 600;
          }
          a:hover {
            text-decoration: underline;
            color: #14B8A6;
          }
          .badge {
            display: inline-block;
            background: rgba(20, 184, 166, 0.15);
            color: #2DD4BF;
            padding: 0.25rem 0.6rem;
            border-radius: 0.5rem;
            font-size: 0.75rem;
            font-weight: 700;
          }
          .images-list {
            margin-top: 0.5rem;
            padding-left: 1rem;
            color: #94A3B8;
            font-size: 0.8rem;
          }
          .footer {
            margin-top: 2rem;
            font-size: 0.8rem;
            color: #64748B;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🌐 XML Sitemap</h1>
            <p>Generated for search engines (Googlebot, Bingbot). Styled for human readability.</p>
            <p style="margin-top: 0.5rem;">Domain: <a href="https://www.chandril-dev.online/">www.chandril-dev.online</a></p>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL Location</th>
                <th>Priority</th>
                <th>Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                    <xsl:if select="count(image:image) > 0">
                      <div class="images-list">
                        📷 Indexed Images (<xsl:value-of select="count(image:image)"/>):
                        <ul>
                          <xsl:for-each select="image:image">
                            <li><a href="{image:loc}" target="_blank"><xsl:value-of select="image:title"/></a></li>
                          </xsl:for-each>
                        </ul>
                      </div>
                    </xsl:if>
                  </td>
                  <td><span class="badge"><xsl:value-of select="sitemap:priority"/></span></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            Chandril Mallick — AI Engineer &amp; Full-Stack Developer Portfolio
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
