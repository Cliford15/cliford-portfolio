import {SlideLeftWhenVisible} from "../FadeInWhenVisible";

export default function Profile(){
    return(
        <div className="flex items-center justify-center">
            <SlideLeftWhenVisible>
                <div className="group relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
                
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-blue-500 via-purple-500
                    to-pink-500 animate-spin-slow">
                        <div className="w-full h-full rounded-full"></div>
                    </div>

                    {/* Flip container */}
                    <div className="absolute inset-[6px] perspective rounded-full">
                        <div className="flip-inner rounded-full">
                            {/* Front face */}
                            <div className="absolute inset-0 backface-hidden rounded-full overflow-hidden">
                                <img
                                    src="/ProfilePhoto.png"
                                    alt="Profile"
                                    className="object-cover w-full h-full rounded-full"
                                />
                            </div>

                            {/* Back face */}
                            <div 
                            className="absolute inset-0 backface-hidden rotate-y-180 rounded-full flex justify-center items-center
                            text-white text-lg font-semibold">
                                <img
                                    src="/Avatar.webp"
                                    alt="My Avatar"
                                    className="object-cover w-full h-full rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </SlideLeftWhenVisible>
        </div>
    );
}