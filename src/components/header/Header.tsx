"use client"
import { useState } from "react";
import "./header.scss"
import React, { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  selectLan: string;
  setSelectLan: Dispatch<SetStateAction<string>>;
}
const Header: React.FC<HeaderProps> = (
  // { dark, setDark, selectLan, setSelectLan }
  ) => {
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [changeColor4, setChangeColor4] = useState(false);

  const handleLinkClick = (setColor1: boolean, setColor2: boolean, setColor3: boolean, setColor4: boolean) => {
    setChangeColor1(setColor1);
    setChangeColor2(setColor2);
    setChangeColor3(setColor3);
    setChangeColor4(setColor4);
  };
  return (
    <header id="home">
      <div className="container">
        <nav className="flex-class">
          <div className="nav-links">
            <ul className="flex-class">
              <li style={
                changeColor1
                  ? { textDecoration: "underline" }
                  : {}
              }><a href="#home"
                onClick={() => handleLinkClick(true, false, false, false)}
              >ASOSIY SAHIFA</a>
              </li>

              <li style={
                changeColor2
                  ? { textDecoration: "underline" }
                  : {}
              }><a href="#andozalar"
                onClick={() => handleLinkClick(false, true, false, false)}
              >ANDOZALAR</a>
              </li>

              <li style={
                changeColor3
                  ? { textDecoration: "underline" }
                  : {}
              }><a href="#about"
                onClick={() => handleLinkClick(false, false, true, false)}
              >FIRMA HAQIDA</a>
              </li>

              <li style={
                changeColor4
                  ? { textDecoration: "underline" }
                  : {}
              }><a href="#contact"
                onClick={() => handleLinkClick(false, false, false, true)}
              >BIZ BILAN BOG’LANING</a>
              </li>

              <h1 onClick={() => location.reload()}>ONLINE ANDOZA</h1>
            </ul>
          </div>
          <div className="nav-btns flex-class">
            <label className="switch">
              <input type="checkbox" />
              <div className="slider">
                <span>Dark</span>
                <span>Light</span>
              </div>
            </label>
            <div className="radio-inputs">
              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">UZBEK</span>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">RUSSIA</span>
              </label>

              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">ENGLISH</span>
              </label>
            </div>

            {/* <div className="search flex-class">
              <label htmlFor="search">
                <img src="./search.svg" alt="Error" />
              </label>
              <input type="text" id="search" placeholder="Izlash..." />
            </div> */}
            {/* <img src="./sunset.svg" alt="Error" /> */}
            {/* <img src="./Filter.svg" alt="Error" /> */}
            {/* <img src="./profile.svg" alt="Error" /> */}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header