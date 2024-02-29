import React, { RefObject } from 'react';

interface HeaderProps {
  profileRef: RefObject<HTMLDivElement>;
  techStackRef: RefObject<HTMLDivElement>;
}

function Header({ profileRef, techStackRef }: HeaderProps) {
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full">
      <button onClick={() => scrollToSection(profileRef)}>Profile</button>
      <button onClick={() => scrollToSection(techStackRef)}>Skill</button>
    </header>
  );
}

export default Header;
