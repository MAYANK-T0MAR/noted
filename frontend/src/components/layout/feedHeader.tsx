import ThemeToggle from "../ui/themeToggle";

export default function FeedHeader() {
    return (
        <div className="sticky top-0 flex gap-1 text-xl py-5 bg-background z-99">
            <div className="flex gap-2 whitespace-nowrap overflow-x-auto scrollbar-hide">
                <div className="px-2">For you</div>
                <div className="px-2">Following</div>
                <div className="px-2">Tags</div>
            </div>

            <ThemeToggle />
        </div>
    )
}