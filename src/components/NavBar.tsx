'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const sendGaEvent = (eventName: string, eventParams: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

const NavBarContainer = styled.nav`
  background-color: #cad9e4;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
    max-width: 1200px;
    justify-content: space-between;
    overflow-x: hidden;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  white-space: nowrap;
  margin-left: 1.5rem;
  
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const NavLink = styled.a`
  color: #292a2d;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none !important;
  padding: 0.5rem 0;
  font-family: var(--font-italianno), cursive;
  &:hover {
    text-decoration: none !important;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none !important;
  &:hover {
    text-decoration: none !important;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function NavBar() {
  const handleNavLinkClick = (linkName: string, linkPath: string) => {
    sendGaEvent('navigation_click', {
      link_text: linkName,
      link_url: linkPath,
      navigation_location: 'main_navbar',
    });
  };

  return (
    <NavBarContainer>
      <Link href="/">
        <LogoContainer>
          <Image
            src="/dp.png"
            alt="Designr.Pro Logo"
            width={75}
            height={75}
            priority
          />
        </LogoContainer>
      </Link>
      <NavLinks>
        <StyledLink href="/about">
          <NavLink onClick={() => handleNavLinkClick('About', '/about')}>About</NavLink>
        </StyledLink>
        <StyledLink href="/contact">
          <NavLink onClick={() => handleNavLinkClick('Contact', '/contact')}>Contact</NavLink>
        </StyledLink>
        <StyledLink href="/cv">
          <NavLink onClick={() => handleNavLinkClick('CV', '/cv')}>CV</NavLink>
        </StyledLink>
        <StyledLink href="/gallery">
          <NavLink onClick={() => handleNavLinkClick('Gallery', '/gallery')}>Gallery</NavLink>
        </StyledLink>
      </NavLinks>
    </NavBarContainer>
  );
}
