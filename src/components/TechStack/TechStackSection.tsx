// TechStackSection.client.tsx
import React from 'react';

interface Tech {
  title: string;
  imageUrl: string;
  description: string[];
}

interface TechStackSectionProps {
  tech: Tech;
  onTechClick: () => void;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ tech, onTechClick }) => {
  return (
    <div className="tech-stack-section text-center" onClick={onTechClick}>
      <h2 className="text-2xl font-bold mt-9">{tech.title}</h2>
      <img src={tech.imageUrl} alt={tech.title} className="cursor-pointer w-24" />
    </div>
  );
};

export default TechStackSection;
