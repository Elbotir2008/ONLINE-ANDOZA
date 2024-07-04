import "./hero.scss"
import React, { Dispatch, SetStateAction } from 'react';

interface HeroProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  selectLan: string;
  setSelectLan: Dispatch<SetStateAction<string>>;
}
const Hero: React.FC<HeroProps> = (
  // { dark, setDark, selectLan, setSelectLan }
  ) => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-flex flex-class">
          <div className="hero-texts">
            <h1>Tez, qulay va sifatli</h1>
            <p>Bizning bu sayitda turli xildagi andozalarni topishingiz va o'zingizga mosini sotib olishingiz mumkin. Ko'ring va zavq oling!</p>
            <button>BIZ BILAN BOG’LANING</button>
            <button>BIZ HAQIMIZDA</button>
          </div>
          <img src="./hero.svg" alt="Error" />
        </div>
      </div>
    </section>
  )
}

export default Hero