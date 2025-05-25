'use client';

import styled from 'styled-components';
import Link from 'next/link';

const NavBarContainer = styled.nav`
  background-color: #cad9e4;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  scrollbar-width: none; /* Hide scrollbar Firefox */
  -ms-overflow-style: none; /* Hide scrollbar IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar Chrome/Safari */
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
  white-space: nowrap; /* Prevent link wrapping */
  margin-left: 1.5rem;
  
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const NavLink = styled.a`
  color: #292a2d;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 0;
  &:hover {
    text-decoration: underline;
  }
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <Link href="/">
        <NavLink>Designr.Pro</NavLink>
      </Link>
      <NavLinks>
        <Link href="/about"><NavLink>About</NavLink></Link>
        <Link href="/contact"><NavLink>Contact</NavLink></Link>
        <Link href="/cv"><NavLink>CV</NavLink></Link>
        <Link href="/gallery"><NavLink>Gallery</NavLink></Link>
        <Link href="/privacy-policy"><NavLink>Privacy Policy</NavLink></Link>
      </NavLinks>
    </NavBarContainer>
  );
}