import "./aboutUs.scss"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

interface AndozalarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  selectLan: string;
  setSelectLan: Dispatch<SetStateAction<string>>;
}
const AboutUs: React.FC<AndozalarProps> = (
  // { dark, setDark, selectLan, setSelectLan }
) => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h1>BIZ HAQIMIZDA</h1>
        <div className="about-tools flex-class">
          <img src="./aboutUs.svg" alt="Error" />
          <div className="about-texts">
            <span>Biz Haqimizda</span>
            <h2>Lorem ipsum is placeholder text </h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <a href="#contact"><button>BIZ BILAN BOG’LANING</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs