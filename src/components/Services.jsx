import cardImg from "../assets/services-cards.png";
import arrowImg from "../assets/arrow.png";

const Services = () => {
  return (
    <div className="bg-service-img bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/90 h-[650px] text-white py-12">
      <div className="lg:w-[1120px] mx-auto h-[600px]">
        <div>
          <div className="relative">
            <h2 className="text-[92px] outline-text leading-none absolute z-10 -top-7">
              Services
            </h2>
            <h3 className="text-[80px] relative z-20 font-bold leading-none">
              Services
            </h3>
          </div>
          <p className="text-[20px]">
            Liuzza Management Consulting offers a wide range of management
            consulting services, including crisis management, debt
            restructuring, and more.
          </p>
        </div>
        <div className="flex gap-5">
          <div className="w-[360px] h-[319.53px] rounded-[32px_0px_32px_0px] mt-7">
            <div className="h-1/2">
              <img
                src={cardImg}
                alt="card_img"
                className="object-cover w-full h-full rounded-[32px_0px_0px_0px]"
              />
            </div>
            <div className="h-1/2 text-center bg-[#FF8A00] py-2 rounded-[0px_0px_32px_0px]">
              <h3 className="w-[55%] mx-auto font-bold">
                Crisis Management / Interim Management
              </h3>
              <h4 className="w-[60%] mx-auto">
                Provide immediate CEO, CFO, or CRO services
              </h4>
              <div className="flex justify-center gap-5 mt-3 text-[9px]">
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212]">
                  Call us
                </button>
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212]">
                  Mail us
                </button>
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[319.53px] rounded-[0px_32px_0px_32px] mt-7">
            <div className="h-1/2">
              <img
                src={cardImg}
                alt="card_img"
                className="object-cover w-full h-full rounded-[0px_32px_0px_32px]"
              />
            </div>
            <div className="h-1/2 text-center bg-white text-black py-2 rounded-[0px_0px_0px_32px]">
              <h3 className="w-[55%] mx-auto font-bold">
                Debt Restructuring /Lender Relationships
              </h3>
              <h4 className="w-[85%] mx-auto">
                Re-establishing credibility and confidence of creditors and
                other stakeholders.
              </h4>
              <div className="flex justify-center gap-5 mt-3 text-[9px] text-white">
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212]">
                  Call us
                </button>
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212]">
                  Mail us
                </button>
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[319.53px] rounded-[32px_0px_32px_0px] mt-7">
            <div className="h-1/2">
              <img
                src={cardImg}
                alt="card_img"
                className="object-cover w-full h-full rounded-[32px_0px_0px_0px]"
              />
            </div>
            <div className="h-1/2 text-center bg-[#FF8A00] py-2 rounded-[0px_0px_32px_0px]">
              <h3 className="w-[60%] mx-auto font-bold">
                Operational Restructuring /Performance Improvement
              </h3>
              <h4 className="w-[80%] mx-auto">
                Cost reduction, specific program design, implementation, and
                completion.
              </h4>
              <div className="flex justify-center gap-5 mt-3 text-[9px]">
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212]">
                  Call us
                </button>
                <button className="rounded-[50px] w-[73.58px] h-[20.92px] bg-[#121212]">
                  Mail us
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="w-[95px] h-[28px] rounded-[50px] bg-[#FF8A00] text-[12px] flex justify-center items-center gap-2 mt-5 float-right">
          See all <img src={arrowImg} alt="arrow_img" width={15} />
        </button>
      </div>
    </div>
  );
};

export default Services;
