import PostBox from "../ui/post";

export default function FeedBox({showHeader} : {showHeader : boolean}) {
    return (
        <div className="space-y-4 w-full pt-2 lg:pt-4">
            {Array.from({ length: 20 }).map((_, i) => (
                <PostBox key={i} showHeader = {showHeader}/>
            ))}
        </div>
    )
}