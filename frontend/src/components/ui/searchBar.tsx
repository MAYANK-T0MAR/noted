export default function SearchBar() {
    return (
        <div className="sticky top-0 pb-5 bg-background">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-200 text-foreground placeholder-gray-400
             border-1 border-transparent focus:border-foreground focus:outline-none"
                />
                <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                </svg>
            </div>
        </div>

    )
}