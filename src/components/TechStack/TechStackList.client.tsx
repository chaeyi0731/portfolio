'use client';
import React, { useState, useEffect } from 'react';
import TechStackSection from './TechStackSection';

function TechStackList() {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    fetch('../StackJson/techStackData.json')
      .then((response) => response.json())
      .then((data) => setTechStack(data))
      .catch((error) => console.error('json 불러오기 실패:', error));
  }, []);

  return (
    <div className="tech-stack-list">
      <h1>⚒️ 기술 스택</h1>
      {techStack.map((tech, index) => (
        <TechStackSection key={index} tech={tech} />
      ))}
    </div>
  );
}

export default TechStackList;
