// TechModal.tsx
import React from 'react';
import { Tech } from '../interface/Tech';
import Image from 'next/image';

interface TechModalProps {
  tech: Tech; // Tech 인터페이스 사용
  onClose: () => void; // 모달 닫기 함수
}

const TechModal: React.FC<TechModalProps> = ({ tech, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{tech.title}</h2>
        <Image src={tech.imageUrl} alt={tech.title} />
        <ul>
          {tech.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TechModal;
