import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"

export default function technologies(){
    return(
        <div className="relative overflow-hidden w-full h-[150px] sm:h-[250px] flex items-center justify-center font-Montserrat">
            <div className="absolute top-0 left-0 flex gap-5 animate-move-left whitespace-nowrap">
                {[
                "HTML", "CSS", "Javascript", "React", "Java", "Python", "MySQL", "MongoDB", "PHP", "Figma",
                "HTML", "CSS", "Javascript", "React", "Java", "Python", "MySQL", "MongoDB", "PHP", "Figma",
                ].map((skill, index) => (
                    <Card
                        key={index}
                        className="w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] shadow-md border-none 
                        rounded-none bg-gradient-to-r from-slate-800 to-gray-900 shadow-black hover:shadow-lg hover:shadow-blue-500 flex-shrink-0"
                    >
                            <CardContent className="h-[75px] sm:h-[150px] flex justify-center items-center">
                            <img
                                src={`/${skill}.png`}
                                alt={`${skill} Logo`}
                                className="object-contain w-full h-full"
                            />
                            </CardContent>
                        <CardFooter className="h-[25px] sm:h-[50px] flex justify-center items-center p-0">
                            <CardTitle className="text-center text-slate-100 text-sm font-semibold">
                                {skill}
                            </CardTitle>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}