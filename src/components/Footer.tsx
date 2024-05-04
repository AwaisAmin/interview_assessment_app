import { Link } from "react-router-dom";
import { Behance, Facebook, Instagram, Twitter } from "../assets/icons";
import { footerLinkTexts } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 mt-[100px] md:px-20 py-5 flex flex-col justify-between h-full gap-[150px]">
      <div className="flex justify-end gap-[56px]">
        {footerLinkTexts.map((text, index) => (
          <Link
            to="#"
            key={index}
            className="font-open-sans text-14 font-semibold text-[#212121]"
          >
            {text}
          </Link>
        ))}
      </div>
      <div className="flex justify-between">
        <h3 className="text-[#807E7E] font-open-sans text-14 font-normal">
          © 2023 Fixaroo
        </h3>
        <div className="flex gap-10">
          <Facebook />
          <Instagram />
          <Twitter />
          <Behance />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
