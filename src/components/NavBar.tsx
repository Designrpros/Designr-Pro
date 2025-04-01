'use client';

import styled from 'styled-components';
import Link from 'next/link';

const NavBarContainer = styled.nav`
  background-color: #cad9e4; /* Soft blue-gray background */
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center; /* Vertically aligns all children */
`;

const LogoLink = styled(Link)`
  margin-right: 2rem; /* Fixed space between Designr.Pro and nav links */
  flex-shrink: 0; /* Prevents Designr.Pro from shrinking or moving */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center; /* Vertically aligns the links */
  justify-content: flex-end; /* Pushes links to the right */
  flex-grow: 1; /* Takes up remaining space */

  /* Make it horizontally scrollable on mobile */
  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    padding-bottom: 0.5rem; /* Optional: adds space for scrollbar */

    /* Hide scrollbar for cleaner look (optional) */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Opera */
    }
  }
`;

const NavLink = styled.a`
  color: #292a2d; /* Dark gray text */
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <LogoLink href="/">
        <NavLink>Designr.Pro</NavLink>
      </LogoLink>
      <NavLinks>
        <Link href="/about"><NavLink>About</NavLink></Link>
        <Link href="/contact"><NavLink>Contact</NavLink></Link>
        <Link href="/cv"><NavLink>CV</NavLink></Link>
        <Link href="/gallery"><NavLink>Gallery</NavLink></Link>
      </NavLinks>
    </NavBarContainer>
  );
}