import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4 mb-7">
        <div className="flex space-x-5 text-4xl">
          <a href="https://www.linkedin.com/in/aswin-web/" target="_blank">
            <div className=" hover:scale-150 transition-all duration-500 hover:border-b-2 hover:border-rose">
              <LinkedInIcon className="text-4xl " />
            </div>
          </a>
          <a href="https://github.com/aswin-web" target="_blank">
            <div className=" hover:scale-150 transition-all duration-500 hover:border-b-2 hover:border-rose">
              <GitHubIcon />
            </div>
          </a>
          <a href="https://wa.me/qr/2SSYCF32H76JM1" target="_blank">
            <div className=" hover:scale-150 transition-all duration-500 hover:border-b-2 hover:border-rose">
              <WhatsAppIcon />
            </div>
          </a>
          <a href="mailto:ashvinachu097@gmail.com" target="_blank"></a>
          <div className=" hover:scale-150 transition-all duration-500 hover:border-b-2 hover:border-rose">
            <AttachEmailIcon />
          </div>
          <a href="https://www.instagram.com/___ashvin_/" target="_blank">
            <div className=" hover:scale-150 transition-all duration-500 hover:border-b-2 hover:border-rose">
              {" "}
              <InstagramIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
