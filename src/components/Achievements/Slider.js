import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";
import ModaleVideo from "./ModaleVideo";

const Slider = ({ projects }) => {
  // carousel to display projects
  const { i18n } = useTranslation("en", { useSuspense: false });
  const [isWindowSmall, setIsWindowSmall] = useState(window.innerWidth < 768);

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
  console.log(projects);
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
            <a target="_blank" href={project.code}>
              <i className="fa-brands fa-github"></i>
            </a>
          </h3>
          <ul>
            {project.technos.map((techno) => (
              <li key={techno}>{techno}</li>
            ))}
          </ul>
          {project.url ? (
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.img} alt={project.title} />
            </a>
          ) : (
            <ModaleVideo project={project} />
          )}
          {i18n.language === "fr" ? (
            <p>{project.descriptionFr}</p>
          ) : (
            <p>{project.descriptionEn}</p>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
