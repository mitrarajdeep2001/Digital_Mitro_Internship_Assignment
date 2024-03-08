import logo from "../assets/logo.png";

const Navbar = () => {
  const navItems = [
    "Home",
    "About",
    "Practice Areas",
    "Industry Experience v",
    "Case Studies",
    "Contact us",
  ];
  return (
    <div className="flex justify-around items-center h-[37.42px] text-[14px]">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex gap-10">
        {navItems.map((item, index) => (
          <li key={index} className={index === 0 ? "text-[#FF8A00]" : ""}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
