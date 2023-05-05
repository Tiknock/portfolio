import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModaleVideo = ({ project, projectLanguage }) => {
  // if the project has no url, a modal opens with a demo video of the site
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div onClick={openModal}>
        <img src={project.img} alt={project.title} />
        {projectLanguage}
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modale-container">
            <h4 ref={(_subtitle) => (subtitle = _subtitle)}>
              Vidéo du projet : {project.title}
            </h4>
            <video width="500px" controls preload="auto" data-setup="{}">
              <source src={project.videomp4} type="video/mp4" />
              <source src={project.videowebm} type="video/webm" />
            </video>
            <button onClick={closeModal}>
              <i className="fa-regular fa-circle-xmark"></i>
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ModaleVideo;
