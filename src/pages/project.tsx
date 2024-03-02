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
                <div className="ml-10">
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
                  <div>
                    <ul className="mt-4">
                      {project.frontend.technologies.concat(project.backend.technologies, project.database.technologies).map((tech, index) => (
                        <li key={index} className="text-gray-600">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default ProjectsPage;
