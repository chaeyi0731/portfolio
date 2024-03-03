// TechStackList.client.tsx
import React, { useState, useEffect } from 'react';
import TechModal from '../Modal/TechModal';
import TechStackSection from './TechStackSection';

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
    <div className="mt-56 flex flex-row ">
      {['frontend', 'backend', 'database', 'cloudServices', 'versionControl'].map((category) => (
        <div key={category} className="flex flex-col items-center mb-4 bg-white text-gray-700 w-60 mr-5 rounded-xl ">
          <div>
            <h2 className="text-2xl font-bold mb-20 mt-9 text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          </div>
          <div className="flex flex-wrap mb-20 items-center justify-center">
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
