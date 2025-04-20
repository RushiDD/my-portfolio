import logo from "../assets/RushiLogo.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rushikesh-dhamanage-260b2b1ba/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-transform transform hover:scale-110 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RushiDD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="transition-transform transform hover:scale-110 hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/rushi___45/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-transform transform hover:scale-110 hover:text-pink-600"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/RushiDh7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transition-transform transform hover:scale-110 hover:text-blue-400"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}
