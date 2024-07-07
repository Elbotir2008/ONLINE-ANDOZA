import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/aboutusSection/AboutUs";
import Andozalar from "./pages/andozalarSection/Andozalar";
import Category from "./pages/categoriesSection/Category";
import Hero from "./pages/heroSection/Hero";
import CardSingle from "./pages/cardSingle/CardSingle";
import Backdrop from "./components/backdrop/Backdrop";

function App() {
  const [selectLan, setSelectLan] = useState<string>("uz");
  const [dark, setDark] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [dark]);

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={`component ${dark ? 'dark-mode' : ''}`}>
      <Header
        dark={dark}
        setDark={setDark}
        selectLan={selectLan}
        setSelectLan={setSelectLan}
      />
      <Routes>
        <Route path="/" element={
          <>
            <Hero dark={dark} selectLan={selectLan} />
            <Andozalar dark={dark} selectLan={selectLan} />
            <Category dark={dark} selectLan={selectLan} />
            <AboutUs dark={dark} selectLan={selectLan} />
          </>
        } />
        <Route path="/cardSingle/:id" element={
          <CardSingle
            dark={dark}
            selectLan={selectLan}
          />
        } />
      </Routes>
      <Footer dark={dark} selectLan={selectLan} />
      {showBackToTop && (
        <Backdrop
          dark={dark}
          handleBackToTopClick={handleBackToTopClick}
        />
      )}
    </main>
  );
}

export default App;
