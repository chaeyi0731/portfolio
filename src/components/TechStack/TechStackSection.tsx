// TechStackSection.client.tsx
import React from 'react';
import { Tech } from '../interface/Tech';

interface TechStackSectionProps {
  tech: Tech;
  onTechClick: () => void;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ tech, onTechClick }) => {
  return (
    <div>
      <div className="tech-stack-section text-center" onClick={onTechClick}>
        <img src={tech.imageUrl} alt={tech.title} className="cursor-pointer w-20 mb-10 " />
      </div>
    </div>
  );
};

export default TechStackSection;
