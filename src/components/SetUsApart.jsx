import setUsApartBadgeImg from "../assets/set-us-apart-badge.png";
import arrowDownImg from "../assets/arrow-down.png";
import guidanceImg from "../assets/guidance.png";
import dataAnalysisImg from "../assets/data-analysis.png";
import reviewImg from "../assets/review.png";

const SetUsApart = () => {
  return (
    <div className="bg-set-us-apart-img bg-no-repeat bg-center bg-cover bg-blend-overlay bg-black/90 h-[600px] py-10 text-white">
      <div className="lg:w-[1120px] mx-auto">
        <div className="flex flex-col items-center gap-5">
          <img src={setUsApartBadgeImg} alt="set_us_apart_badge_img" />
          <div className="relative">
            <h2 className="text-[60px] w-[120%] outline-text opacity-40 leading-none absolute z-10 -top-7 -left-5">
              What Sets Us Apart
            </h2>
            <h3 className="text-[50px] relative z-20 font-bold leading-none">
              What Sets Us Apart
            </h3>
          </div>
          <p className="text-center text-[18px] w-[65%]">
            Liuzza delivers not just advice and analysis but leadership, drive,
            energy, and creativity to bring the turnaround or program
            implementation to a successful conclusion.
          </p>
        </div>
        <div className="flex gap-5 mt-8">
          <div className="w-[359px] h-[245px] flex-1">
            <div className="flex-1 bg-[#326BFF] h-[77px] rounded-[11px_11px_0px_0px] flex items-center justify-center">
              <div className="flex justify-center items-center">
                <div className="flex justify-center gap-2 w-[80%]">
                  <p className="w-[62%] font-bold text-center">
                    Delivering Analysis And Recommendations
                  </p>
                  <div>
                    <img src={guidanceImg} alt="guidance_img" />
                  </div>
                </div>
                <div>
                  <img src={arrowDownImg} alt="arrow_down" />
                </div>
              </div>
              <img />
            </div>
            <div className="rounded-[0px_0px_11px_11px] bg-white text-black p-3">
              <p className="text-[11px]">
                Most business consultants have CPA, MBA, banking, or technical
                backgrounds. They deliver analysis and recommendations, and then
                it is up to the company to implement them. Management usually
                faces numerous and formidable obstacles to implementation,
                including the same impediments existing before the
                consultant&apos;s arrival. Examples of these internal
                impediments are resistance by key individuals, existing programs
                or policies, lack of certain expertise, turf control issues,
                departmental differences, reluctance to face change, etc. Hence
                minimal success.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#FF8A00] h-[77px] rounded-[11px] flex items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="flex justify-center gap-2 w-[80%]">
                <p className="w-[62%] font-bold text-center">
                  Delivering Analysis And Recommendations
                </p>
                <div>
                  <img src={guidanceImg} alt="guidance_img" />
                </div>
              </div>
              <div>
                <img src={arrowDownImg} alt="arrow_down" />
              </div>
            </div>
            <img />
          </div>
          <div className="flex-1 bg-[#FF8A00] h-[77px] rounded-[11px] flex items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="flex justify-center gap-2 w-[80%]">
                <p className="w-[62%] font-bold text-center">
                  Delivering Analysis And Recommendations
                </p>
                <div>
                  <img src={reviewImg} alt="review_img" />
                </div>
              </div>
              <div>
                <img src={arrowDownImg} alt="arrow_down" />
              </div>
            </div>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUsApart;
