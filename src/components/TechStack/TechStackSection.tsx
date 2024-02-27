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
      <h2 className="text-2xl font-bold mt-9">{tech.title}</h2>
      <div className="text-gray-400 mt-4">
        {tech.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
