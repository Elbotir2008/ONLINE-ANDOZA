import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/aboutusSection/AboutUs";
import Andozalar from "./pages/andozalarSection/Andozalar";
import Category from "./pages/categoriesSection/Category";
import Hero from "./pages/heroSection/Hero";
import CardSingle from "./pages/cardSingle/CardSingle";
function App() {
  const [selectLan, setSelectLan] = useState<string>("Uzbek");
  const [dark, setDark] = useState<boolean>(false);
  return (
    <main>
      <Routes>
        <Route path="/cardSingle" element={<CardSingle
          dark={dark}
          setDark={setDark}
          selectLan={selectLan}
          setSelectLan={setSelectLan}
        />} />
      </Routes>
      <Header
        dark={dark}
        setDark={setDark}
        selectLan={selectLan}
        setSelectLan={setSelectLan}
      />
      <Hero
        dark={dark}
        setDark={setDark}
        selectLan={selectLan}
        setSelectLan={setSelectLan}
      />
      <Andozalar
        dark={dark}
        setDark={setDark}
        selectLan={selectLan}
        setSelectLan={setSelectLan}
      />
      <Category
        dark={dark}
        setDark={setDark}
        selectLan={selectLan}
        setSelectLan={setSelectLan}
      />
      <AboutUs
        dark={dark}
        setDark={setDark}
        selectLan={selectLan}
        setSelectLan={setSelectLan}
      />
      <Footer
        dark={dark}
        setDark={setDark}
        selectLan={selectLan}
        setSelectLan={setSelectLan}
      />
    </main>
  )
}

export default App
