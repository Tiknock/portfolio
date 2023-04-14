import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";

const Slider = ({ projects }) => {
  const { i18n } = useTranslation("en", { useSuspense: false });

  console.log(projects);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <h3>{project.title}</h3>
          <ul>
            {project.technos.map((techno) => (
              <li>{techno}</li>
            ))}
          </ul>
          <img src={project.img} alt="Blabla" />
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
