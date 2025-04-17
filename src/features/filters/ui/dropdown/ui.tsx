import { useEffect, useRef, useState } from "react";

import { dropDown } from "src/app/images";


import "./index.css";

export const DropDown = ({ arr, label, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(label);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false); // Закрываем окно, если клик был вне блока
    }
  };

  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);

    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(label);
    onChange(value);
    setIsOpen(false);
  };


  return (
    <div className="dropdown" ref={modalRef}>
      <button className="dropButton" onClick={handleClick}>
        <p>{selectedValue}</p>
        <img src={dropDown} alt="" />
      </button>
      <ul
        className="dropdown-content"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {arr.options.map((item) => {
          return <li onClick={() => handleSelect(item.value, item.label)}>{item.label}</li>;
        })}
      </ul>
    </div>
  );
};
