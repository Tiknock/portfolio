import React from "react";
import Slider from "./Slider";
import projects from "../../assets/achievements.json";

const Achievements = () => {
  return (
    <section id="achievements">
      <h2>Achievements</h2>
      <Slider projects={projects} />
    </section>
  );
};

export default Achievements;
