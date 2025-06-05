export default function SearchBar() {
    return (
        <div className="sticky top-0 pb-5 bg-black">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-400
             border-2 border-transparent focus:border-blue-500 focus:outline-none"
                />
                <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                </svg>
            </div>
        </div>

    )
}