import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = ({handleOverflow}) => {
  return (
    <div className="bg-header-img bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/80 h-[500px] text-white lg:pt-6">
      <Navbar handleOverflow={handleOverflow}/>
      <Hero />
    </div>
  );
};

export default Header;
