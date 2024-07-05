import "./hero.scss"
interface HeroProps {
  dark: boolean;
  selectLan: string;
}
const Hero: React.FC<HeroProps> = (
  {
    dark,
    selectLan
  }
) => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-flex flex-class">
          <div className="hero-texts">
            <h1 style={dark ? { color: "#E0E0E0" } : {}}>
              {selectLan == "uz" ? "Tez, qulay va sifatli" : ""}
              {selectLan == "en" ? "Fast, convenient and quality" : ""}
              {selectLan == "ru" ? "Быстро, удобно и качественно" : ""}
            </h1>
            <p style={dark ? { color: "#ccc" } : {}}>  
              {selectLan == "uz" ? "Bizning bu sayitda turli xildagi andozalarni topishingiz va o'zingizga mosini sotib olishingiz mumkin. Ko'ring va zavq oling!" : ""}
              {selectLan == "en" ? "On our site you can find different templates and buy the one that suits you. Have a look and enjoy!" : ""}
              {selectLan == "ru" ? "На нашем сайте вы можете найти разные шаблоны и купить тот, который подойдет именно вам. Посмотрите и наслаждайтесь!" : ""}
            </p>
            <a href="#contact"><button>
              {selectLan == "uz" ? "BIZ BILAN BOG’LANING" : ""}
              {selectLan == "en" ? "CONTACT US" : ""}
              {selectLan == "ru" ? "СВЯЗАТЬСЯ С НАМИ" : ""}
            </button></a>
            <a href="#about"><button>
              {selectLan == "uz" ? "BIZ HAQIMIZDA" : ""}
              {selectLan == "en" ? "ABOUT US" : ""}
              {selectLan == "ru" ? "О НАС" : ""}
            </button></a>
          </div>
          <img src="./hero.svg" alt="Error" />
        </div>
      </div>
    </section>
  )
}

export default Hero