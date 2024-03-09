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
    <div className="bg-sub-footer-img bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/90 h-[254px]">
      <div className="flex items-center gap-12 lg:w-[1120px] mx-auto h-full">
        <div className="border-e h-44 flex items-center pr-7">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[36px] leading-none text-white font-bold">
            When Everything is at Stake,
            <br />
            <span className="text-[27px] text-white font-normal">
              Find a Certified Turnaround Professional
            </span>
          </h2>
          <ul className="flex gap-10">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={index === 0 ? "text-[#FF8A00]" : "text-white"}
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
