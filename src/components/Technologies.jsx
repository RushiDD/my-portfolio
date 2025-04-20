import {
  RiJavaFill,
  RiJavascriptFill,
  RiNodejsFill,
  RiReactjsLine,
} from "react-icons/ri";
import {
  SiTypescript,
  SiVite,
  SiRedux,
  SiJest,
  SiSpringboot,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function Technologies() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        <div className="p-4">
          <RiReactjsLine className="text-6xl" style={{ color: "#61DAFB" }} />
        </div>
        <div className="p-4">
          <RiNodejsFill className="text-6xl" style={{ color: "#339933" }} />
        </div>
        <div className="p-4">
          <RiJavascriptFill className="text-6xl" style={{ color: "#F7DF1E" }} />
        </div>
        <div className="p-4">
          <SiHtml5 className="text-5xl" style={{ color: "#E34F26" }} />
        </div>
        <div className="p-4">
          <SiCss3 className="text-5xl" style={{ color: "#1572B6" }} />
        </div>
        <div className="p-4">
          <RiJavaFill className="text-6xl" style={{ color: "#007396" }} />
        </div>
        <div className="p-4">
          <SiTypescript className="text-5xl" style={{ color: "#3178C6" }} />
        </div>
        <div className="p-4">
          <SiVite className="text-5xl" style={{ color: "#646CFF" }} />
        </div>
        <div className="p-4">
          <SiRedux className="text-5xl" style={{ color: "#764ABC" }} />
        </div>
        <div className="p-4">
          <SiSpringboot className="text-5xl" style={{ color: "#6DB33F" }} />
        </div>
      </div>
    </div>
  );
}
