import Projects from "./Projects";
import {SlideRightWhenVisible} from "../FadeInWhenVisible";

export default function ProjectsSection() {

  return (
    <section
      id="Projects"
      className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-900 flex flex-col items-center"
    >
      <div className="text-left w-11/12 my-10">
        <SlideRightWhenVisible>
          <h1 className="text-4xl sm:text-6xl font-extralight text-slate-100 font-Montserrat">
            &mdash;Journey through my creations.
          </h1>
        </SlideRightWhenVisible>
      </div>

      <Projects />
    </section>
  );
}