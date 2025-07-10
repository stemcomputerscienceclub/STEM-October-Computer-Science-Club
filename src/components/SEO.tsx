import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
}

const SEO: React.FC<SEOProps> = ({
  title = process.env.REACT_APP_SITE_TITLE || 'STEM Computer Science Club - Empowering Future Programmers & Innovators',
  description = process.env.REACT_APP_SITE_DESCRIPTION || 'Join our vibrant community of passionate developers. Master programming tracks, participate in workshops, and unlock your potential in computer science and technology innovation.',
  keywords = 'STEM, computer science, programming, web development, machine learning, AI, algorithms, coding bootcamp, tech community, software engineering, python, javascript, react, hackathon',
  image = '/imgs/official-logo.png',
  url = process.env.REACT_APP_SITE_URL || 'https://stemcsclub.org',
  type = 'website',
  article
}) => {
  const siteTitle = process.env.REACT_APP_SITE_NAME || 'STEM CS Club';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={process.env.REACT_APP_TWITTER_HANDLE || '@stemcsclub'} />
      <meta name="twitter:creator" content={process.env.REACT_APP_TWITTER_HANDLE || '@stemcsclub'} />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* JSON-LD Structured Data for specific pages */}
      {type === 'article' && article && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: image,
            author: {
              '@type': 'Organization',
              name: article.author || siteTitle
            },
            publisher: {
              '@type': 'Organization',
              name: siteTitle,
              logo: {
                '@type': 'ImageObject',
                url: '/imgs/official-logo.png'
              }
            },
            datePublished: article.publishedTime,
            dateModified: article.modifiedTime
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
