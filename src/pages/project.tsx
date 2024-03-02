// pages/projects.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  id: number;
  name: string;
  githubURL?: string; // GitHub URL은 선택적
  projectURL?: string; // 프로젝트 URL도 선택적
  blogURL?: string; // 블로그 URL도 선택적
  image?: string; // 프로젝트 이미지 URL 추가, 선택적
  frontend: { technologies: string[] };
  backend?: { technologies: string[] }; // 백엔드 기술 목록 선택적
  database?: { technologies: string[] }; // 데이터베이스 기술 목록 선택적
  deployment?: { technologies: string[] }; // 배포 기술 목록 선택적
  description: string;
}

interface ProjectsPageProps {
  projects: Project[];
}

export async function getStaticProps() {
  const projectsData = await import('../../public/data/project.json');
  console.log(projectsData); // 이렇게 데이터 구조 확인
  return {
    props: {
      projects: projectsData.projects || [],
    },
  };
}

function ProjectsPage({ projects }) {
  // react-slick 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {projects &&
          projects.map((project) => (
            <div key={project.id} className="p-6 rounded-lg shadow-lg mt-80">
              <div className="flex flex-row items-center">
                {project.image && <img src={project.image} alt={project.name} className="rounded-md mb-4 w-1/2 mr-4" />}
                <div className="w-1/2">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.blogURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                  >
                    Read More
                  </a>
                  {project.githubURL && (
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 inline-block bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              <ul className="mt-4">
                {project.frontend.technologies.concat(project.backend.technologies, project.database.technologies).map((tech, index) => (
                  <li key={index} className="text-gray-600">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default ProjectsPage;
