import cardImg from "../assets/services-cards.png";
import arrowImg from "../assets/arrow.png";
import sliderArrowImg from "../assets/slider-arrow.png";

const Services = () => {
  return (
    <div className="bg-service-img bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/90 h-[1200px] lg:h-[650px] text-white py-12 px-5 lg:px-0">
      <div className="lg:w-[1120px] mx-auto h-[600px]">
        <div>
          <div className="relative flex lg:block justify-center">
            <h2 className="text-[72px] lg:text-[92px] outline-text opacity-40 leading-none absolute z-10 -top-7">
              Services
            </h2>
            <h3 className="text-[60px] lg:text-[80px] relative z-20 font-bold leading-none">
              Services
            </h3>
          </div>
          <p className="text-[16px] lg:text-[20px] text-center lg:text-left lg:w-[65%] mt-5">
            Liuzza Management Consulting offers a wide range of management
            consulting services, including crisis management, debt
            restructuring, and more.
          </p>
        </div>
        <div className="lg:flex gap-5 relative">
          <div className="hidden lg:block absolute bottom-[40%] -left-4">
            <img
              src={sliderArrowImg}
              alt="slider_arrow_left_img"
              className="cursor-pointer hover:scale-110"
            />
          </div>
          <div className="md:w-1/2 mx-auto lg:w-[360px] h-[260px] lg:h-[319.53px] rounded-[32px_0px_32px_0px] mt-7">
            <div className="h-1/2">
              <img
                src={cardImg}
                alt="card_img"
                className="object-cover w-full h-full rounded-[32px_0px_0px_0px]"
              />
            </div>
            <div className="h-1/2 text-center bg-[#FF8A00] py-2 rounded-[0px_0px_32px_0px]">
              <h3 className="w-[55%] mx-auto font-bold text-[12px]">
                Crisis Management / Interim Management
              </h3>
              <h4 className="w-[60%] mx-auto text-[12px]">
                Provide immediate CEO, CFO, or CRO services
              </h4>
              <div className="flex justify-center gap-5 mt-3 text-[9px]">
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212] hover:opacity-70">
                  Call us
                </button>
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212] hover:opacity-70">
                  Mail us
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mx-auto lg:w-[360px] h-[260px] lg:h-[319.53px] rounded-[0px_32px_0px_32px] mt-7">
            <div className="h-1/2">
              <img
                src={cardImg}
                alt="card_img"
                className="object-cover w-full h-full rounded-[0px_32px_0px_32px]"
              />
            </div>
            <div className="h-1/2 text-center bg-white text-black py-2 rounded-[0px_0px_0px_32px]">
              <h3 className="w-[55%] mx-auto font-bold text-[12px]">
                Debt Restructuring /Lender Relationships
              </h3>
              <h4 className="w-[85%] mx-auto text-[12px]">
                Re-establishing credibility and confidence of creditors and
                other stakeholders.
              </h4>
              <div className="flex justify-center gap-5 mt-3 text-[9px] text-white">
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212] hover:opacity-70">
                  Call us
                </button>
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212] hover:opacity-70">
                  Mail us
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mx-auto lg:w-[360px] h-[260px] lg:h-[319.53px] rounded-[32px_0px_32px_0px] mt-7">
            <div className="h-1/2">
              <img
                src={cardImg}
                alt="card_img"
                className="object-cover w-full h-full rounded-[32px_0px_0px_0px]"
              />
            </div>
            <div className="h-1/2 text-center bg-[#FF8A00] py-2 rounded-[0px_0px_32px_0px]">
              <h3 className="w-[60%] mx-auto font-bold text-[12px]">
                Operational Restructuring /Performance Improvement
              </h3>
              <h4 className="w-[80%] mx-auto text-[12px]">
                Cost reduction, specific program design, implementation, and
                completion.
              </h4>
              <div className="flex justify-center gap-5 mt-3 text-[9px]">
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212] hover:opacity-70">
                  Call us
                </button>
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212] hover:opacity-70">
                  Mail us
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-[42%] -right-4">
            <img
              src={sliderArrowImg}
              alt="slider_arrow_left_img"
              className="rotate-180 cursor-pointer hover:scale-110"
            />
          </div>
        </div>
        <button className="w-1/2 mx-auto md:w-[150px] lg:w-[95px] h-[28px] rounded-[50px] bg-[#FF8A00] hover:opacity-70 text-[12px] flex justify-center items-center gap-2 mt-5 lg:float-right">
          See all <img src={arrowImg} alt="arrow_img" width={15} />
        </button>
      </div>
    </div>
  );
};

export default Services;
