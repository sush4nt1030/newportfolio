import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  author?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image = 'https://twilrproduction.com/og-image.jpg',
  type = 'website',
  author = 'Sushant Budha Chhetri',
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `https://twilrproduction.com${location.pathname}`;
  const fullTitle = `${title} | Twilr Production`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const metaTags = {
      description,
      keywords: keywords || '',
      author,
      'og:title': fullTitle,
      'og:description': description,
      'og:image': image,
      'og:url': currentUrl,
      'og:type': type,
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:url': currentUrl,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;

      const isOG = name.startsWith('og:');
      const isTwitter = name.startsWith('twitter:');
      const attribute = isOG || isTwitter ? 'property' : 'name';

      let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attribute, name);
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute('content', content);
    });

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);
  }, [title, description, keywords, image, type, author, currentUrl, fullTitle]);

  return null;
}
