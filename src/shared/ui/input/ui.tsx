import type { InputHTMLAttributes, MouseEventHandler, ChangeEventHandler  } from 'react';

import { searchIcons } from 'src/assets/images';

import './index.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
 className?: string,
 classNameButton?: string
 type?: string,
 placeholder?: string,
 clickButton?: MouseEventHandler<HTMLButtonElement>,
 onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
}

export const Input: React.FC<InputProps> = ({
  className,
  classNameButton,
  type = 'text',
  placeholder,
  clickButton,
  onChange,
}) => (
  <div className="inputUi">
    <input type={type} className={className} placeholder={placeholder}  onChange={onChange} />
    <button type="button" className={classNameButton} onClick={clickButton}>
      <img src={searchIcons} alt="search" />
    </button>
  </div>
)
//props кнопки / суффикс