'use client';

import React, { useRef, useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
import ProfileSection from '../components/ProfileSection';
import Introduction from '../components/myInfo/Introduction';
import ProjectsPage from './project';
import { Project } from '../components/interface/Project';

const TechStackList = dynamic(() => import('../components/TechStack/TechStackList.client').then((mod) => mod.default), { ssr: false });

function Main() {
  const [projects, setProjects] = useState<Project[]>([]); // Project 배열의 상태 관리

  const profileRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('../../public/data/project.json')
      .then((data: { projects: Project[] }) => {
        setProjects(data.projects); // 데이터 구조에 따라 접근 경로 조정 필요
      })
      .catch((error) => console.error('데이터를 읽어오는 것을 실패했습니다.', error));
  }, []);

  return (
    <>
      <Header profileRef={profileRef} techStackRef={techStackRef} introRef={introRef} titleRef={titleRef} projectRef={projectRef} />
      <div>
        <div ref={titleRef}>
          <div className="w-screen h-screen flex text-center justify-center items-center">
            <h1 className="text-5xl font-bold animate-bounce">안녕하세요! 이채이입니다 👋</h1>
          </div>
          <div className="w-screen h-screen flex  flex-col justify-center items-center" ref={profileRef}>
            <ProfileSection />
            <hr className="border-white mt-32 ml-48 w-3/4" />
          </div>
          <div ref={introRef} className="w-screen h-screen flex justify-center items-center -ml-52">
            <Introduction />
          </div>
          <div className="w-screen h-screen flex  justify-center items-center" ref={techStackRef}>
            <TechStackList />
          </div>
          <div ref={projectRef}>
            <ProjectsPage projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
