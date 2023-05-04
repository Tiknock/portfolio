import React, { useState, useEffect } from "react";

const DownIcon = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".presentation-section");
      if (header) {
        const { top } = header.getBoundingClientRect();
        setIsHeaderVisible(top >= 0 && top <= window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {isHeaderVisible ? (
        <div className="down-up-icon down-icon">
          <a href="#about">
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      ) : (
        <div className="down-up-icon up-icon">
          <a href="#home">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default DownIcon;
