import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ projects }) => {
  console.log(projects);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
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
          <p>{project.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
