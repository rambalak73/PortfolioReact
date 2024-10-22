import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaPhp } from 'react-icons/fa'; // Add more icons as needed

// Reusable ProjectCard Component
const ProjectCard = ({ imgSrc, title, description, techStack, link }) => {
  return (
    <div className="relative group bg-gray-800 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={imgSrc}
        alt={`${title} Project`}
        className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
      />
      <div className="p-6">
        <h3 className="text-3xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
       
        <div className="flex space-x-4 mb-4">
          {techStack.map((Icon, index) => (
            <Icon key={index} className="text-2xl" />
          ))}
        </div>
          <a href={link} className="inline-block text-blue-400 hover:text-blue-600 transition-colors duration-300">View Project &rarr;</a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: 'Wanderlust',
      description: 'An online platform connecting travelers with unique stays and experiences worldwide.',
      imgSrc: '/ProjectImg/p1.png',
      techStack: [FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase],
      link: '#'
    },
    {
      title: 'ShopEase',
      description: 'A seamless eCommerce platform offering enhanced shopping experiences.',
      imgSrc: '/ProjectImg/p2.png',
      techStack: [FaHtml5, FaCss3Alt, FaReact,FaPhp],
      link: '#'
    },
    {
      title: 'Portfolio',
      description: 'A personal portfolio showcasing projects and skills using React and Tailwind CSS.',
      imgSrc: '/ProjectImg/p3.png',
      techStack: [FaHtml5, FaCss3Alt, FaReact, FaJs],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index} 
              imgSrc={project.imgSrc} 
              title={project.title} 
              description={project.description} 
              techStack={project.techStack} 
              link={project.link} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
