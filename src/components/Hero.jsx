import RushiProfile from "../assets/RushiProfile.jpg";
import { HERO_CONTENT } from "../constants/index.js";

export default function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="fles justify-center lg:p-8">
            <img
              src={RushiProfile}
              alt="Rushi"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="mt-9 pb-2 text-4xl tracking-tighter lg:text-8xl">
              Rushikesh Dhamanage
            </h2>
            <span
              className="bg-gradient-to-r from-stone-300 to-stone-600 
            bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </span>
            <p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed 
              tracking-tighter"
            >
              {HERO_CONTENT}
            </p>
            <a
              href="/Rushikesh_Frontend_Dev_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 transition-all 
              transform hover:bg-stone-950 hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
