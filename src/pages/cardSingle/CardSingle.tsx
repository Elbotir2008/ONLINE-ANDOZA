import { useParams } from "react-router-dom";
import "./cardSingle.scss"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Modal from '@mui/material/Modal';

interface HeaderProps {
  dark: boolean;
  selectLan: string;
}

const CardSingle: React.FC<HeaderProps> = (
  { dark, selectLan }
) => {
  const { id } = useParams<{ id: string }>();
  const [andoza, setAndoza] = useState<any>([]);
  const [boolean, setBoolean] = useState<boolean>(false);
  const [getApiUrl, setgetApiUrl] = useState<string>("");

  const getApi = () => {
    if (selectLan === "uz") {
      setgetApiUrl(`https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/ForweApi/${id}`);
    } else if (selectLan === "ru") {
      setgetApiUrl(`https://656a41cfde53105b0dd853c3.mockapi.io/api/v1/OnlineAndozaRus/${id}`);
    } else if (selectLan === "en") {
      setgetApiUrl(`https://668b0ea52c68eaf3211e8742.mockapi.io/api/v1/onlineOnline/${id}`);
    }
  }

  useEffect(() => {
    getApi();
  }, [selectLan, id]);

  useEffect(() => {
    const fetchAndozaDetail = async () => {
      try {
        let res = await axios.get(getApiUrl);
        let data = await res.data;
        setAndoza(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (getApiUrl) {
      fetchAndozaDetail();
    }
  }, [getApiUrl]);

  return (
    <section className="cardSingle">
      <div className="container">
        <div key={andoza.id} className="flex-class">
          <img src={andoza.image} alt="Error" />
          <div className="singleTexts">
            <h1>{andoza.price}</h1>
            <h2 style={dark ? { color: "#732f3c" } : {}}>
              {selectLan === "uz" ? "Ism:" : ""}
              {selectLan === "en" ? "Name:" : ""}
              {selectLan === "ru" ? "Имя:" : ""}
              <span style={dark ? { color: "#fff" } : {}}>{andoza.title}</span>
            </h2>
            <h3 style={dark ? { color: "#732f3c" } : {}}>
              {selectLan === "uz" ? "Turi:" : ""}
              {selectLan === "en" ? "Category:" : ""}
              {selectLan === "ru" ? "Тип:" : ""}
              <span style={dark ? { color: "#fff" } : {}}>{andoza.category}</span>
            </h3>
            <p style={dark ? { color: "#732f3c" } : {}}>
              {selectLan === "uz" ? "Izoh:" : ""}
              {selectLan === "en" ? "Description:" : ""}
              {selectLan === "ru" ? "Объяснение:" : ""}
              <span style={dark ? { color: "#fff" } : {}}>{andoza.description}</span>
            </p>
            <button onClick={() => setBoolean(!boolean)}>
              {selectLan === "uz" ? "Murojaat qilish" : ""}
              {selectLan === "en" ? "Apply" : ""}
              {selectLan === "ru" ? "Применять" : ""}
            </button>
          </div>
        </div>

        {
          boolean && (
            <Modal
              open={boolean}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="modal"
            >
              <div className="modal-content">
                <div className="modalText">
                  <h1>+998 94 364 57 77</h1>
                </div>
                <svg viewBox="0 0 24 24" onClick={() => setBoolean(!boolean)} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#732f3c"></path> </g></svg>
              </div>
            </Modal>
          )
        }
      </div>
    </section>
  )
}

export default CardSingle;
