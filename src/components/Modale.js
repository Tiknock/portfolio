import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "20%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modale = () => {
  const { t } = useTranslation("en", { useSuspense: false });

  // modal for legal notices
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
      <li className="modale-btn" onClick={openModal}>
        {t("footer.3")}
      </li>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modale-container" id="footer-modale-container">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>MENTIONS LÉGALES</h2>
          <button onClick={closeModal}>
            <i className="fa-regular fa-circle-xmark"></i>
          </button>

          <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance en l'économie numérique, il est précisé aux
            utilisateurs du site Lolita Danancher l'identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
          <h3>Edition du site</h3>
          <p>
            Le présent site, accessible à l’URL https://lolitadanancher.com («
            le Site »), est édité par :
          </p>
          <p>
            Lolita Danancher, résidant en Rhône-Alpes, de nationalité Française
            (France), née le 23/08/1995,
          </p>
          <h3>Hébergement</h3>
          <p>
            Le site est hébergé par la société Ionos, 1&1 Internet SARL 1&1, 7,
            place de la Gare, BP 70109, 57200 Sarreguemines Cedex.
          </p>
          <h3>Directrice de publication</h3>
          <p>La Directrice de la publication du Site est Lolita Danancher.</p>
          <h3>Me contacter</h3>
          <p>Par téléphone : +33681177109</p>
          <p>Par email : lolita.danancher@wanadoo.fr</p>
        </div>
      </Modal>
    </div>
  );
};

export default Modale;
