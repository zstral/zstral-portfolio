'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Projects = ({
  projects = [
    {
      id: 1,
      title: 'Sin contenido',
      imgSrc: '/images/assets/js.png',
      imgAlt: 'Sin contenido',
      link: '#',
    },
    {
      id: 2,
      title: 'Sin contenido',
      imgSrc: '/images/assets/js.png',
      imgAlt: 'Sin contenido',
      link: '#',
    },
    {
      id: 3,
      title: 'Sin contenido',
      imgSrc: '/images/assets/js.png',
      imgAlt: 'Sin contenido',
      link: '#',
    },
    {
      id: 4,
      title: 'Sin contenido',
      imgSrc: '/images/assets/js.png',
      imgAlt: '...',
      link: '#',
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const visibleProjects = useMemo(
    () => projects.slice(currentIndex, currentIndex + projectsPerPage),
    [currentIndex, projects]
  );

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    }
  };

  const handleDotClick = (pageIndex) => {
    setCurrentIndex(pageIndex * projectsPerPage);
  };

  // Variantes de animación
  const variants = {
    enter: { x: 20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  };

  return (
    <div className="w-full col-span-full px-4 py-6">
      {/* Sección del slider */}
      <div className="flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-row gap-4"
            >
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="project flex flex-col justify-center w-[28vw] min-w-[250px] h-[8vh] bg-[#212121] hover:bg-[#303030] p-4 rounded-[20px] shadow-md"
                >
                  <a
                    className="flex items-center"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="rounded-full"
                      src={project.imgSrc}
                      alt={project.imgAlt}
                      width={28}
                      height={28}
                    />
                    <p className="ml-2 text-sm">{project.title}</p>
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles de navegación */}
        {totalPages > 1 && (
          <div className="flex items-center space-x-4 mt-4">
            <Button
              icon="chevron_left"
              text=""
              shape="rounded-full"
              bgcolor={currentIndex === 0 ? 'bg-gray-500' : 'bg-gray-700'}
              hover={currentIndex === 0 ? '' : 'hover:bg-gray-600'}
              width="2rem"
              height="2rem"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            />
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => handleDotClick(pageIndex)}
                  className={`w-3 h-3 rounded-full ${
                    pageIndex === Math.floor(currentIndex / projectsPerPage)
                      ? 'bg-blue-500'
                      : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <Button
              icon="chevron_right"
              text=""
              shape="rounded-full"
              bgcolor={
                currentIndex + projectsPerPage >= projects.length
                  ? 'bg-gray-500'
                  : 'bg-gray-700'
              }
              hover={
                currentIndex + projectsPerPage >= projects.length
                  ? ''
                  : 'hover:bg-gray-600'
              }
              width="2rem"
              height="2rem"
              onClick={handleNext}
              disabled={currentIndex + projectsPerPage >= projects.length}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;