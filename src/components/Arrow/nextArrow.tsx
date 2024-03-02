import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // react-icons 라이브러리 사용

const NextArrow = ({ className, style, onClick }) => (
  <div className={`${className} custom-next-arrow`} style={{ ...style, display: 'block' }} onClick={onClick}>
    <FaArrowRight size={30} />
  </div>
);

export default NextArrow;
