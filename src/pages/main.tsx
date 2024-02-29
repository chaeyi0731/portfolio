'use client';

import React, { useRef } from 'react';
import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
import ProfileSection from '../components/ProfileSection';
import Introduction from '../components/myInfo/Introduction';

const TechStackList = dynamic(() => import('../components/TechStack/TechStackList.client'), {
  ssr: false, // 서버 사이드 렌더링을 비활성화하여 클라이언트 사이드에서만 로드되도록 합니다.
});

function Main() {
  const profileRef = useRef(null);
  const techStackRef = useRef(null);
  const introRef = useRef(null);

  return (
    <>
      <Header profileRef={profileRef} techStackRef={techStackRef} introRef={introRef} />
      <div className="container mx-auto flex flex-col justify-center overflow-y-hidden " ref={profileRef}>
        <h1 className="text-5xl mt-32 font-bold text-center my-8">안녕하세요! 이채이입니다 👋</h1>
        <ProfileSection />
        <hr className="border-white w-2/3 my-10 ml-56 mt-32" />
        <div ref={introRef}>
          <Introduction />
        </div>
        <div ref={techStackRef}>
          <TechStackList />
        </div>
      </div>
    </>
  );
}

export default Main;
