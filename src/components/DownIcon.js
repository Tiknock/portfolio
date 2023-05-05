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
        <a id="downbtn" href="#about">
          <div className="down-up-icon down-icon">
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </a>
      ) : (
        <a id="upbtn" href="#home">
          <div className="down-up-icon up-icon">
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </a>
      )}
    </div>
  );
};

export default DownIcon;
