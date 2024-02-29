'use client';

import React, { useRef } from 'react';
import ProfileSection from '../ProfileSection';

function Header() {
  const profileSectionRef = useRef(null);

  const infoRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header className="flex justify-between p-4 bg-gray-200">
        {/* 헤더 링크 */}
        <button onClick={() => scrollToSection(infoRef)}>Info</button>
        <button onClick={() => scrollToSection(skillRef)}>Skill</button>
        <button onClick={() => scrollToSection(projectRef)}>Project</button>
      </header>

      {/* 페이지 컨텐츠 */}
      <div className="container mx-auto overflow-y-hidden">
        <section ref={profileSectionRef} className="section">
          Info Section
        </section>
        <section ref={skillRef} className="section">
          Skill Section
        </section>
        <section ref={projectRef} className="section">
          Project Section
        </section>
      </div>
    </div>
  );
}

export default Header;
