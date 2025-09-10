import React from "react";
import { Helmet } from "react-helmet-async";

function BlogSeo({ title, description, keywords, url, image, datePublished }) {
  // Default values for SEO fields
  const defaultTitle = "Pranab Bhowmik's Blog | Full-Stack Developer Insights";
  const defaultDescription =
    "Explore Pranab Bhowmik's blog for insights on web development, MERN stack, React, Node.js, and more.";
  const defaultKeywords =
    "Pranab Bhowmik, blog, MERN stack, React, Node.js, web development";
  const defaultUrl = "https://pranabbhowmik.netlify.app/blog";
  const defaultImage = "https://pranabbhowmik.netlify.app/portfoliopic.png";
  const defaultDatePublished = "2025-01-01";

  return (
    <>
      <Helmet>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta name="author" content="Pranab Bhowmik" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title || defaultTitle} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta property="og:image" content={image || defaultImage} />
        <meta property="og:url" content={url || defaultUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta
          name="twitter:description"
          content={description || defaultDescription}
        />
        <meta name="twitter:image" content={image || defaultImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={url || defaultUrl} />

        {/* Structured Data for Blog Post */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title || defaultTitle,
            description: description || defaultDescription,
            author: {
              "@type": "Person",
              name: "Pranab Bhowmik",
              url: "https://pranabbhowmik.netlify.app",
            },
            publisher: {
              "@type": "Person",
              name: "Pranab Bhowmik",
              url: "https://pranabbhowmik.netlify.app",
            },
            image: image || defaultImage,
            url: url || defaultUrl,
            datePublished: datePublished || defaultDatePublished,
            keywords: keywords || defaultKeywords,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url || defaultUrl,
            },
            sameAs: [
              "https://github.com/pranabbhowmik",
              "https://www.linkedin.com/in/pranabbhowmik",
              "https://www.youtube.com/@npm_init",
            ],
          })}
        </script>
      </Helmet>
    </>
  );
}

export default BlogSeo;
