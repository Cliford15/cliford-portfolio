import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react"

export default function Header(){

    const [activeSection, setActiveSection] = useState("Home");

    const handleScroll = (id) => {
        const section = document.getElementById(id)
        if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        const sections = document.querySelectorAll("section")

        const handleScrollSpy = () => {
        let current = "Home";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100 
            if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id")
            }
        })
        setActiveSection(current)
        }

        window.addEventListener("scroll", handleScrollSpy)
        return () => window.removeEventListener("scroll", handleScrollSpy)
    }, []);

    return(
        <>
            <header className="fixed top-0 left-0 w-full shadow-md bg-slate-300 z-40">
                <div className="grid grid-cols-6 gap-1 my-0 h-20 mx-2 sm:mx-14">
                    <div className="col-span-1 my-auto">
                        <img src="/Logo.svg" alt="Logo" className="size-14" onClick={() =>handleScroll("Home")} />
                    </div>
                    
                    <NavigationMenu className="col-span-4 mx-auto">
                        <NavigationMenuList className="gap-1 md:gap-12">
                            {["Home", "About", "Projects", "Contact"].map((section) => (
                                <NavigationMenuItem key={section}>
                                    <NavigationMenuLink asChild>
                                        <button
                                            onClick={() => handleScroll(section)}
                                            className={`transition-colors capitalize ${
                                            activeSection === section
                                                ? "bg-gradient-to-r from-slate-950 to-gray-800 text-white rounded-md h-10 w-14 sm:w-16"
                                                : "bg-gradient-to-r hover:from-slate-950 hover:to-gray-800 hover:text-white rounded-md h-10 w-14 sm:w-16"
                                            }`}
                                        >
                                            {section}
                                            
                                        </button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="col-span-1"></div>
            </header>
        </>
    );
}