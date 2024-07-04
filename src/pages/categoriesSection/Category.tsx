import "./category.scss"
import { Dispatch, SetStateAction } from "react"

interface AndozalarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  selectLan: string;
  setSelectLan: Dispatch<SetStateAction<string>>;
}
const Category: React.FC<AndozalarProps> = (
  // { dark, setDark, selectLan, setSelectLan }
) => {
  return (
    <section className="category-section" id="category">
      <div className="container">
        <h1>KATEGORIYALAR</h1>
        <div className="category-cards flex-class">
          <div className="category-card">
            <div className="innerCard">
              <div className="frontSide">
                <img src="./personImg1.svg" alt="Error" />
              </div>
              <div className="backSide">
                <p className="title">ERKAKLAR BO'LIMI</p>
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="innerCard">
              <div className="frontSide">
                <img src="./personImg2.svg" alt="Error" />
              </div>
              <div className="backSide">
                <p className="title">AYOLLAR BO'LIMI</p>
              </div>
            </div>
          </div>
          <div className="category-card">
            <div className="innerCard">
              <div className="frontSide">
                <img src="./personImg3.svg" alt="Error" />
              </div>
              <div className="backSide">
                <p className="title">BOLALAR BO'LIMI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category