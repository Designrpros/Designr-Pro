'use client';

import styled from 'styled-components';
import Link from 'next/link';

const NavBarContainer = styled.nav`
  background-color: #cad9e4; /* Soft blue-gray background */
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
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
      <Link href="/">
        <NavLink>Designr.Pro</NavLink>
      </Link>
      <NavLinks>
        <Link href="/about"><NavLink>About</NavLink></Link>
        <Link href="/contact"><NavLink>Contact</NavLink></Link>
        <Link href="/cv"><NavLink>CV</NavLink></Link>
        <Link href="/gallery"><NavLink>Gallery</NavLink></Link>
      </NavLinks>
    </NavBarContainer>
  );
}