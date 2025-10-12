import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: object;
}

export function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  canonical,
  schema
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    updateMetaTag('description', description);
    
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:type', ogType, true);
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }
    
    updateMetaTag('twitter:title', ogTitle || title, true);
    updateMetaTag('twitter:description', ogDescription || description, true);
    
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage, true);
    }
    
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }
    
    if (schema) {
      let scriptElement = document.querySelector('script[type="application/ld+json"][data-dynamic]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('data-dynamic', 'true');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    }
    
    return () => {
      const dynamicSchema = document.querySelector('script[type="application/ld+json"][data-dynamic]');
      if (dynamicSchema) {
        dynamicSchema.remove();
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonical, schema]);

  return null;
}
