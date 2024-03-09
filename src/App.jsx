import { useState } from "react";
import AboutUs from "./components/AboutUs";
import CTP from "./components/CTP";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import SetUsApart from "./components/SetUsApart";

function App() {
  const [overflowY, setOverflowY] = useState(false)
  function handleOverflow(value) {
    setOverflowY(value)
  }
  return (
    <div className={overflowY && "overflow-hidden h-screen"}>
      <ContactBanner />
      <Header handleOverflow={handleOverflow}/>
      <AboutUs />
      <Services />
      <CTP />
      <SetUsApart />
      <Footer />
    </div>
  );
}

export default App;
