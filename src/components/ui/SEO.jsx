import { useEffect } from 'react';

const SEO = ({
  title = "Vaibhav Soni - DevOps Engineer Portfolio",
  description = "Aspiring DevOps Engineer specializing in AWS, Azure, Kubernetes, Docker, Terraform, and CI/CD automation. Based in Ahmedabad, India.",
  keywords = "DevOps Engineer, AWS, Azure, Kubernetes, Docker, Terraform, CI/CD, Cloud Computing, Infrastructure as Code, Ahmedabad, India",
  author = "Vaibhav Soni",
  url = "https://vaibhavsoni.dev",
  image = "/og-image.jpg",
  type = "website",
  twitterHandle = "@vaibhavsonii21"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image.startsWith('http') ? image : `${url}${image}`, true);
    updateMetaTag('og:site_name', 'Vaibhav Soni Portfolio', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', twitterHandle);
    updateMetaTag('twitter:creator', twitterHandle);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image.startsWith('http') ? image : `${url}${image}`);

    // Theme color
    updateMetaTag('theme-color', '#2563eb');

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vaibhav Soni",
      "jobTitle": "DevOps Engineer",
      "description": description,
      "url": url,
      "image": image.startsWith('http') ? image : `${url}${image}`,
      "sameAs": [
        "https://linkedin.com/in/vaibhavsonii21",
        "https://github.com/vaibhav21soni",
        "https://twitter.com/vaibhavsonii21"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Inexture Solutions"
      },
      "knowsAbout": [
        "DevOps",
        "AWS",
        "Azure",
        "Kubernetes",
        "Docker",
        "Terraform",
        "CI/CD",
        "Infrastructure as Code"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "HashiCorp Certified Terraform Associate (003)",
          "dateCreated": "2024"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "AWS Certified Cloud Practitioner",
          "dateCreated": "2023"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Red Hat Certified System Administrator (RHCSA)",
          "dateCreated": "2022"
        }
      ]
    };

    // Add or update structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }

  }, [title, description, keywords, author, url, image, type, twitterHandle]);

  return null; // This component doesn't render anything
};

// Specific SEO components for different sections
export const HomeSEO = () => (
  <SEO
    title="Vaibhav Soni - DevOps Engineer | AWS, Kubernetes, Terraform Expert"
    description="Experienced DevOps Engineer specializing in cloud infrastructure, automation, and CI/CD pipelines. Certified in AWS, Terraform, and RHCSA. Based in Ahmedabad, India."
  />
);

export const AboutSEO = () => (
  <SEO
    title="About Vaibhav Soni - DevOps Engineer Journey & Experience"
    description="Learn about Vaibhav Soni's journey from non-CS background to DevOps expertise. Discover his experience with cloud technologies, certifications, and passion for automation."
  />
);

export const ProjectsSEO = () => (
  <SEO
    title="DevOps Projects by Vaibhav Soni - Cloud Infrastructure & Automation"
    description="Explore Vaibhav Soni's DevOps projects featuring AWS, Kubernetes, Terraform, CI/CD pipelines, and cloud-native applications. Real-world implementations and case studies."
  />
);

export const SkillsSEO = () => (
  <SEO
    title="DevOps Skills & Technologies - Vaibhav Soni's Technical Expertise"
    description="Comprehensive overview of Vaibhav Soni's DevOps skills including AWS, Azure, Kubernetes, Docker, Terraform, CI/CD tools, and monitoring solutions."
  />
);

export const ContactSEO = () => (
  <SEO
    title="Contact Vaibhav Soni - DevOps Engineer for Collaboration"
    description="Get in touch with Vaibhav Soni for DevOps opportunities, collaborations, or consultations. Available for cloud infrastructure and automation projects."
  />
);

export default SEO;
