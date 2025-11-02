import Technologies from "./Technologies";
import FadeInWhenVisible, {SlideLeftWhenVisible, SlideRightWhenVisible} from "../FadeInWhenVisible";
import PieGraph from "./PieGraph";
import Education from "./Education";

export default function AboutSection() {

    return (
        <section id="About" className="min-h-screen bg-gradient-to-r from-slate-800 to-gray-900 flex justify-center items-center font-Montserrat">
            <div  className="text-center w-11/12 my-10">
                <div className="py-5 px-7 sm:px-20">
                    <FadeInWhenVisible>
                        <h1 className="text-3xl sm:text-5xl text-yellow-500">What I do</h1>
                        <p className="text-slate-400 mt-3 mb-9 text-sm">
                            I am from <i>Philippines</i> and currently living in <i>Bacoor City, Cavite</i>. I am a <i>Computer Science</i> 
                            student at <i>Cavite State University - Bacoor Campus</i>. I have a strong passion for web development and enjoy 
                            creating dynamic and responsive websites. I am always eager to learn new technologies and improve my skills in the 
                            field of web development.
                        </p>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                        <h1 className="text-3xl sm:text-5xl text-slate-100 underline decoration-yellow-500 underline-offset-8">Skills</h1>
                    </FadeInWhenVisible>
                </div>
                <FadeInWhenVisible>
                    <div className="flex flex-wrap py-10 gap-5">
                        <PieGraph />
                        <Education />
                    </div>
                </FadeInWhenVisible>
                <Technologies />
            </div>
        </section>
    );
}