import ctpImg from "../assets/ctp.png";
import ctpFrameImg from "../assets/ctp-frame.png";
const CTP = () => {
  return (
    <div className="lg:flex items-center gap-20 lg:w-[1081.75px] mx-auto mb-28 lg:mb-0 px-5 lg:px-0 py-10 lg:py-0 h-[600px]">
      <div className="w-1/3 mx-auto mb-16 lg:mb-0 relative">
        <img
          src={ctpImg}
          alt="ctp_img"
          width={"70%"}
          className="absolute bottom-3 md:bottom-4 lg:bottom-6 left-[20px] md:left-[38px] lg:left-[55px]"
        />
        <img src={ctpFrameImg} alt="ctp_frame_img" />
      </div>
      <div className="lg:w-2/3 flex flex-col items-center lg:block">
        <div className="relative">
          <h2 className="text-[50px] lg:text-[90px] w-[120%] lg:w-full text-white text-shadow leading-none absolute -z-10 -top-5 lg:-top-10 -left-5">
            What is A CTP?
          </h2>
          <h3 className="text-[40px] lg:text-[80px] text-[#326BFF] font-bold leading-none">
            What is A CTP?
          </h3>
        </div>
        <p className="text-[#333333] text-[16px] lg:text-[18px] mt-5">
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
        <button className="rounded-[50px] text-[12px] text-white mt-2 mx-auto w-[95px] h-[28px] bg-[#121212] hover:opacity-70">
          Show more
        </button>
      </div>
    </div>
  );
};

export default CTP;
