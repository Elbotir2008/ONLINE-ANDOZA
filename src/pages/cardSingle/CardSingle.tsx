import "./cardSingle.scss"
import React, { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  selectLan: string;
  setSelectLan: Dispatch<SetStateAction<string>>;
}
const CardSingle: React.FC<HeaderProps> = ({ dark, setDark, selectLan, setSelectLan }) => {
  return (
    <div>
    </div>
  )
}

export default CardSingle