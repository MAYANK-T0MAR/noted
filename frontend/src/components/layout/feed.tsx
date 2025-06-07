import PostBox from "../ui/post";

export default function FeedBox() {
    return (
        <div className="space-y-4 w-full">
            {Array.from({ length: 20 }).map((_, i) => (
                <PostBox key={i} i={i} />
            ))}
        </div>
    )
}