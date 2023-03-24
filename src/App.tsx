import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Crypto from "./pages/Crypto";
import Home from "./pages/Home";
import { SelectedPage } from "./models/models";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar isTopOfPage={isTopOfPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />}>
          <Route path=":cryptoSymbol" element={<Crypto />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
