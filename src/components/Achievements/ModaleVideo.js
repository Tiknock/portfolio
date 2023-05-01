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

const ModaleVideo = ({ project }) => {
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
      <img src={project.img} alt={project.title} onClick={openModal} />
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
            <video src={project.video} width="500px" controls></video>
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
