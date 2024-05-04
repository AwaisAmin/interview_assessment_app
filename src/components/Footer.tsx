import { Link } from "react-router-dom";
import { Behance, Facebook, Instagram, Twitter } from "../assets/icons";

const Footer = () => {
  const linkTexts = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"];
  return (
    <footer className="px-5 mt-[200px] md:px-20 flex flex-col justify-between h-full gap-[150px]">
      <div className="flex justify-end gap-[56px]">
        {linkTexts.map((text, index) => (
          <a
            href=""
            key={index}
            className="font-open-sans text-14 font-semibold text-[#212121]"
          >
            {text}
          </a>
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
