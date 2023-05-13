import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ModaleVideo from "./ModaleVideo";

const Slider = ({ projects }) => {
  // carousel to display projects
  const [isWindowSmall, setIsWindowSmall] = useState(window.innerWidth < 768);

  const projectLanguage = (project) => {
    if (
      localStorage.getItem("i18nextLng") ||
      localStorage.getItem("language")
    ) {
      if (
        localStorage.getItem("i18nextLng") === "fr-FR" ||
        localStorage.getItem("language") === "fr"
      ) {
        return <p>{project.descriptionFr}</p>;
      } else if (
        localStorage.getItem("i18nextLng") === "en-EN" ||
        localStorage.getItem("language") === "en"
      ) {
        return <p>{project.descriptionEn}</p>;
      }
    } else {
      return <p>{project.descriptionEn}</p>;
    }
  };
  useEffect(() => {
    // screen size management
    function handleResize() {
      setIsWindowSmall(window.innerWidth < 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const setSlidesPerview = () => {
    if (isWindowSmall) {
      return 1;
    } else {
      return 2;
    }
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={setSlidesPerview()}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <h3>
            {project.title}{" "}
            <a target="_blank" rel="noreferrer" href={project.code}>
              <i className="fa-brands fa-github"></i>
            </a>
          </h3>
          <ul>
            {project.technos.map((techno) => (
              <li key={techno}>{techno}</li>
            ))}
          </ul>
          {project.url ? (
            <div className="project-box">
              <a href={project.url} target="_blank" rel="noreferrer">
                <img src={project.img} alt={project.title} />
                {projectLanguage(project)}
              </a>
            </div>
          ) : (
            <ModaleVideo
              project={project}
              projectLanguage={projectLanguage(project)}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
