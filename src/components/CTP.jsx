import ctpImg from "../assets/ctp.png";
import ctpFrameImg from "../assets/ctp-frame.png";
const CTP = () => {
  return (
    <div className="flex items-center gap-20 lg:w-[1081.75px] mx-auto h-[600px]">
      <div className="w-1/3 relative">
        <img
          src={ctpImg}
          alt="ctp_img"
          width={"70%"}
          className="absolute bottom-6 left-[52px]"
        />
        <img src={ctpFrameImg} alt="ctp_frame_img" />
      </div>
      <div className="w-2/3">
        <div className="relative">
          <h2 className="text-[90px] text-white text-shadow leading-none absolute -z-10 -top-10 -left-5">
            What is A CTP?
          </h2>
          <h3 className="text-[80px] text-[#326BFF] font-bold leading-none">
            What is A CTP?
          </h3>
        </div>
        <p className="text-[#333333] text-[18px] mt-5">
          The CTP designation is the highest accreditation a turnaround
          professional can achieve. The Association of Turnaround Professionals
          established the Certified Turnaround Professional (CTP) designation, a
          program that established quality standards for an otherwise
          unregulated profession. Applicants must meet specific standards of
          education, experience, and professional conduct. They must also
          successfully complete a series of rigorous examinations that cover
          financial and managerial accounting, turnaround and crisis management,
          and bankruptcy and UCC law. CTPs are required to participate in
          continuing education programs to maintain their certification.
        </p>
        <button className="rounded-[50px] text-[12px] text-white mt-2 w-[73.58px] h-[20.92px] bg-[#121212]">
          Show more
        </button>
      </div>
    </div>
  );
};

export default CTP;
