import React, { RefObject } from 'react';

interface HeaderProps {
  profileRef: RefObject<HTMLDivElement>;
  techStackRef: RefObject<HTMLDivElement>;
  introRef: RefObject<HTMLDivElement>;
}

function Header({ profileRef, techStackRef, introRef }: HeaderProps) {
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full h-28 flex justify-around text-xl bg-gray-400 bg-opacity-25">
      <button onClick={() => scrollToSection(profileRef)}>Profile</button>
      <button onClick={() => scrollToSection(introRef)}>intro</button>
      <button onClick={() => scrollToSection(techStackRef)}>Skill</button>
      <button onClick={() => scrollToSection(techStackRef)}>Project</button>
    </header>
  );
}

export default Header;
