import { Dispatch, SetStateAction, useEffect, useState } from "react"
import axios from "axios"
import "./andozalar.scss"

interface AndozalarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  selectLan: string;
  setSelectLan: Dispatch<SetStateAction<string>>;
}
const Andozalar: React.FC<AndozalarProps> = ({ dark, setDark, selectLan, setSelectLan }) => {
  const [andozaArr, setAndozaArr] = useState([])

  const fetchAndoza = async () => {
    try {
      let res = await axios.get("https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/ForweApi")
      let data = await res.data
      setAndozaArr(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAndoza()
  }, [])
  return (
    <section className="anozalar-section" id="andozalar">
      <div className="container">
        <div className="andoza-texts">
          <h1>ANDOZALAR</h1>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className="andoza-search flex-class">
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Qidiruv..." type="search" className="input" />
          </div>

          <div className="radio-input">
            <input value="value-1" name="value-radio" id="value-1" type="radio" />
            <label htmlFor="value-1">Ayollar</label>
            <input value="value-2" name="value-radio" id="value-2" type="radio" />
            <label htmlFor="value-2">Erkaklar</label>
            <input value="value-3" name="value-radio" id="value-3" type="radio" />
            <label htmlFor="value-3">Bolalar</label>
          </div>
        </div>
        <div className="andoza-cards grid-class">
          {andozaArr.map((andoza: any, index: any) => (
            <div key={index} className="andoza-card">
              <img src={andoza.image} alt="Error" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Andozalar