// TechStackSection.client.tsx
import React from 'react';
import { Tech } from '../interface/Tech';
import Image from 'next/image';

interface TechStackSectionProps {
  tech: Tech;
  onTechClick: () => void;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ tech, onTechClick }) => {
  return (
    <div>
      <div className="tech-stack-section text-center" onClick={onTechClick}>
        <Image src={tech.imageUrl} alt={tech.title} width={500} height={300} className="cursor-pointer w-20 mb-10 " />
      </div>
    </div>
  );
};

export default TechStackSection;
