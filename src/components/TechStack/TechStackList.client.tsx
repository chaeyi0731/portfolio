// TechStackList.client.tsx
import React, { useState, useEffect } from 'react';
import TechModal from '../Modal/TechModal';
import TechStackSection from './TechStackSection'; // TechStackSection 컴포넌트를 임포트
import { Tech } from '../interface/Tech';

function TechStackList() {
  const [techStacks, setTechStacks] = useState({ frontend: [], backend: [], database: [], cloudServices: [], versionControl: [] });
  const [selectedTech, setSelectedTech] = useState(null);

  useEffect(() => {
    async function fetchTechStacks() {
      try {
        const responses = await Promise.all([
          fetch('/data/tech/frontend.json'),
          fetch('/data/tech/backend.json'),
          fetch('/data/tech/database.json'),
          fetch('/data/tech/cloudServices.json'),
          fetch('/data/tech/versionControl.json'),
        ]);
        const data = await Promise.all(responses.map((res) => res.json()));
        setTechStacks({
          frontend: data[0],
          backend: data[1],
          database: data[2],
          cloudServices: data[3],
          versionControl: data[4],
        });
      } catch (error) {
        console.error('Failed to load tech stacks:', error);
      }
    }

    fetchTechStacks();
  }, []);

  function handleTechClick(tech) {
    setSelectedTech(tech);
  }

  return (
    <div>
      {['frontend', 'backend', 'database', 'cloudServices', 'versionControl'].map((category) => (
        <div key={category} className="mb-4">
          <h2 className="text-2xl font-bold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="flex flex-wrap">
            {techStacks[category].map((tech, index) => (
              <TechStackSection key={index} tech={tech} onTechClick={() => handleTechClick(tech)} />
            ))}
          </div>
        </div>
      ))}

      {selectedTech && <TechModal tech={selectedTech} onClose={() => setSelectedTech(null)} />}
    </div>
  );
}

export default TechStackList;
