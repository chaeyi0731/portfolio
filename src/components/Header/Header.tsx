import React, { RefObject } from 'react';

interface HeaderProps {
  profileRef: RefObject<HTMLDivElement>;
  techStackRef: RefObject<HTMLDivElement>;
  introRef: RefObject<HTMLDivElement>;
  titleRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
}

function Header({ profileRef, techStackRef, introRef, titleRef, projectRef }: HeaderProps) {
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full h-28 flex justify-between items-center text-xl bg-gray-400 bg-opacity-25">
      <div className="ml-20">
        <button onClick={() => scrollToSection(titleRef)}>ChaeYi</button>
      </div>
      <div className="flex justify-around w-5/12">
        <button onClick={() => scrollToSection(profileRef)}>Profile</button>
        <button onClick={() => scrollToSection(introRef)}>intro</button>
        <button onClick={() => scrollToSection(techStackRef)}>Tech stack</button>
        <button onClick={() => scrollToSection(projectRef)}>Project</button>
      </div>
    </header>
  );
}

export default Header;
