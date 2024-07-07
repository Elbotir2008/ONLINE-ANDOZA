import "./category.scss"

interface AndozalarProps {
  dark: boolean;
  selectLan: string;
}
const Category: React.FC<AndozalarProps> = (
  {
    dark,
    selectLan
  }
) => {
  return (
    <section className="category-section" id="category">
      <div className="container">
        <h1 style={dark ? { color: "#E0E0E0" } : {}}>
          {selectLan == "uz" ? "KATEGORIYALAR" : ""}
          {selectLan == "en" ? "CATEGORIES" : ""}
          {selectLan == "ru" ? "КАТЕГОРИИ" : ""}
        </h1>
        <div className="category-cards grid-class">
          <div className="category-card">
            <div className="innerCard">
              <div className="frontSide">
                <img src="./personImg1.svg" alt="Error" />
              </div>
              <div className="backSide">
                <p className="title">
                  {selectLan == "uz" ? "ERKAKLAR BO'LIMI" : ""}
                  {selectLan == "en" ? "MEN'S SECTION " : ""}
                  {selectLan == "ru" ? "МУЖСКАЯ СЕКЦИЯ" : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="innerCard">
              <div className="frontSide">
                <img src="./personImg2.svg" alt="Error" />
              </div>
              <div className="backSide">
                <p className="title">
                  {selectLan == "uz" ? "AYOLLAR BO'LIMI" : ""}
                  {selectLan == "en" ? "WOMEN'S SECTION" : ""}
                  {selectLan == "ru" ? "ЖЕНСКАЯ СЕКЦИЯ" : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="innerCard">
              <div className="frontSide">
                <img src="./personImg3.svg" alt="Error" />
              </div>
              <div className="backSide">
                <p className="title">
                  {selectLan == "uz" ? "BOLALAR BO'LIMI" : ""}
                  {selectLan == "en" ? "CHILDREN'S DEPARTMENT" : ""}
                  {selectLan == "ru" ? "ДЕТСКИЙ ОТДЕЛЕНИЕ" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category