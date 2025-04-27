import { useEffect, useRef, useState } from "react";

import { dropDown } from "src/app/images";

import "./index.css";

interface DropDownProps {
  arr: {
    label: string;
    queryName: string;
    options: Array<{
      value: string | number | null;
      label: string;
    }>;
  };
  label: string;
  onChange: (value: any) => void;
}

export const DropDown: React.FC<DropDownProps> = ({ arr, label, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(label);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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

  const handleSelect = (value: string | number | null, label: string) => {
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
        {arr.options.map((item, index) => {
          return <li key={index} onClick={() => handleSelect(item.value, item.label)}>{item.label}</li>;
        })}
      </ul>
    </div>
  );
};
