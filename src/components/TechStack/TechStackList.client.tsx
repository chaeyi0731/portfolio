// TechStackList.client.tsx
import React, { useState, useEffect } from 'react';
import TechModal from '../Modal/TechModal';
import { Tech } from '../interface/Tech';

function TechStackList() {
  const [techStacks, setTechStacks] = useState<Tech[]>([]);
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  useEffect(() => {
    // 각 JSON 파일에서 기술 스택 데이터를 불러와 합치기
    Promise.all([
      fetch('data/tech/frontend.json').then((res) => res.json()),
      fetch('/data/tech/backend.json').then((res) => res.json()),
      fetch('/data/tech/database.json').then((res) => res.json()),
      fetch('/data/tech/cloudServices.json').then((res) => res.json()),
      fetch('/data/tech/versionControl.json').then((res) => res.json()),
    ])
      .then((dataArrays) => {
        // 여러 JSON 파일에서 불러온 배열을 하나로 합치기
        const combinedData = dataArrays.flat();
        setTechStacks(combinedData);
      })
      .catch((error) => console.error('Failed to load tech stack data:', error));
  }, []);

  const handleTechClick = (tech: Tech) => {
    setSelectedTech(tech);
  };

  const handleCloseModal = () => {
    setSelectedTech(null);
  };

  return (
    <div className="tech-stack-list">
      {techStacks.map((tech, index) => (
        <div key={index} className="tech-stack-section" onClick={() => handleTechClick(tech)}>
          <h2>{tech.title}</h2>
          <img src={tech.imageUrl} alt={tech.title} />
        </div>
      ))}

      {selectedTech && <TechModal tech={selectedTech} onClose={handleCloseModal} />}
    </div>
  );
}

export default TechStackList;
