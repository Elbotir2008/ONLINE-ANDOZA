import { useState, useEffect } from "react";
import "./header.scss";
import React, { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  selectLan: string;
  setSelectLan: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({
  dark, setDark,
  selectLan, setSelectLan
}) => {
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (setColor1: boolean, setColor2: boolean, setColor3: boolean, setColor4: boolean) => {
    setChangeColor1(setColor1);
    setChangeColor2(setColor2);
    setChangeColor3(setColor3);
    setChangeColor4(setColor4);
  };


  return (
    <header className={isShrunk ? "shrink" : ""} style={dark ? { backgroundColor: "#121212" } : {}}>
      <div className="container" >
        <nav className="flex-class">
          <div className="nav-links">
            <ul className={`flex-class ${menuOpen ? 'open' : ''} ${dark ? 'dark' : ''}`}>
              <img src="/logoFirma.svg" className="logo" alt="Error" onClick={() => location.reload()} />
              <li style={
                changeColor1
                  ? { textDecoration: "underline" }
                  : {}
              }><a href="/#home" style={dark ? { color: "#E0E0E0" } : {}}
                onClick={() => handleLinkClick(true, false, false, false)}
              >
                  {selectLan == "uz" ? "ASOSIY SAHIFA" : ""}
                  {selectLan == "en" ? "MAIN PAGE" : ""}
                  {selectLan == "ru" ? "ГЛАВНАЯ СТРАНИЦА" : ""}
                </a>
              </li>

              <li style={
                changeColor2
                  ? { textDecoration: "underline" }
                  : {}
              }><a href="/#andozalar" style={dark ? { color: "#E0E0E0" } : {}}
                onClick={() => handleLinkClick(false, true, false, false)}
              >
                  {selectLan == "uz" ? "ANDOZALAR" : ""}
                  {selectLan == "en" ? "TEMPLATES" : ""}
                  {selectLan == "ru" ? "ШАБЛОНЫ" : ""}
                </a>
              </li>

              <li style={
                changeColor3
                  ? { textDecoration: "underline" }
                  : {}
              }><a href="/#about" style={dark ? { color: "#E0E0E0" } : {}}
                onClick={() => handleLinkClick(false, false, true, false)}
              >
                  {selectLan == "uz" ? "FIRMA HAQIDA" : ""}
                  {selectLan == "en" ? "ABOUT THE COMPANY" : ""}
                  {selectLan == "ru" ? "О КОМПАНИИ" : ""}
                </a>
              </li>

              <li style={
                changeColor4
                  ? { textDecoration: "underline" }
                  : {}
              }><a href="/#contact" style={dark ? { color: "#E0E0E0" } : {}}
                onClick={() => handleLinkClick(false, false, false, true)}
              >
                  {selectLan == "uz" ? "BIZ BILAN BOG’LANING" : ""}
                  {selectLan == "en" ? "CONTACT US" : ""}
                  {selectLan == "ru" ? "О СВЯЗАТЬСЯ С НАМИ" : ""}
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-btns flex-class">
            <form onChange={(e: any) => setDark(e.target.checked)}>
              <label className="switch">
                <input type="checkbox" />
                <div className="slider">
                  <span style={{ fontSize: "1.1rem" }}>
                    {selectLan == "uz" ? "Qora" : ""}
                    {selectLan == "en" ? "Dark" : ""}
                    {selectLan == "ru" ? "Черный" : ""}
                  </span>
                  <span style={{ fontSize: "1.1rem" }}>
                    {selectLan == "uz" ? "Oq" : ""}
                    {selectLan == "en" ? "Light" : ""}
                    {selectLan == "ru" ? "Белый" : ""}
                  </span>
                </div>
              </label>
            </form>
            <form className="flex-class" onChange={(e: any) => setSelectLan(e.target.id)}>
              <div className="radio-inputs" style={dark ? { height: "3.2rem" } : {}}>
                <label className="radio">
                  <input type="radio" name="radio" id="uz" defaultChecked />
                  <span className="name">UZBEK</span>
                </label>
                <label className="radio">
                  <input type="radio" name="radio" id="ru" />
                  <span className="name">RUSSIA</span>
                </label>

                <label className="radio">
                  <input type="radio" name="radio" id="en" />
                  <span className="name">ENGLISH</span>
                </label>
              </div>
            </form>
            <input type="checkbox" id="checkbox" onClick={() => setMenuOpen(!menuOpen)} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
            {selectLan == "uz" ? <img src="/logouz.png" id="myLogo" className="logouz" alt="Error" onClick={() => location.reload()} /> : ""}
            {selectLan == "ru" ? <img src="/logoru.png" id="myLogo" className="logoru" style={{ width: "20rem" }} alt="Error" onClick={() => location.reload()} /> : ""}
            {selectLan == "en" ? <img src="/logoen.png" id="myLogo" className="logoen" alt="Error" onClick={() => location.reload()} /> : ""}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
