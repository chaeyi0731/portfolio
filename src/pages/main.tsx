'use client';

import React, { useRef, useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
import ProfileSection from '../components/ProfileSection';
import Introduction from '../components/myInfo/Introduction';
import ProjectsPage from './project';

const TechStackList = dynamic(() => import('../components/TechStack/TechStackList.client'), {
  ssr: false, // 서버 사이드 렌더링을 비활성화하여 
});




function Main() {
  const [projects, setProjects] = useState([]);

  const profileRef = useRef(null);
  const techStackRef = useRef(null);
  const introRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    import('../../public/data/project.json')
      .then((data) => {
        setProjects(data.default.projects); // 데이터 구조에 따라 접근 경로 조정 필요
      })
      .catch((error) => console.error("Failed to load projects data", error));
  }, []);
  
  return (
    <>
      <Header profileRef={profileRef} techStackRef={techStackRef} introRef={introRef} titleRef={titleRef} />
      <div>
        <div className="container flex flex-col justify-center overflow-y-hidden " ref={titleRef}>
          <div className=" mt-80 h-96 w-screen text-center -ml-28 ">
            <h1 className="text-5xl mt-32 font-bold text-center  ">안녕하세요! 이채이입니다 👋</h1>
          </div>
          <div ref={profileRef}>
            <ProfileSection />
          </div>
          <hr className="border-white w-2/3 my-10 ml-56 mt-32" />
          <div ref={introRef}>
            <Introduction />
          </div>
          <div ref={techStackRef}>
            <TechStackList />
          </div>
          <ProjectsPage projects={projects} />
        </div>
      </div>
    </>
  );
}

export default Main;
