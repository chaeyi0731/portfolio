// TechStackSection.client.tsx
import React from 'react';

interface Tech {
  title: string;
  description: string[];
}

interface TechStackSectionProps {
  tech: Tech;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ tech }) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold">{tech.title}</h2>
      <div className="text-gray-400">
        {tech.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
