import React from "react";
import { useTranslation } from "react-i18next";
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

const Modale = () => {
  const { t } = useTranslation("en", { useSuspense: false });

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
        <div className="modale-container">
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
            Le présent site, accessible à l’URL http://lolitadanancher.com (le
            Site »), est édité par :
          </p>
          <p>
            Lolita Danancher, résidant 1 chemin de la creuse 42660 Le Bessat, de
            nationalité Française (France), née le 23/08/1995,
          </p>
          <h3>Hébergement</h3>
          <p>
            Le site est hébergé par la Société Infomaniak, rue Eugène-Marziano
            25, 1227 Genève, Suisse (contact téléphonique : +41 22 820 35 44.).
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
