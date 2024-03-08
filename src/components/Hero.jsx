import sliderIndicator from "../assets/slider-indicator.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[50px] leading-none text-[#FF8A00] font-bold">
        When Everything is at Stake,
        <br />
        <span className="text-[38px] text-white font-normal">
          Find a Certified Turnaround Professional
        </span>
      </h2>
      <p className="mt-5 text-[17px] text-center w-[60%]">
        Offering turnaround consulting, crisis or interim management, debt
        restructuring, performance improvement, assessments for creditors, etc.
      </p>
      <button className="w-[171.42px] h-[48.73px] bg-[#FF8A00] rounded-[50px] mt-10">
        Get in Touch{" "}
      </button>
      <div className="flex gap-1 mt-28">
        <img src={sliderIndicator} />
        <img src={sliderIndicator} />
        <img src={sliderIndicator} />
      </div>
    </div>
  );
};

export default Hero;
