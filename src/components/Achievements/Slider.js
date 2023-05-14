import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ModaleVideo from "./ModaleVideo";
import { useTranslation } from "react-i18next";

const Slider = ({ projects }) => {
  const { t } = useTranslation("en", { useSuspense: false });

  const [isWindowSmall, setIsWindowSmall] = useState(window.innerWidth < 768);
  const [projectDescription, setProjectDescription] = useState("");

  useEffect(() => {
    function handleResize() {
      setIsWindowSmall(window.innerWidth < 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const projH3 = document.querySelector("#achievements > h2").textContent;
    if (projH3 === "Achievements") {
      setProjectDescription("descriptionEn");
    } else {
      setProjectDescription("descriptionFr");
    }
  }, [t]);

  const setSlidesPerview = () => {
    return isWindowSmall ? 1 : 2;
  };

  return (
    <Swiper
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
                <p>{project[projectDescription]}</p>
              </a>
            </div>
          ) : (
            <ModaleVideo
              project={project}
              projectLanguage={project[projectDescription]}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
