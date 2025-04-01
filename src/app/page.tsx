'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Projects array
const projects = [
  {
    name: "Mapr",
    url: "https://mapr-homepage.vercel.app",
    description: "An innovative project management tool designed for tradesmen, offering a unique map-based interface for iOS, macOS, and visionOS users. Developed by Vegar Berentsen, Mapr allows users to visualize the geographical distribution of their ongoing projects, manage contacts, track time, and more.",
  },
  {
    name: "Akthe",
    url: "https://akthe.vercel.app",
    description: "An aktivitetsbasert helsehjelp (activity-based healthcare) platform providing solutions focused on engaging individuals in meaningful activities to promote health and well-being.",
  },
  {
    name: "Prima",
    url: "https://prima-umber.vercel.app",
    description: "A platform offering VR experiences aimed at enhancing the lifestyle and wellness of older adults.",
  },
  {
    name: "Lydhagen",
    url: "https://lydhagen.vercel.app",
    description: "A local Norwegian music festival in Bærum kommune, dedicated to fostering community engagement through music and cultural events.",
  },
  {
    name: "Studio 51",
    url: "https://studio51.vercel.app",
    description: "Also known as Rap Clinic, Studio 51 is a municipal initiative in Bærum kommune that uses music as a medium for identity formation and social participation, particularly targeting individuals dealing with mental health and substance abuse challenges.",
  },
  {
    name: "Høl i CVen",
    url: "https://h-l-i-c-ven.vercel.app",
    description: "A coffee shop initiative under Akthe, providing employment opportunities and support for individuals in need, aiming to integrate them into the workforce and community.",
  },
  {
    name: "Brodrene Ervik",
    url: "https://brodrene-ervik.vercel.app/",
    description: "A project developed for a Norwegian construction company, highlighting their services and previous work.",
  },
  {
    name: "Bærum Bygg Fornyelse",
    url: "https://www.baerumbyggfornyelse.no/",
    description: "A construction and renovation company based in Bærum, specializing in building renewal projects. This was one of the developer's first external projects.",
  },
  {
    name: "Cinematographer Portfolio",
    url: "https://cinematographer2.vercel.app",
    description: "A portfolio showcasing the work of a cinematographer, featuring stunning visuals and projects that highlight their expertise in filmmaking and visual storytelling.",
  },
  {
    name: "LIORA",
    url: "https://liora-one.vercel.app",
    description: "An artist webpage for LIORA, designed to display her creative works, artistic vision, and personal style through an engaging and visually appealing interface.",
  },
  {
    name: "Låne Lageret",
    url: "https://laanelageret.vercel.app",
    description: "A Bua-inspired concept for Akthe, Låne Lageret is a community-driven initiative that provides a lending library for tools, equipment, and resources. Designed to promote sustainability and accessibility, this platform allows individuals to borrow items for their projects, fostering collaboration and reducing waste within the Akthe community.",
  },
  {
    name: "BærumKart",
    url: "https://baerumkart.vercel.app",
    description: "Inspired by UT.no, BærumKart is a digital mapping platform tailored for the Bærum region. It offers detailed maps and guides for outdoor activities, including hiking trails, cultural landmarks, and community events, encouraging residents and visitors to explore Bærum’s natural beauty and local attractions.",
  },
  {
    name: "Designr.pro",
    url: "https://designrpro.vercel.app",
    description: "The personal brand homepage and CV of a professional designer, showcasing various design projects, work philosophy, and professional experience.",
  },
  {
    name: "Alcatelz",
    url: "https://www.alcatelz.com/",
    description: "A personal portfolio page displaying various projects and outlining the creator's work philosophy.",
  },
];

// Styled Components for custom styling
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #cad9e4; /* Soft blue-gray background */
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 4rem; /* Larger font size */
  font-weight: 800;
  line-height: 1.2; /* Allow natural line breaking */
  margin-bottom: 1rem;
  color: #292a2d; /* Dark gray for headlines */
  display: block; /* Ensure the title takes the full width */
  @media (max-width: 1024px) {
    font-size: 3rem; /* Slightly smaller for tablets */
  }
  @media (max-width: 768px) {
    font-size: 2.5rem; /* Smaller for mobile */
  }
  @media (max-width: 480px) {
    font-size: 2rem; /* Even smaller for very small screens */
  }

  /* Disable animation for users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .typewriter {
      border-right: none;
    }
  }
`;

const TypewriterText = styled.span`
  display: inline-block;
  border-right: 3px solid #292a2d; /* Cursor effect */
  @media (max-width: 768px) {
    border-right: 2px solid #292a2d;
  }
  @media (max-width: 480px) {
    border-right: 1px solid #292a2d;
  }
`;

const HighlightedText = styled.span`
  background-color: #fddeb4; /* Warm peach highlight */
  padding: 0 0.25rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #292a2d; /* Dark gray for body text */
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AuthorText = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #292a2d; /* Dark gray for author name */
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const CTAButton = styled.button`
  background-color: #fddeb4; /* Warm peach */
  color: #292a2d; /* Dark gray text */
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

// Portfolio Section Styles
const PortfolioSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PortfolioTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #292a2d; /* Black text */
  background-color: #fddeb4; /* Tinted yellow background */
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PortfolioItem = styled.div`
  background-color: #e1e9f0; /* Tinted blue background */
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

const PortfolioItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const PortfolioItemContent = styled.div`
  flex: 1;
`;

const PortfolioItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #292a2d; /* Black text */
  background-color: #fddeb4; /* Tinted yellow background */
  padding: 0.25rem 0.5rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PortfolioItemDescription = styled.p`
  font-size: 1rem;
  color: #292a2d; /* Black text */
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const PortfolioItemLink = styled.a`
  color: #292a2d; /* Dark gray text */
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: underline;
  &:hover {
    color: #fddeb4; /* Warm peach on hover */
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Footer = styled.footer`
  color: #292a2d; /* Dark gray text */
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #b0c4d1; /* Slightly darker shade of the background for the border */
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default function Home() {
  const fullTitle = "VEGAR BERENTSEN: Designer & Developer";
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100; // Speed in milliseconds per character

    const type = () => {
      if (index < fullTitle.length) {
        setDisplayedText(fullTitle.substring(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      } else {
        setIsTyping(false); // Stop blinking cursor when typing is complete
      }
    };

    // Start typing animation
    type();

    // Cleanup on unmount
    return () => {
      setDisplayedText('');
      setIsTyping(true);
    };
  }, []);

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
              <span> </span> // Blinking cursor space
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
        <PortfolioTitle className="font-heading">Portfolio</PortfolioTitle>
        {projects.map((project, index) => (
          <PortfolioItem key={index}>
            <PortfolioItemContent>
              <PortfolioItemTitle className="font-heading">{project.name}</PortfolioItemTitle>
              <PortfolioItemDescription className="font-sans">{project.description}</PortfolioItemDescription>
              <Link href={project.url} passHref>
                <PortfolioItemLink target="_blank" rel="noopener noreferrer">Visit Project</PortfolioItemLink>
              </Link>
            </PortfolioItemContent>
          </PortfolioItem>
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