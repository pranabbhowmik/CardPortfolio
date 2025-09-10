import React from "react";
import { Helmet } from "react-helmet-async";

function AboutSeo({ title, description, keywords, url, image }) {
  // Default values for SEO fields
  const defaultTitle = "Pranab Bhowmik | Full-Stack Developer";
  const defaultDescription =
    "Learn about Pranab Bhowmik, a passionate full-stack developer skilled in MERN stack, React, Node.js, and Tailwind CSS, building innovative web applications.";
  const defaultKeywords =
    "Pranab Bhowmik, full-stack developer, MERN stack, React, Node.js, Tailwind CSS, web developer, about";
  const defaultUrl = "https://pranabbhowmik.netlify.app/about";
  const defaultImage = "https://pranabbhowmik.netlify.app/portfoliopic.png";

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
        <meta property="og:type" content="profile" />

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

        {/* Structured Data for Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pranab Bhowmik",
            jobTitle: "Full-Stack Developer",
            url: url || defaultUrl,
            image: image || defaultImage,
            description: description || defaultDescription,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Tamluk",
              addressLocality: "Purbamedinipur",
              addressRegion: "West Bengal",
              postalCode: "721549",
              addressCountry: "IN",
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

export default AboutSeo;
