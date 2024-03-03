import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface PrevArrowProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void; // onClick prop 타입 명시
}

const PrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => (
  <div className="custom-prev-arrow text-left cursor-pointer" onClick={onClick}>
    <FaArrowLeft size={20} className="text-white" />
  </div>
);

export default PrevArrow;
