import PostBox from "../ui/post";

export default function FeedBox() {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Feed</h2>
            <div className="space-y-4 w-full">
                {Array.from({ length: 60 }).map((_, i) => (
                    <PostBox i = {i}/>
                ))}

            </div>
        </>
    )
}