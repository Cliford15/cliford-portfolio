import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Modal from "./Modal";
import FadeInWhenVisible from "../FadeInWhenVisible";
import ImageCarousel from "./ImageCarousel";
import { ArrowUpRight, } from "lucide-react";

export default function Projects(){

    const [isModalOpen, setIsModalOpen] = useState(null);
    const [isCarouselOpen, setIsCarouselOpen] = useState(null);

    const projects = [
        {
            title: "Stranger Things Fan Page",
            img: "/Card1-CoverPhoto.jpg",
            projectLink: "https://cliford15.github.io/MidtermWebsite/LogIn.html",
            repoLink: "https://github.com/Cliford15/MidtermProject",
            repoColor: "text-red-500",
            description: "My Midterm Project in ITEC-50.\nGithub repository, click below.",
            overview: "This is a simple fan page I created because I’m a huge fan of Stranger Things. It’s a static website built to showcase my love for the series.",
            stacks: ["HTML", "CSS"],
            screenshots: ["/ST1.png", "/ST2.png", "/ST3.png", "/ST4.png", "/ST5.png", "/ST6.png", "/ST7.png"],
        },
        {
            title: "ClinCent Kapihan",
            img: "/Card2-CoverPhoto.png",
            projectLink: "https://cliford15.github.io/MyCafeMenuWebSite/Coffee.html",
            repoLink: "https://github.com/Cliford15/MyCafeMenuWebSite",
            repoColor: "text-amber-600",
            description: "My first activity in ITEC-50.\nGithub repository, click below.",
            overview: "This is a Café Menu webpage I created for our ITEC50 activity. It’s a simple, static website showcasing basic web design concepts.",
            stacks: ["HTML"],
            screenshots: ["/CF1.png", "/CF2.png", "/CF3.png"],
        },
        {
            title: "Music Video",
            img: "/Card3-CoverPhoto.jpg",
            projectLink: "https://cliford15.github.io/MusicVideo/Mp4.html",
            repoLink: "https://github.com/Cliford15/MusicVideo",
            repoColor: "text-gray-400",
            description: "My activity in ITEC-50.\nGithub repository, click below.",
            overview: "I developed this music video webpage for our ITEC50 activity, featuring “Sayo” by Munimuni one of my favorite songs. Its calm and meaningful lyrics inspired me to choose it for this project.",
            stacks: ["HTML", "CSS"],
            screenshots: ["/Sayo1.png", "/Sayo2.png"],
        },
    ];

    return(
        <div className="w-11/12 flex flex-wrap mb-10 font-Montserrat">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="flex-1 flex justify-center my-5"
                >
                    <FadeInWhenVisible>
                        <Card
                            className={`shadow-black hover:shadow-lg hover:shadow-blue-500 w-[225px] h-[375px] lg:w-[300px] lg:h-[500px] flex flex-col`}
                        >
                            <CardContent className="h-[300px] lg:h-[400px] p-2 border-b-2 rounded-xl rounded-b-none">
                                <a onClick={() => {setIsModalOpen(index); setIsCarouselOpen(index);}} className="cursor-pointer">
                                    <img
                                        src={project.img}
                                        alt={`${project.title} Cover`}
                                        className="h-[282px] lg:h-[376px] object-cover rounded-md hover:scale-105"
                                    />
                                </a>
                            </CardContent>

                            <CardFooter className="flex-1 flex flex-col items-start text-left px-3 py-0 font-semibold bg-gradient-to-r from-zinc-950 to-zinc-900 rounded-b-xl">
                                <CardTitle className="text-sm lg:text-xl text-slate-200">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-slate-200 font-extralight text-[10px] lg:text-base">
                                    {project.description}
                                    <br />
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        className={`${project.repoColor} font-bold`}
                                    >
                                        Click here
                                    </a>

                                    <Modal isOpen={isModalOpen === index} onClose={() => setIsModalOpen(null)}>
                                        <div className="flex flex-col lg:flex-row justify-between items-center py-5 gap-6 font-Montserrat">
                                            {/* Left section (Text content) */}
                                            <div className="w-full lg:w-[500px] px-4">
                                                <h2 className="text-2xl font-semibold mb-5 text-center lg:text-left">
                                                    {project.title}
                                                </h2>

                                                <h1 className="text-xl font-semibold mb-2">Overview:</h1>
                                                <p className="mb-5 text-justify">{project.overview}</p>

                                                <h1 className="text-xl font-semibold mb-4">Tech Stack:</h1>
                                                <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
                                                    {project.stacks.map((stack, stackIndex) => (
                                                    <span
                                                        key={`${project.title}-stack-${stackIndex}`}
                                                        className="px-3 py-1 bg-red-500 border-red-900 hover:shadow-md hover:shadow-red-400 rounded-md text-sm md:text-base lg:text-lg border-[1px]"
                                                    >
                                                        {stack}
                                                    </span>
                                                    ))}
                                                </div>

                                                <div className="flex justify-center lg:justify-start">
                                                    <a href={project.projectLink} target="_blank">
                                                    <Button className="hover:scale-105 hover:border-2 hover:border-white flex items-center gap-2">
                                                        <ArrowUpRight className="w-4 h-4" />
                                                        Interactive Model
                                                    </Button>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Right section (Carousel) */}
                                            <div className="w-full lg:w-auto flex justify-center">
                                                <ImageCarousel
                                                    images={project.screenshots}
                                                    isOpen={isCarouselOpen === index}
                                                />
                                            </div>
                                        </div>
                                    </Modal>
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    </FadeInWhenVisible>
                </div>
            ))}
        </div>
    );
}