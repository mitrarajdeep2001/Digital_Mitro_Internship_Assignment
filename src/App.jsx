import AboutUs from "./components/AboutUs";
import CTP from "./components/CTP";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import SetUsApart from "./components/SetUsApart";

function App() {
  return (
    <div className="">
      <ContactBanner />
      <Header />
      <AboutUs />
      <Services />
      <CTP />
      <SetUsApart />
      <Footer />
    </div>
  );
}

export default App;
