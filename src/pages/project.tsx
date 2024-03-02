// pages/projects.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  id: number;
  name: string;
  githubURL?: string;
  projectURL?: string;
  blogURL?: string;
  image?: string;
  frontend: { technologies: string[] };
  backend?: { technologies: string[] };
  database?: { technologies: string[] };
  deployment?: { technologies: string[] };
  description: string;
}

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

function ProjectsPage({ projects }: ProjectsPageProps) {
  // react-slick 슬라이더 설정
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
        {projects.map((project) => (
          <div key={project.id} className="p-6 rounded-lg shadow-lg mt-80">
            <div className="flex flex-row items-center space-x-4">
              {project.image && <img src={project.image} alt={project.name} className="rounded-md mb-4 w-1/2" />}
              <div className="w-1/2">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
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
}

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
          <h4 className="font-bold">{section.title}:</h4>
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
