"use client";
import React, { useRef, useEffect } from "react";
import styles from "./ZoomImageGrid.module.css";


function ZoomImageGrid() {
const gallerySectionRef = useRef();
  const gridVideoRef = useRef();
  const column1Ref = useRef();
  const column2Ref = useRef();
  const fullPageVideoRef = useRef();

useEffect(() => {
    let mm;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/dist/ScrollTrigger")]).then(
      ([{ default: gsap }, { default: ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        mm = gsap.matchMedia();

        mm.add("(min-width: 960px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: gallerySectionRef.current,
              start: "top top",
              end: `+=${2 * window.innerHeight}`,
              pin: true,
              pinSpacing: true,
              scrub: 1,
            },
          });

          tl.to(gallerySectionRef.current, { scale: 1.8 })
            .to(gridVideoRef.current, { scale: 1 }, 0)
            .to(column1Ref.current, { y: 400 }, 0)
            .to(column2Ref.current, { y: 400 }, 0);

          return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          };
        });
      },
    );

 return () => {
      cancelled = true;
      if (mm) mm.revert();
    };
  }, []);

  useEffect(() => {
    const vids = [gridVideoRef.current, fullPageVideoRef.current].filter(Boolean);
    if (!vids.length) return;
    const observers = [];
    vids.forEach((video) => {
      video.muted = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
              obs.disconnect();
            }
          });
        },
        { rootMargin: "300px" },
      );
      obs.observe(video);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return (
    <>
      <div className={styles.galleryMain} style={{ height: "300vh", overflow: "hidden" }}>
        <section
          className={styles.gallerySection}
          ref={gallerySectionRef}
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div className={styles.gridSection}>
            <div className={styles.galleryContainer}>
              <div className={styles.galleryGrid}>
                <div>
                  <div
                    className={`${styles.column} ${styles.verticalMoveColumn}`}
                    ref={column1Ref}
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-2.webp"
                      className={styles.gridObjects}
                      alt="Designer sketching characters"
                    />
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-1.webp"
                      className={styles.gridObjects}
                      alt="Standing Designer working on a laptop"
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.column}>
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-5.webp"
                      className={styles.gridObjects}
                      alt="Ideation sketches of a Logo Design on a table"
                    />
                    <div
                      className={styles.animVideoMedia}
                      style={{ overflow: "hidden" }}
                    >
                  <video
                        playsInline
                        loop
                        muted
                        preload="none"
                        aria-label="video-player"
                        className={`${styles.gridObjects} ${styles.gridVideo}`}
                        poster="/assets/images/about/zoomImage/video-grid/about-us-team-work-video.webp"
                        title="Tabletop video of designers working together"
                        ref={gridVideoRef}
                      >
                        <source
                          src="/assets/images/about/zoomImage/video-grid/About-Us-Team-Work-Videomobile.mp4"
                          type="video/mp4"
                          media="(max-width: 959px)"
                        />
                        <source
                          src="/assets/images/about/zoomImage/video-grid/about-us-team-work-video.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-1.webp"
                      className={styles.gridObjects}
                      alt="BTS of a product photoshoot"
                    />
                  </div>
                </div>
                <div>
                  <div
                    className={`${styles.column} ${styles.verticalMoveColumn}`}
                    ref={column2Ref}
                  >
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-4.webp"
                      className={styles.gridObjects}
                      alt="Designer reading Start with why the book"
                    />
                    <img
                      src="/assets/images/about/zoomImage/video-grid/image-grid-6.webp"
                      className={styles.gridObjects}
                      alt="Designer working on a laptop with a view"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className={styles.fullPageVideoSection}>
            <div className={styles.fullPageVideoContainer}>
    <video
                playsInline
                loop
                muted
                preload="none"
                aria-label="video-player"
                className={styles.fullPageVideo}
                ref={fullPageVideoRef}
              
              >
                <source
                  src="/assets/images/about/zoomImage/video-grid/About-Us-Team-Work-Videomobile.mp4"
                  type="video/mp4"
                  media="(max-width: 959px)"
                />
                <source
                  src="/assets/images/about/zoomImage/video-grid/about-us-team-work-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default ZoomImageGrid;
