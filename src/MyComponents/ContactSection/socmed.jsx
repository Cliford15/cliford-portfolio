export default function Socmed(){
    return(
        <div className="h-auto flex flex-col items-start flex-1 sm:min-w-[350px]">
            <p className="font-bold text-sm">Phone Number</p>
            <a href="tel:+639123456789"
            className="text-slate-300 hover:text-blue-600 underline underline-offset-2 transition-all duration-300 hover:scale-110"
            >
            +63 945 990 4012
            </a>
            <div className="flex flex-row mt-10 gap-5">
                <a href="https://www.facebook.com/cliford.gamit.7" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-150">
                    <div className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                            className="w-4 h-4">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 
                                1.325 24h11.495v-9.294H9.692V11.41h3.128V8.414c0-3.1 
                                1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.92
                                c-1.507 0-1.8.717-1.8 1.768v2.314h3.6l-.469 3.296h-3.131V24h6.138
                                c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
                        </svg>
                    </div>
                </a>

                <a href="https://www.instagram.com/clincent15/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-500 hover:text-pink-700 transition-all duration-300">
                    <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-2 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-150">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                            className="w-4 h-4">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75zm4.88-.63a.88.88 0 1 1-.88.88.88.88 0 0 1 .88-.88z"/>
                        </svg>
                    </div>
                </a>

                <a href="https://www.youtube.com/channel/UCWwYJyyzrnMS10c2I0ciXyw" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-all duration-300">
                    <div className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-150">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                            className="w-4 h-4">
                        <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.8-1.5-.8-1.9-.9C17.9 2.6 12 2.6 12 2.6h-.1s-5.9 0-8.8.4c-.4 0-1.2.1-1.9.9-.6.7-.8 2.3-.8 2.3S0 8.1 0 10v4c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.7.8 1.6.8 2 .9 1.4.1 8.8.4 8.8.4s5.9 0 8.8-.4c.4 0 1.2-.1 1.9-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.6 14.7V9.3l5.7 2.7-5.7 2.7z"/>
                        </svg>
                    </div>
                </a>

                <a href="https://x.com/ClinCent15" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-black transition-all duration-300">
                    <div className="bg-black text-white p-2 rounded-full hover:scale-150 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.5 11.24H16.2l-5.3-6.938L4.8 21.75H1.49l7.73-8.838L1 2.25h6.927l4.788 6.29 5.529-6.29zM16.16 19.95h1.834L7.92 4.126H5.939l10.221 15.824z"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}