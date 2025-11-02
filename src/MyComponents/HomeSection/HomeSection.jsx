import {Button} from "@/components/ui/button";
import {SlideRightWhenVisible} from "../FadeInWhenVisible";
import Profile from "./Profile";
import { Download } from "lucide-react";

export default function HomeSection(){

    const handleScroll = (id) => {
        const section = document.getElementById(id)
        if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Resume.pdf";
        link.download = "Cliford_Resume.pdf";
        link.click();
    };

    return(
        <section
        id="Home" 
        className="min-h-screen bg-gradient-to-r from-slate-800 to-gray-900 flex justify-center border-none"
        >
            <div 
            className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20 w-11/12 rounded-xl mt-[100px]"
            >
                <SlideRightWhenVisible>
                    <div className="flex flex-col justify-center p-5">
                        <span className="font-Montserrat text-slate-200 text-md sm:text-lg md:text-xl transition-transform duration-300 
                        transform origin-center hover:scale-105">
                            Hi There,
                        </span>

                        <div 
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl pt-1 transition-transform duration-300 transform 
                        origin-center hover:scale-105"
                        >
                            <span 
                            className="font-BBH text-slate-200"
                            >
                                I am {" "}
                            </span>
                            <span 
                            className="font-BBH text-yellow-500"
                            >
                                Cliford Vincent
                            </span>
                        </div>
                        <h1 
                        className="font-BBH text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-slate-200 pb-5 
                        transition-transform duration-300 transform origin-center hover:scale-105"
                        >
                            C. Gamit
                        </h1>
                        <p 
                        className="font-BBH text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-slate-200 pb-2 
                        transition-transform duration-300 transform origin-center hover:scale-105"
                        >
                            Website Developer / Singer / Dancer
                        </p>
                        <p className="font-Montserrat text-sm text-slate-200 transition-transform duration-300 transform 
                        origin-center hover:scale-105 text-justify lg:w-[600px]">
                            Whether it’s through code, music, or movement, I express creativity in every form.
                            As a website developer, I love building digital experiences that connect and inspire people.
                            As a singer and dancer, I channel emotion and rhythm the same passion I bring into every project I create.
                            For me, development and art share one goal: to tell a story, evoke feeling, and leave a lasting impression.
                        </p>

                        <div className="flex items-center gap-5">
                            <Button
                            onClick={handleDownload}
                            className="font-Montserrat text-slate-200 h-10 w-44 my-10 rounded-full bg-slate-800
                            border-blue-700 border-2 hover:bg-blue-700 hover:scale-110"
                            >
                                <Download className="w-4 h-4" />
                                Download Resume
                            </Button>

                            <Button 
                            onClick={() =>handleScroll("Contact")} 
                            className="font-Montserrat text-slate-200 h-10 w-28 my-10 rounded-full bg-slate-800
                            border-blue-700 border-2 hover:bg-blue-700 hover:scale-110">
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </SlideRightWhenVisible>
                
                <Profile />                
            </div>
        </section>
    );
}