// pages/projects.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '@/components/Arrow/nextArrow';
import PrevArrow from '@/components/Arrow/PrevArrow';
import Image from 'next/image';
import { Project } from '../components/interface/Project';

interface ProjectsPageProps {
  projects: Project[];
}

export async function getStaticProps() {
  // JSON 파일 불러오기 및 타입 단언
  const projectsData = await import('../../public/data/project.json');
  const projects: Project[] = projectsData.default.projects;

  return {
    props: {
      projects,
    },
  };
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  // react-slick 슬라이더 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
  };

  return (
    <div>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="p-6 rounded-lg shadow-lg mt-40 bg-white">
            <div className="flex flex-row items-center">
              <div className="flex flex-col  items-center">
                <div>
                  <h3 className="text-5xl font-semibold mb-20 text-black">{project.name}</h3>
                </div>
                <div>{project.image && <Image src={project.image} alt={project.name} width={500} height={300} layout="responsive" objectFit="cover" className="rounded-lg" />}</div>
              </div>
              <div className="ml-20">
                <p className="text-gray-700 mb-4">{project.description}</p>
                {project.githubURL && (
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.blogURL && (
                  <a
                    href={project.blogURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-200 mt-4"
                  >
                    Read More
                  </a>
                )}
                {renderTechnologySections(project)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function renderTechnologySections(project: Project) {
  const sections = [
    { title: 'Frontend', technologies: project.frontend.technologies },
    { title: 'Backend', technologies: project.backend?.technologies || [] },
    { title: 'Database', technologies: project.database?.technologies || [] },
    { title: 'Deployment', technologies: project.deployment?.technologies || [] },
  ];

  return sections.map(
    (section, index) =>
      section.technologies.length > 0 && (
        <div key={index} className="mt-4">
          <h4 className="text-gray-700  font-bold">{section.title}:</h4>
          <ul>
            {section.technologies.map((tech, techIndex) => (
              <li key={techIndex} className="text-gray-600">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )
  );
}

export default ProjectsPage;
