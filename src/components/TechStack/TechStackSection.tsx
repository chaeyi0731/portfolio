// TechStackSection.client.tsx
import React, { useState } from 'react';

interface Tech {
  title: string;
  imageUrl: string; // 이미지 URL을 포함합니다.
  description: string[];
}

interface TechStackSectionProps {
  tech: Tech;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ tech }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="tech-stack-section">
      <div className="image-container">
        <h2 className="text-2xl font-bold mt-9">{tech.title}</h2>
        <div className="flex flex-wrap justify-center">
          <div className="m-2">
            <img src={tech.imageUrl} alt={tech.title} className="cursor-pointer w-24" onClick={toggleDescription} />
          </div>

          <div className="m-2">
            <img src={tech.imageUrl} alt={tech.title} className="cursor-pointer w-24" onClick={toggleDescription} />
          </div>
        </div>
      </div>
      {showDescription && (
        <div className="text-gray-400 mt-4">
          {tech.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechStackSection;
