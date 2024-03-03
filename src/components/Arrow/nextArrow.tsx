import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface NextArrowProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => (
  <div className="custom-next-arrow text-right cursor-pointer" onClick={onClick}>
    <FaArrowRight size={20} className="text-white" />
  </div>
);

export default NextArrow;
