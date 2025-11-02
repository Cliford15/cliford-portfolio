import { School } from "lucide-react";

export default function Education(){
    return(
        <div className="flex-1 flex flex-col min-w-[300px] gap-3 items-start font-Montserrat text-slate-200 px-3 md:px-12 lg:px-16 border-[1px] border-white rounded-xl">
            <div className="flex gap-2 w-full items-center justify-center underline decoration-yellow-500 underline-offset-8 font-semibold text-xl">
                <School />
                <h1>Educational Background</h1>
            </div>

            <div className="flex flex-col w-full text-start">
                <h1 className="font-semibold">Cavite State University &mdash; Bacoor Campus</h1>
                <ul className="list-disc pl-10">
                    <li>College</li>
                    <li>Bachelor of Science in Computer Science</li>
                    <li>Expected Graduation 2026 - 2027</li>
                </ul>
            </div>

            <div className="flex flex-col w-full text-start">
                <h1 className="font-semibold">Progressive Senior High School</h1>
                <ul className="list-disc pl-10">
                    <li>Senior Secondary</li>
                    <li>Electronic Products Assembly and Servicing</li>
                    <li>Batch 2019 - 2020</li>
                </ul>
            </div>

            <div className="flex flex-col w-full text-start">
                <h1 className="font-semibold">Bacoor National High School</h1>
                <ul className="list-disc pl-10">
                    <li>Secondary</li>
                    <li>Batch 2017 - 2018</li>
                </ul>
            </div>

            <div className="flex flex-col w-full text-start">
                <h1 className="font-semibold">Progressive Elementary School</h1>
                <ul className="list-disc pl-10">
                    <li>Preliminary</li>
                    <li>Batch 2013 - 2014</li>
                </ul>
            </div>
        </div>
    );
}