import "./aboutUs.scss"
interface AndozalarProps {
  dark: boolean;
  selectLan: string;
}
const AboutUs: React.FC<AndozalarProps> = ({ dark, selectLan }) => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h1 style={dark ? { color: "#E0E0E0" } : {}}>
          {selectLan == "uz" ? "BIZ HAQIMIZDA" : ""}
          {selectLan == "en" ? "ABOUT US" : ""}
          {selectLan == "ru" ? "О НАС" : ""}
        </h1>
        <div className="about-tools flex-class">
          <img src="./aboutUs.svg" alt="Error" />
          <div className="about-texts">
            <h2 style={dark ? { color: "#E0E0E0" } : {}}>
              {selectLan == "uz" ? "Inavatsion rivojlanish agentligi hamkorligi" : ""}
              {selectLan == "en" ? "Cooperation of the Innovation Development Agency" : ""}
              {selectLan == "ru" ? "Сотрудничество Агентства инновационного развития" : ""}
            </h2>
            <p style={dark ? { color: "#ccc" } : {}}>
              {selectLan == "uz" ? "Online andozalar, dizayn va kiyimlar konstruktorlarini online tarzda yaratib, bu xizmatlarni online taklif qilamiz. Bizni xizmatlardan tez, oson va qulay usulda foydalanish mumkin va o'zingizga ma'qul bo'lgan narxlarda xarid qilishingiz mumkin. Sizga ma'qul bo'lgan dizayndagi kiyimni profesanal xodimlarimiz tezda tayyorlab, manzilingizgacha yetqazib berishadi." : ""}
              {selectLan == "en" ? "We offer these services online by creating online templates, designs and clothing designers. You can use our services in a fast, easy and convenient way, and you can buy them at the prices that suit you. Our professional staff will quickly prepare the clothes of your choice and deliver them to your address." : ""}
              {selectLan == "ru" ? "Мы предлагаем эти услуги онлайн, создавая онлайн-шаблоны, дизайны и дизайнеры одежды. Вы можете воспользоваться нашими услугами быстро, просто и удобно, а также приобрести их по подходящим для вас ценам. Наши профессиональные сотрудники быстро подготовят выбранную вами одежду и доставят ее по вашему адресу." : ""}
            </p>
            <a href="#contact"><button>
              {selectLan == "uz" ? "BIZ BILAN BOG’LANING" : ""}
              {selectLan == "en" ? "CONTACT US" : ""}
              {selectLan == "ru" ? "СВЯЗАТЬСЯ С НАМИ" : ""}
            </button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs