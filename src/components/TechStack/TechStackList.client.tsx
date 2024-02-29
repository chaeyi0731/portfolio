// TechStackList.client.tsx
'use client';
import React, { useState, useEffect } from 'react';
import TechStackSection from './TechStackSection';
import { Tech } from '../interface/Tech';

function TechStackList() {
  const [techStack, setTechStack] = useState<Tech[]>([]);

  const [selectedTechDescription, setSelectedTechDescription] = useState('');

  useEffect(() => {
    fetch('/data/mydata.json')
      .then((response) => response.json())
      .then((data: Tech[]) => setTechStack(data))
      .catch((error) => console.error('json 불러오기 실패:', error));
  }, []);

  const handleTechClick = (description: string[]) => {
    const descriptionText = Array.isArray(description) ? description.join(' ') : '';
    setSelectedTechDescription(descriptionText);
  };

  return (
    <div className="ml-56 mt-32 flex flex-col">
      <h1 className="text-2xl font-bold mt-7">⚒️ 기술 스택</h1>
      <div className="flex mt-10">
        <div className="flex flex-wrap justify-between w-96 mr-10 mt-9">
          {' '}
          {techStack.map((tech, index) => (
            <TechStackSection key={index} tech={tech} onTechClick={() => handleTechClick(tech.description)} />
          ))}
        </div>
        {selectedTechDescription && (
          <div className="flex-1 flex justify-center">
            {' '}
            <div className="text-gray-400  text-xl text-justify flex justify-center">
              <p className="whitespace-pre-wrap  ">{selectedTechDescription}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TechStackList;
