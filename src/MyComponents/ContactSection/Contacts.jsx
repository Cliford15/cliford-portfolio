export default function Contacts(){
    return(
        <div className="h-auto flex flex-col items-start flex-1 sm:min-w-[350px]">
            <p className="font-bold text-sm">Email Address</p>
            <ul className="[&>li]:mt-3">
                <li className="hover:scale-110 transition-all duration-300 hover:text-blue-600">
                    <a href="mailto:gamitclifordvincentc@gmail.com" 
                    aria-label="Send an email to gamitclifordvincentc@gmail.com for personal work" 
                    >
                        gamitclifordvincentc@gmail.com
                    </a>    
                </li>
                <li className="hover:scale-110 transition-all duration-300 hover:text-blue-600">
                    <a href="mailto:clifordvincent.gamit@cvsu.edu.ph" 
                    aria-label="Send an email to clifordvincent.gamit@cvsu.edu.ph for school purposes" 
                    >
                        clifordvincent.gamit@cvsu.edu.ph
                    </a>
                </li>
            </ul>
            <p className="font-bold text-sm mt-10">Home Address</p>
            <a href="https://maps.app.goo.gl/eQdymEYbxRQLtjza6" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-300 hover:text-blue-600 transition-all duration-300 mt-3 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM19.5 10.5c0 7.125-7.5 11.25-7.5 11.25S4.5 17.625 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                </svg>
                <span className="underline underline-offset-2 decoration-blue-500">
                    Progressive 9 Village, Espeleta, Bacoor, Cavite
                </span>
            </a>
        </div>
    );
}