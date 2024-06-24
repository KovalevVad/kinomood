import { useState } from "react";

import Modal from "react-modal";

interface ModalTrailerProps {
  trailerUrl?: string;
  isModalOpen?: boolean;
}

export const ModalTrailer: React.FC<ModalTrailerProps> = ({ trailerUrl, isModalOpen }) => {

  const [modalIsOpen, setModalIsOpen] = useState(isModalOpen ?? false);

  const isCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={isCloseModal}>
      <iframe
        title="trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={`${trailerUrl}?autoplay=1`}
      />
      <button type="button" onClick={isCloseModal}>
        Close Modal
      </button>
    </Modal>

  )
}


