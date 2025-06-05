'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Define type for openCategories
interface CategoryState {
  [key: string]: boolean;
}

// Declare gtag on the Window interface so TypeScript knows it exists
// (This block should ideally be in a global declaration file like `src/types/global.d.ts`
// or `next-env.d.ts` if you have one, to avoid repetition.)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Helper function to safely send GA4 events
const sendGaEvent = (eventName: string, eventParams: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Project categories with descriptions
const projectCategories = [
  {
    name: 'Mobile Apps',
    description: 'Innovative mobile applications for iOS, macOS, and visionOS, solving unique challenges with intuitive designs.',
    projects: [
      {
        name: 'Mapr',
        url: 'https://mapr-homepage.vercel.app',
        description: 'An innovative project management tool designed for tradesmen, offering a unique map-based interface for iOS, macOS, and visionOS users. Developed by Vegar Berentsen, Mapr allows users to visualize the geographical distribution of their ongoing projects, manage contacts, track time, and more.',
      },
      {
        name: 'QRHue',
        url: 'https://apps.apple.com/no/app/qrhue/id6746092245',
        description: 'Create stunning QR codes with ease using QRHue! Unleash your creativity with vibrant colors, transforming any link, text, or URL into a custom QR code in just a few taps. Enjoy vivid customization with a spectrum of foreground and background colors, toggle between rounded or square shapes, and fine-tune corner radius. With an intuitive interface, export and share QR codes with a transparent background. Save and revisit designs with a sleek history feature, perfect for sharing websites, contact info, or special messages in style.',
      },
      {
        name: 'TextClip',
        url: 'https://apps.apple.com/no/app/textclip/id6746357735?mt=12',
        description: 'A powerful Mac OCR app that effortlessly extracts text from images, PDFs, websites, or videos. TextClip’s intuitive interface allows users to select screen regions for instant text recognition, copying results to the clipboard for use in any macOS app. Operating offline for privacy, it requires no special skills, making it ideal for students, professionals, and anyone needing fast, secure text extraction.'
      },
    ],
  },
  {
    name: 'Web Apps',
    description: 'Web-based platforms fostering community collaboration and regional exploration.',
    projects: [
      {
        name: 'Låne Lageret',
        url: 'https://laanelageret.vercel.app',
        description: 'A Bua-inspired concept for Akthe, Låne Lageret is a community-driven initiative that provides a lending library for tools, equipment, and resources. Designed to promote sustainability and accessibility, this platform allows individuals to borrow items for their projects, fostering collaboration and reducing waste within the Akthe community.',
      },
      {
        name: 'BærumKart',
        url: 'https://baerumkart.vercel.app',
        description: 'Inspired by UT.no, BærumKart is a digital mapping platform tailored for the Bærum region. It offers detailed maps and guides for outdoor activities, including hiking trails, cultural landmarks, and community events, encouraging residents and visitors to explore Bærum’s natural beauty and local attractions.',
      },
    ],
  },
  {
    name: 'Learning Resources',
    description: 'Interactive tools and platforms for developing creative and technical skills.',
    projects: [
      {
        name: 'Melodex',
        url: 'https://melodex-seven.vercel.app',
        description: 'Your guide to mastering music production.',
      },
      {
        name: 'Prompted',
        url: 'https://prompted-two.vercel.app',
        description: 'Enhance your creative process with Prompted. Learn prompt engineering to inspire lyrics and music ideas for Studio 51 sessions.',
      },
      {
        name: 'Composition',
        url: 'https://composition-nu.vercel.app',
        description: 'Master graphic design with Composition, perfect for Studio 51’s animation workshops. Explore Figma for prototyping visuals.',
      },
      {
        name: 'Layer',
        url: 'https://layer-eight.vercel.app',
        description: 'Learn web design basics with Layer, tailored for Studio 51’s digital projects. Use VSCode, Next.js, and Styled Components to build creative tools.',
      },
    ],
  },
  {
    name: 'Creative Portfolios',
    description: 'Dynamic showcases of artistic and professional work for individuals and brands.',
    projects: [
      {
        name: 'Cinematographer Portfolio',
        url: 'https://cinematographer2.vercel.app',
        description: 'A portfolio showcasing the work of a cinematographer, featuring stunning visuals and projects that highlight their expertise in filmmaking and visual storytelling.',
      },
      {
        name: 'LIORA',
        url: 'https://liora-one.vercel.app',
        description: 'An artist webpage for LIORA, designed to display her creative works, artistic vision, and personal style through an engaging and visually appealing interface.',
      },
      {
        name: 'Designr.pro',
        url: 'https://designrpro.vercel.app',
        description: 'The personal brand homepage and CV of a professional designer, showcasing various design projects, work philosophy, and professional experience.',
      },
      {
        name: 'Alcatelz',
        url: 'https://www.alcatelz.com/',
        description: 'A personal portfolio page displaying various projects and outlining the creator’s work philosophy.',
      },
    ],
  },
  {
    name: 'Community Initiatives',
    description: 'Impactful projects promoting social engagement and well-being in local communities.',
    projects: [
      {
        name: 'Akthe',
        url: 'https://akthe.vercel.app',
        description: 'An aktivitetsbasert helsehjelp (activity-based healthcare) platform providing solutions focused on engaging individuals in meaningful activities to promote health and well-being.',
      },
      {
        name: 'Studio 51',
        url: 'https://studio51.vercel.app',
        description: 'Also known as Rap Clinic, Studio 51 is a municipal initiative in Bærum kommune that uses music as a medium for identity formation and social participation, particularly targeting individuals dealing with mental health and substance abuse challenges.',
      },
      {
        name: 'Høl i CVen',
        url: 'https://holicven.vercel.app',
        description: 'A coffee shop initiative under Akthe, providing employment opportunities and support for individuals in need, aiming to integrate them into the workforce and community.',
      },
    ],
  },
  {
    name: 'Commercial Websites',
    description: 'Professional websites for businesses, highlighting services and achievements.',
    projects: [
      {
        name: 'Brodrene Ervik',
        url: 'https://brodrene-ervik.vercel.app/',
        description: 'A project developed for a Norwegian construction company, highlighting their services and previous work.',
      },
      {
        name: 'Bærum Bygg Fornyelse',
        url: 'https://www.baerumbyggfornyelse.no/',
        description: 'A construction and renovation company based in Bærum, specializing in building renewal projects. This was one of the developer’s first external projects.',
      },
    ],
  },
  {
    name: 'Special Projects',
    description: 'Unique initiatives spanning virtual reality and cultural community events.',
    projects: [
      {
        name: 'Prima',
        url: 'https://prima-vr.vercel.app',
        description: 'A platform offering VR experiences aimed at enhancing the lifestyle and wellness of older adults.',
      },
      {
        name: 'Lydhagen',
        url: 'https://lydhagen.vercel.app',
        description: 'A local Norwegian music festival in Bærum kommune, dedicated to fostering community engagement through music and cultural events.',
      },
      {
        name: 'Sandvika Platemesse',
        url: 'https://sandvikaplatemesse.no',
        description: 'A vibrant vinyl record fair held on May 10-11 at Kadettangen 18, featuring music, culture, and community spirit. Organized by Høl i CV’en, it offers live performances by artists like LIORA, a fresh tea stand, and an afterparty, creating a nostalgic and engaging local experience.'
      },
    ],
  },
];

// Styled Components (No changes needed here)
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #cad9e4;
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #292a2d;
  display: block;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TypewriterText = styled.span`
  display: inline-block;
  border-right: 3px solid #292a2d;
  @media (max-width: 768px) {
    border-right: 2px solid #292a2d;
  }
  @media (max-width: 480px) {
    border-right: 1px solid #292a2d;
  }
`;

const HighlightedText = styled.span`
  background-color: #fddeb4;
  padding: 0 0.25rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #292a2d;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AuthorText = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #292a2d;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const CTAButton = styled.button`
  background-color: #fddeb4;
  color: #292a2d;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
  }
`;

const PortfolioSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const CategoryHeader = styled.div`
  background-color: #e1e9f0;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #d1dde8;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.5rem 1rem;
  display: inline-block;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  color: #292a2d;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #292a2d;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryContent = styled.div`
  margin-bottom: 2rem;
`;

const ProjectsContainer = styled.div`
  padding-left: 1rem;
  @media (max-width: 768px) {
    padding-left: 0.5rem;
  }
`;

const PortfolioItem = styled.div`
  background-color: #e1e9f0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PortfolioItemContent = styled.div`
  flex: 1;
`;

const PortfolioItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.25rem 0.5rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PortfolioItemDescription = styled.p`
  font-size: 1rem;
  color: #292a2d;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const PortfolioItemLink = styled.a`
  color: #292a2d;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: underline;
  &:hover {
    color: #fddeb4;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Footer = styled.footer`
  color: #292a2d;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #b0c4d1;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default function Home() {
  const fullTitle = 'VEGAR BERENTSEN: Designer & Developer';
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [openCategories, setOpenCategories] = useState<CategoryState>(
    projectCategories.reduce((acc, category) => ({ ...acc, [category.name]: false }), {})
  );

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100;

    const type = () => {
      if (index < fullTitle.length) {
        setDisplayedText(fullTitle.substring(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    type();

    return () => {
      setDisplayedText('');
      setIsTyping(true);
    };
  }, []);

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // New function to handle external link clicks from the portfolio
  const handleExternalLinkClick = (categoryName: string, projectName: string, projectUrl: string) => {
    sendGaEvent('portfolio_external_link_click', { // Custom event name
      category_name: categoryName,                // Category of the project
      project_name: projectName,                  // Name of the clicked project
      link_url: projectUrl,                       // URL of the external link
      link_text: 'Visit Project',                 // The text displayed on the link
      link_location: 'portfolio_item',            // Context: where the click occurred
    });
  };

  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle className="font-heading">
          <TypewriterText className="typewriter">
            {displayedText.replace('Designer & Developer', '')}
            {displayedText.includes('Designer & Developer') ? (
              <span>
                <br />
                Designer & Developer
              </span>
            ) : (
              <span> </span>
            )}
          </TypewriterText>
        </HeroTitle>
        <HeroSubtitle className="font-sans">
          Welcome to Designr.Pro, my digital home where I showcase my skills, creativity, and dedication to app and web development.{' '}
          <HighlightedText>Currently working at Studio51 and developing Mapr, an app for iOS, macOS and visionOS.</HighlightedText>
        </HeroSubtitle>
        <AuthorText className="font-sans">Based in Østerås, Norway</AuthorText>
        <Link href="/contact">
          <CTAButton>Contact Me</CTAButton>
        </Link>
      </HeroSection>

      {/* Portfolio Section */}
      <PortfolioSection>
        {projectCategories.map((category) => (
          <CategoryContent key={category.name}>
            <CategoryHeader onClick={() => toggleCategory(category.name)}>
              <div>
                <CategoryTitle className="font-heading">{category.name}</CategoryTitle>
                <CategoryDescription className="font-sans">{category.description}</CategoryDescription>
              </div>
              <ToggleButton aria-label={`Toggle ${category.name} section`}>
                {openCategories[category.name] ? 'Collapse' : 'Expand'}
              </ToggleButton>
            </CategoryHeader>
            {openCategories[category.name] && (
              <ProjectsContainer>
                {category.projects.map((project, index) => (
                  <PortfolioItem key={index}>
                    <PortfolioItemContent>
                      <PortfolioItemTitle className="font-heading">{project.name}</PortfolioItemTitle>
                      <PortfolioItemDescription className="font-sans">{project.description}</PortfolioItemDescription>
                      <Link href={project.url} passHref>
                        {/* Attach onClick handler to PortfolioItemLink */}
                        <PortfolioItemLink
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleExternalLinkClick(category.name, project.name, project.url)}
                        >
                          Visit Project
                        </PortfolioItemLink>
                      </Link>
                    </PortfolioItemContent>
                  </PortfolioItem>
                ))}
              </ProjectsContainer>
            )}
          </CategoryContent>
        ))}
      </PortfolioSection>

      {/* Footer */}
      <Footer>
        <p className="font-sans">
          © {new Date().getFullYear()} Designr.Pro. All rights reserved.
        </p>
        <p className="font-sans">
          VegarBerentsen@gmail.com | +47 485 96 755 | Ovenbakken 31 A, Østerås, Norway
        </p>
      </Footer>
    </Wrapper>
  );
}