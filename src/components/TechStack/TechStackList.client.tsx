// TechStackList.client.tsx
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
    <div className="ml-56 mt-14 flex flex-col">
      <h1 className="text-2xl font-bold mt-7">⚒️ 기술 스택</h1>
      <div className="flex">
        <div className="flex flex-wrap justify-between w-96 mr-10">
          {' '}
          {techStack.map((tech, index) => (
            <TechStackSection key={index} tech={tech} onTechClick={() => handleTechClick(tech.description.join(' '))} />
          ))}
        </div>
        {selectedTechDescription && (
          <div className="flex-1">
            {' '}
            <div className="text-gray-400 flex justify-center text-2xl">
              <p>{selectedTechDescription}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TechStackList;
