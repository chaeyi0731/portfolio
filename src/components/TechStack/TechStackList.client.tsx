'use client';
import React, { useState, useEffect } from 'react';
import TechStackSection from './TechStackSection';

function TechStackList() {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    fetch('/data/mydata.json')
      .then((response) => response.json())
      .then((data) => setTechStack(data))
      .catch((error) => console.error('json 불러오기 실패:', error));
  }, []);

  return (
    <div className="flex ml-56 mt-14 flex-col">
      <h1 className="text-2xl font-bold mt-7 ">⚒️ 기술 스택</h1>
      <div className="tech-stack-list mt-14 flex  w-60 flex-wrap">
        {techStack.map((tech, index) => (
          <TechStackSection key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default TechStackList;
