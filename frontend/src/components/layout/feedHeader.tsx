import ThemeToggle from "../ui/themeToggle";

export default function FeedHeader({showHeader}: {showHeader : Boolean}) {
    return (
        <div className=
        {`sticky top-0 z-50 transition-transform duration-300 
        ${showHeader ? 'translate-y-0' : '-translate-y-full'} 
        bg-background flex gap-1 text-xl py-2 px-2 lg:py-5 lg:px-0`}
        >
            <div className="flex gap-2 whitespace-nowrap overflow-x-auto scrollbar-hide">
                <div className="px-2">For you</div>
                <div className="px-2">Following</div>
                <div className="px-2">Tags</div>
            </div>

            <ThemeToggle />
        </div>
    )
}