'use client';

import styled from 'styled-components';
import Link from 'next/link'; // Corrected import
import Image from 'next/image';

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
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 0;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function NavBar() {
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
        <Link href="/about"><NavLink>About</NavLink></Link>
        <Link href="/contact"><NavLink>Contact</NavLink></Link>
        <Link href="/cv"><NavLink>CV</NavLink></Link>
        <Link href="/gallery"><NavLink>Gallery</NavLink></Link>
        <Link href="/privacy-policy"><NavLink>Privacy Policy</NavLink></Link>
      </NavLinks>
    </NavBarContainer>
  );
}