import logo from "../assets/logo.png";

const SubFooter = () => {
  const navItems = [
    "Home",
    "About",
    "Practice Areas",
    "Industry Experience",
    "Case Studies",
    "Contact us",
  ];
  return (
    <div className="bg-sub-footer-img bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/90 lg:h-[254px] mt-20 lg:mt-0 py-10 lg:py-0">
      <div className="flex flex-col lg:flex-row items-center lg:gap-12 lg:w-[1120px] mx-auto h-full">
        <div className="lg:border-e h-20 lg:h-44 flex items-center pr-7">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[27px] lg:text-[36px] leading-none text-white text-center font-bold">
            When Everything is at Stake,
            <br />
            <span className="text-[20px] lg:text-[27px] text-white font-normal">
              Find a Certified Turnaround Professional
            </span>
          </h2>
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-10 text-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={index === 0 ? "text-[#FF8A00] cursor-pointer" : "text-white cursor-pointer hover:opacity-70"}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
