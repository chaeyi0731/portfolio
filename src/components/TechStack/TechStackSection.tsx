import React, { useState } from 'react';

interface Tech {
  title: string;
  imageUrl: string;
  description: string[];
}

interface TechStackSectionProps {
  tech: Tech;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ tech }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => setShowDescription(!showDescription);

  return (
    <div className="tech-stack-section">
      <div className="image-container text-center">
        <h2 className="text-2xl font-bold mt-9">{tech.title}</h2>
        <img src={tech.imageUrl} alt={tech.title} className="cursor-pointer w-24" onClick={toggleDescription} />
        <div className="text-gray-400 mt-4" onClick={toggleDescription}>
          {showDescription ? (
            tech.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>설명 보기</p> // 클릭 전 기본 메시지
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
