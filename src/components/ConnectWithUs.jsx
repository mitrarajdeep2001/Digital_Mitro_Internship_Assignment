import gmailBlack from "../assets/gmail-black.png";
import phoneBlack from "../assets/phone-black.png";
import locationBlack from "../assets/location-black.png";
import connectWithUs from "../assets/connect-with-us.png";

const ConnectWithUs = () => {
  return (
    <div className="lg:w-[1120px] mx-auto mt-32 md:mt-20 lg:mt-0 h-[600px] flex flex-col justify-center items-center px-5 lg:px-0 lg:pt-12">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <h2 className="text-[46px] lg:text-[62px] w-[110%] lg:w-[120%] outline-text leading-none absolute z-10 -top-5 lg:-top-7 -left-3 lg:-left-7">
            Connect With Us
          </h2>
          <h3 className="text-[40px] lg:text-[50px] text-[#326BFF] relative z-20 font-bold leading-none">
            Connect With Us
          </h3>
        </div>
        <p className="text-[16px] lg:text-[18px] text-[#333333] w-[60%] text-center">
          Of over 400 CTPs nationwide, only one is headquartered in the states
          of Louisiana, Mississippi, or Arkansas—Vincent Liuzza.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-20 lg:mb-6 mt-6">
        <ul>
          <li className="flex items-center gap-5 text-[18px] lg:text-[24px] mb-5">
            <img src={phoneBlack} className="w-10" />
            <span>504-919-1401</span>
          </li>
          <li className="flex items-center gap-5 text-[18px] lg:text-[24px] mb-5">
            <img src={gmailBlack} className="w-10" />
            <span>vincentliuzza@icloud.com</span>
          </li>
          <li className="flex items-center gap-5 text-[18px] lg:text-[24px] mb-5">
            <img src={locationBlack} className="w-10" />
            <span>519 N. Causeway Blvd.,Mandeville, LA 70448</span>
          </li>
        </ul>
        <div>
          <img
            src={connectWithUs}
            alt="connect_with_us_img"
            className="w-[312px] h-[312px] mb-6 rounded-full object-cover shadow-[0_6px_6px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
