import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Socmed from "./socmed";
import Contacts from "./Contacts";
import FadeInWhenVisible, {SlideRightWhenVisible, SlideLeftWhenVisible} from "../FadeInWhenVisible";

export default function ContactSection() {

    const handleScroll = (id) => {
        const section = document.getElementById(id)
        if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="Contact" className=" bg-gradient-to-r from-slate-800 to-gray-900 flex flex-col items-center text-slate-300 font-Montserrat">
            <FadeInWhenVisible>
                <div className="px-7 sm:px-2 md:px-8 lg:px-36 xl:px-60 mx-2 sm:mx-14 flex flex-col items-center justify-center py-16">
                    <h1 className="text-3xl sm:text-5xl text-center mb-5">&mdash;Reach out if you'd like to work together.</h1>
                    <p className="text-center text-sm">I’m always open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, feel free to reach out. I’d be glad to hear from you.</p>
                </div>
            </FadeInWhenVisible>

            <hr className="w-11/12 border-slate-500 border-t-2"/>

            <div className="w-11/12 flex flex-wrap justify-center gap-10 py-16">
                <SlideRightWhenVisible>
                    <div className="h-auto flex-1 sm:min-w-[350px]">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-5 flex flex-col text-lg">
                                {["Home", "About", "Projects", "Contact"].map((section) => (
                                    <NavigationMenuItem key={section} className="hover:scale-125 transition-all duration-300 cursor-pointer">
                                        <NavigationMenuLink asChild>
                                            <a
                                                onClick={() => handleScroll(section)} className="hover:text-blue-600 text-left">
                                                {section}
                                                
                                            </a>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </SlideRightWhenVisible>

                <FadeInWhenVisible>
                    <Contacts />
                </FadeInWhenVisible>
                
                <SlideLeftWhenVisible>
                    <Socmed />
                </SlideLeftWhenVisible>
            </div>

            <hr className="w-11/12 border-slate-500 border-t-2"/>

            <div className="w-11/12 flex items-center justify-center py-6">
                <p className="text-sm text-center">&copy; 2025 Gamit, Cliford Vincent C.&mdash;Designed and developed by me.</p>
            </div>
        </section>
    );
}