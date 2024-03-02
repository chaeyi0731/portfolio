import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // react-icons 라이브러리 사용

const NextArrow = ({ onClick }) => (
  <div className="custom-next-arrow text-right cursor-pointer" onClick={onClick}>
    <FaArrowRight size={20} className="text-white" />
  </div>
);

export default NextArrow;
