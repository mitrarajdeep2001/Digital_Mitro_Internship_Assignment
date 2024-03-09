import aboutImg1 from "../assets/about-img-1.png";
import aboutImg2 from "../assets/about-img-2.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center xl:gap-24 lg:w-[1120px] mx-auto mb-32 md:mb-40 lg:mb-0 px-5 lg:px-0 lg:h-[600px] relative">
      <div className="flex-1 mt-14 lg:mt-0">
        <div className="relative flex justify-center">
          <h2 className="text-[60px] lg:text-[100px] text-white text-shadow leading-none absolute -z-10 -top-5 lg:-top-10">
            About us
          </h2>
          <h3 className="text-[50px] lg:text-[80px] text-[#FF8A00] font-bold leading-none">
            About us
          </h3>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <p className="text-[16px] lg:text-[20px]">
            Liuzza Management Consulting assists small and mid-size companies in
            distress, transitioning, or seeking performance improvement. By
            applying diverse and extensive experience as a turnaround manager,
            financial consultant, founder, and CEO of private and public
            companies, the firm offers turnaround consulting, crisis or interim
            management, debt restructuring, performance improvement, assessments
            for creditors, boards, and investors, and bankruptcy services and
            strategies.
          </p>
          <button className="bg-[#121212] hover:opacity-70 text-white w-[95px] h-[28px] rounded-[50px] text-[12px] mt-5">
            Show More
          </button>
        </div>
      </div>
      <div className="flex-1 relative mt-8 ml-20 lg:-top-20">
        <div className="w-[250px] h-[200px] md:w-[475px] md:h-[316.82px] border-[5px] border-solid border-[#FF8A00] rounded-[0px_270px_280px_0px]">
          <img
            src={aboutImg1}
            alt="about_img1"
            className="object-cover rounded-[0px_270px_280px_0px] h-full"
          />
        </div>
        <div className="w-[250px] h-[200px] md:w-[475px] md:h-[316.82px] border-[5px] border-solid border-[#FF8A00] rounded-[270px_0px_0px_280px] absolute top-20 md:top-32 -left-20">
          <img
            src={aboutImg2}
            alt="about_img2"
            className="object-cover rounded-[270px_0px_0px_280px] h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
