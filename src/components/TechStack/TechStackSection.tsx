// TechStackSection.client.tsx
import React from 'react';

interface Tech {
  title: string;
  imageUrl: string;
  description: string[];
}

interface TechStackSectionProps {
  tech: Tech;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ tech }) => {
  return (
    <div className="tech-stack-section">
      <div className="image-container text-center">
        <h2 className="text-2xl font-bold mt-9">{tech.title}</h2>
        <img src={tech.imageUrl} alt={tech.title} className="cursor-pointer w-24" />
      </div>
      {/* 항상 설명 표시 */}
      <div className="description text-gray-400 mt-4">
        {tech.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
