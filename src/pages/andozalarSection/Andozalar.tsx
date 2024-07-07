import { useEffect, useState } from "react"
import axios from "axios"
import "./andozalar.scss"
import { Link } from "react-router-dom";

interface AndozalarProps {
  dark: boolean;
  selectLan: string;
}
const Andozalar: React.FC<AndozalarProps> = (
  {
    dark,
    selectLan
  }
) => {
  const [andozaArr, setAndozaArr] = useState([])

  const fetchAndoza = async () => {
    try {
      let res = await axios.get("https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/ForweApi")
      let data = await res.data
      setAndozaArr(data)
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  const searchAndoza = async (query: string) => {
    try {
      let res = await axios.get(`https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/ForweApi?search=${query}`)
      let data = await res.data
      setAndozaArr(data)
    } catch (error) {
      console.log(error)
    }
  }

  const selectAndoza = async (selectValue: string) => {
    try {
      let res = await axios.get(`https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/ForweApi?search=${selectValue}`)
      let data = await res.data
      setAndozaArr(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAndoza()
  }, [])

  const getPlaceholderText = () => {
    switch (selectLan) {
      case "uz":
        return "Qidiruv...";
      case "ru":
        return "Идет поиск...";
      case "en":
        return "Searching...";
      default:
        return "Qidiruv...";
    }
  };

  return (
    <section className="anozalar-section" id="andozalar">
      <div className="container">
        <div className="andoza-texts">
          <h1 style={dark ? { color: "#E0E0E0" } : {}}>
            {selectLan == "uz" ? "ANDOZALAR" : ""}
            {selectLan == "en" ? "TEMPLATE" : ""}
            {selectLan == "ru" ? "ШАБЛОНЫ" : ""}
          </h1>
          <p style={dark ? { color: "#ccc" } : {}}>
            {selectLan == "uz" ? "Siz bu yerda har xil andozalarni ko'rishingiz, qidirishingiz, filterlashingiz mumkin. Tanlab ustiga bosib, andoza haqida ma'lumot olsangiz bo'ladi" : ""}
            {selectLan == "en" ? "You can view, search, and filter various templates here. You can get information about the template by clicking on it" : ""}
            {selectLan == "ru" ? "Здесь вы можете просматривать, искать и фильтровать различные шаблоны. Информацию о шаблоне вы можете получить, нажав на него." : ""}
          </p>
        </div>
        <div className="andoza-search flex-class">
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder={getPlaceholderText()} onChange={(e) => searchAndoza(e.target.value)} type="search" className="input" />
          </div>

          <div className="radio-input">
            <form className="flex-class" onChange={(e: any) => selectAndoza(e.target.id)}>
              <input value="girls" name="value-radio" id="girls" type="radio" />
              <label htmlFor="girls">
                {selectLan == "uz" ? "Ayollar" : ""}
                {selectLan == "en" ? "Women" : ""}
                {selectLan == "ru" ? "Женщины" : ""}
              </label>
              <input value="man" name="value-radio" id="man" type="radio" />
              <label htmlFor="man">
                {selectLan == "uz" ? "Erkaklar" : ""}
                {selectLan == "en" ? "Men" : ""}
                {selectLan == "ru" ? "Люди" : ""}
              </label>
              <input value="boys" name="value-radio" id="boys" type="radio" />
              <label htmlFor="boys">
                {selectLan == "uz" ? "Bolalar" : ""}
                {selectLan == "en" ? "Children" : ""}
                {selectLan == "ru" ? "Дети" : ""}
              </label>
            </form>
          </div>
        </div>
        <div className="andoza-cards grid-class">
          {andozaArr.map((andoza: any) => (
            <Link to={`/cardSingle/${andoza.id}`} key={andoza.id}>
              <div className="andoza-card" style={dark ? { boxShadow: "none" } : {}}>
                <img src={andoza.image} alt="Error" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Andozalar