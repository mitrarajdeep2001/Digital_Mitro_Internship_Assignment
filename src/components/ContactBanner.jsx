import gmail from "../assets/gmail.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";

const ContactBanner = () => {
  return (
    <div className="hidden md:flex justify-around items-center bg-[#121212] text-white text-[13px] h-[47px]">
      <div className="flex gap-3 items-center">
        <div>
          <img src={gmail} alt="gmail_img" />
        </div>
        <p>vincentliuzza@icloud.com</p>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-3 items-center">
          <div>
            <img src={phone} alt="phone_img" />
          </div>
          <p>504-919-1401</p>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <img src={location} alt="location_img" />
          </div>
          <p>519 N. Causeway Blvd.,Mandeville, LA 70448</p>
        </div>
        <button className="bg-[#FF8A00] w-[84.16px] h-[23.93px] rounded-[50px] text-[10px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactBanner;
