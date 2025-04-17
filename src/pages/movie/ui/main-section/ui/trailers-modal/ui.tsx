import { FC } from "react";

import Modal from "react-modal";
import { close } from "src/app/images/index";

import "./index.css";

interface ModalTrailerProps {
  trailerUrl?: string;
  isModalOpen: boolean;
  handleClickClose: () => void;
}

export const ModalTrailer: FC<ModalTrailerProps> = ({
  trailerUrl,
  isModalOpen,
  handleClickClose,
}) => {
  return (
    <Modal
      className="modal"
      overlayClassName="overlayModal"
      isOpen={isModalOpen}
      onRequestClose={handleClickClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <button className="modalButton" type="button" onClick={handleClickClose}>
        <img src={close} alt="close" />
      </button>
      <iframe
        title="trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={`${trailerUrl}?autoplay=1`}
      />
    </Modal>
  );
};
