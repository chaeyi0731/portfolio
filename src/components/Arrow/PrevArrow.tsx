import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // react-icons 라이브러리 사용

const PrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow text-left cursor-pointer" onClick={onClick}>
    <FaArrowLeft size={20} className="text-white" />
  </div>
);

export default PrevArrow;
