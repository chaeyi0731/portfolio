'use client';
import React, { useState, useEffect } from 'react';
import TechStackSection from './TechStackSection';

function TechStackList() {
  const [techStack, setTechStack] = useState([]);
  const [selectedTechDescription, setSelectedTechDescription] = useState('');

  useEffect(() => {
    fetch('/data/mydata.json')
      .then((response) => response.json())
      .then((data) => setTechStack(data))
      .catch((error) => console.error('json 불러오기 실패:', error));
  }, []);

  const handleTechClick = (description) => {
    setSelectedTechDescription(description);
  };

  return (
    <div className="flex ml-56 mt-14 flex-col">
      <h1 className="text-2xl font-bold mt-7">⚒️ 기술 스택</h1>
      <div className="flex flex-row justify-between ">
        <div className="tech-stack-list mt-14 w-72 flex flex-row flex-wrap justify-between">
          {techStack.map((tech, index) => (
            <TechStackSection key={index} tech={tech} onTechClick={() => handleTechClick(tech.description.join(' '))} />
          ))}
        </div>
        {selectedTechDescription && (
          <div className="description text-gray-400 mt-4 ">
            <p>{selectedTechDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TechStackList;
