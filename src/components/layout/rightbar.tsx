import SearchBar from "../ui/searchBar";

export default function RightSidebar() {
    
    return (
        <div className="sticky top-5 h-[calc(100vh-1.3rem*2)] bg-background overflow-y-auto scrollbar-hide">
            <SearchBar />
            <h2 className="text-xl mb-4">What's happening</h2>
            <div className="space-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="border border-foreground rounded-xl h-44 flex items-center justify-center"
                    >
                        item {i}
                    </div>
                ))}
            </div>
        </div>
    );
}
