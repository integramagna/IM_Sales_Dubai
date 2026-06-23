"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './ProjectsGrid.module.css';
import Image from 'next/image';
import one from './first.webp';
import two from './second1.webp';
import three from './third1.webp';
import four from './fourth1.webp';

const ArrowIcon = () => (
 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.20984 1.2511L13.7433 1.2511L13.7433 12.7845M12.9424 2.05203L1.24872 13.7457" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);

const CloseIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.9499 18.1374C17.2782 18.4656 17.8104 18.4656 18.1386 18.1374C18.4668 17.8092 18.4668 17.2771 18.1386 16.9488L10.4375 9.24807L17.8664 1.81953C18.1946 1.4913 18.1946 0.959153 17.8664 0.630932C17.5381 0.302711 17.006 0.30271 16.6777 0.630931L9.24881 8.05948L2.09182 0.902817C1.76358 0.574596 1.2314 0.574596 0.903168 0.902817C0.57493 1.23104 0.57493 1.76319 0.903166 2.09141L8.06017 9.24807L0.630941 16.6769C0.302705 17.0052 0.302705 17.5373 0.630941 17.8655C0.959178 18.1938 1.49135 18.1938 1.81959 17.8655L9.24882 10.4367L16.9499 18.1374Z" fill="black" />
  </svg>
);

const PrevArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 40 40">
    <path fill="#363636" d="M0,20c0,11,9,20,20,20s20-9,20-20S31,0,20,0,0,9,0,20h0Z" />
    <path fill="#fff" d="M10.59,19.39c-.35.35-.35.87,0,1.21l5.55,5.55c.35.35.87.35,1.21,0s.35-.87,0-1.21l-4.94-4.94,4.94-4.94c.35-.35.35-.87,0-1.21s-.87-.35-1.21,0c0,0-5.55,5.55-5.55,5.55ZM11.2,20.87h18.47v-1.73H11.2v1.73Z" />
  </svg>
);

const NextArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 40 40">
    <path fill="#363636" d="M40,20C40,9,31,0,20,0S0,9,0,20s9,20,20,20,20-9,20-20h0Z" />
    <path fill="#fff" d="M29.41,20.61c.35-.35.35-.87,0-1.21l-5.55-5.55c-.35-.35-.87-.35-1.21,0s-.35.87,0,1.21l4.94,4.94-4.94,4.94c-.35.35-.35.87,0,1.21s.87.35,1.21,0c0,0,5.55-5.55,5.55-5.55ZM28.8,19.13H10.33v1.73h18.47v-1.73Z" />
  </svg>
);


const projects = [
  {
    src: one,
    title: 'Surge',
    // tags: 'Branding | Food',
    tags: 'Checkout completion up from 31% to 50%',
    description: 'UI/UX Design and Mobile Application Development crafted for White Mantis Dubai.',
    popupImages: [
      { type: 'landscape', src: '/assets/images/projects/royal/first.png' },
      { type: 'double',    src: ['/assets/images/projects/royal/first22.webp', '/assets/images/projects/royal/first33.webp'] },
      { type: 'double',    src: ['/assets/images/projects/royal/first44.webp', '/assets/images/projects/royal/first55.webp'] },
      { type: 'landscape', src: '/assets/images/projects/royal/first66.webp' },
    ],
  },
  {
    src: two,
    title: 'Al-Huzaifa',
    // tags: 'Branding | Lifestyle',
    tags: 'Time-to-first-value cut from 12 min-5 min',
    description: 'UI/UX Design and Mobile Application Development crafted for White Mantis Dubai.',
    popupImages: [
      { type: 'landscape', src: '/assets/images/projects/magic/1.webp' },
      { type: 'double',    src: ['/assets/images/projects/magic/2.webp', '/assets/images/projects/magic/3.webp'] },
      { type: 'square',   src: '/assets/images/projects/magic/4.webp' },
      { type: 'double',   src: ['/assets/images/projects/magic/5.webp', '/assets/images/projects/magic/6.webp'] },
    ],
  },
  {
    src: three,
    title: 'Plan B',
    // tags: 'Branding | Hospitality',
    tags: '3× more form submissions in week one',
    description: 'UI/UX Design and Mobile Application Development crafted for White Mantis Dubai.',
    popupImages: [
      { type: 'landscape', src: '/assets/images/projects/neelam/1.webp' },
      { type: 'double',    src: ['/assets/images/projects/neelam/2.webp', '/assets/images/projects/neelam/3.webp'] },
      { type: 'square',   src: '/assets/images/projects/neelam/4.webp' },
      { type: 'double',   src: ['/assets/images/projects/neelam/5.webp', '/assets/images/projects/neelam/6.webp'] },
      { type: 'square',   src: '/assets/images/projects/neelam/7.webp' },
    ],
  },
  {
    src: four,
    title: 'ADND',
    // tags: 'Branding | Education',
    tags: '3× more form submissions in week once',
    description: 'UI/UX Design and Mobile Application Development crafted for White Mantis Dubai.',
    popupImages: [
      { type: 'landscape', src: '/assets/images/projects/pres/1.webp' },
      { type: 'double',    src: ['/assets/images/projects/pres/2.webp', '/assets/images/projects/pres/3.webp'] },
      { type: 'square',   src: '/assets/images/projects/pres/4.webp' },
      { type: 'double',   src: ['/assets/images/projects/pres/5.webp', '/assets/images/projects/pres/6.webp'] },
      { type: 'square',   src: '/assets/images/projects/pres/7.webp' },
    ],
  },
];


const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const popupContentRef = useRef(null);

  const openPopup = useCallback((project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  }, []);

  const closePopup = useCallback(() => setSelectedProject(null), []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => setCursorVisible(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = useCallback(() => {
    const next = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[next]);
    setCurrentIndex(next);
    if (popupContentRef.current) popupContentRef.current.scrollTop = 0;
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prev]);
    setCurrentIndex(prev);
    if (popupContentRef.current) popupContentRef.current.scrollTop = 0;
  }, [currentIndex]);

  const isPopupOpen = selectedProject !== null;
  useEffect(() => {
    if (isPopupOpen) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'hidden';
      const onEsc = (e) => { if (e.key === 'Escape') closePopup(); };
      window.addEventListener('keydown', onEsc);
      return () => window.removeEventListener('keydown', onEsc);
    } else {
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
    }
  }, [isPopupOpen]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.top}>
            <h3>
              Work that
              <span className={styles.spantext}> delivered results</span>
            </h3>
          </div>
          <div className={styles.bottom}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => openPopup(project, index)}
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
                onMouseMove={handleMouseMove}
              >
                <div className={styles.cardImage}>
                  <Image src={project.src} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardContentleft}>
                    <p>{project.title}</p>
                    <h3>{project.tags}</h3>
                  </div>
                  <div
                    className={styles.cardContentright}
                    role="button"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className={styles.popup}
          onClick={closePopup}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <div className={styles.popupContent} ref={popupContentRef} onClick={(e) => e.stopPropagation()}>
            <div className={styles.workInternalHeader}>
              <button className={styles.closeButton} onClick={closePopup} aria-label="Close">
                <CloseIcon />
              </button>
            </div>

            <div className={styles.workInternalMain}>
              <div className={styles.workHeadContent}>
                <h2 className={styles.workTitle}>{selectedProject.title}</h2>
                <div className={styles.workDescription}>
                  <p>{selectedProject.description}</p>
                </div>
              </div>

              {selectedProject.popupImages.map((image, i) => {
                if (image.type === 'landscape') return (
                  <div key={i} className={styles.popupLandscape}>
                    <img src={image.src} alt={`${selectedProject.title} ${i + 1}`} className={styles.landscapeImage} />
                  </div>
                );
                if (image.type === 'double') return (
                  <div key={i} className={styles.popupTwoImages}>
                    {image.src.map((s, j) => (
                      <img key={j} src={s} alt={`${selectedProject.title} ${i + 1}-${j + 1}`} className={styles.twoImage} />
                    ))}
                  </div>
                );
                if (image.type === 'square') return (
                  <div key={i} className={styles.popupSingleImage}>
                    <img src={image.src} alt={`${selectedProject.title} ${i + 1}`} className={styles.singleImage} />
                  </div>
                );
                return null;
              })}
            </div>

            <div className={styles.popupNavigation}>
              <button className={styles.arrowLeft} onClick={(e) => { e.stopPropagation(); handlePrevious(); }} aria-label="Previous project">
                <PrevArrow />
              </button>
              <button className={styles.arrowRight} onClick={(e) => { e.stopPropagation(); handleNext(); }} aria-label="Next project">
                <NextArrow />
              </button>
            </div>
          </div>
        </div>
      )}

      {cursorVisible && (
        <div
          className={styles.customCursor}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className={styles.exploreCursorCircle}>
            <span className={styles.exploreCursorText}>Explore</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;
