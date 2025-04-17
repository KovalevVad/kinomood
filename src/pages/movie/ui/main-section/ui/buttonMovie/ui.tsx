import clsx from "clsx";

import { ReactNode, useState } from "react";

import { ModalTrailer } from "../trailers-modal/ui";

import "./index.css";

interface buttonProps {
  classNameContainer?: string;
  children: ReactNode;
  type: "buttonMovie" | "buttonTrailer";
  trailerUrl?: string;
}

export const Button: React.FC<buttonProps> = ({
  classNameContainer,
  children,
  type,
  trailerUrl,
}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  };

  const handleClickClose = () => {
    setIsOpen(false)
  };

  return (
    <>
      {type === "buttonMovie" ? (
        <button
          type="button"
          className={clsx("buttonMovie", classNameContainer)}
        >
          {children}
        </button>
      ) : (
        <button
          type="button"
          className={clsx("buttonTrailer", classNameContainer)}
          onClick={handleClick}
        >
          {children}
        </button>
      )}
      <ModalTrailer trailerUrl={trailerUrl} isModalOpen={isOpen} handleClickClose={handleClickClose} />
    </>
  );
};
