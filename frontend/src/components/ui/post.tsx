import { FaBookmark, FaComment, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

export default function PostBox({ i }: { i: number }) {
    return (
        <div className="mx-auto max-w-[360px] h-[640px] bg-background rounded-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] p-4 flex flex-col justify-between relative overflow-hidden text-foreground">
            
            {/* Header */}
            <div className="flex justify-between" >
                <div className="w-fit bg-[#21262d] px-2 py-[2px] flex items-center rounded-full text-xs text-[#c9d1d9]">Shower Thought</div>
                <div className="text-[1rem] text-[#8b949e]">2h ago</div>
            </div>

            {/* Main Text */}
            <div className="h-[500px]">
                <div className="h-[400px] overflow-ellipsis flex items-center text-2xl">
                    Who told you people that philosophy has to come from only the high places? Does the gutter not also look up at the stars?
                </div>
                {/* Action */}
                <div className="mt-2 mb-[13px] flex gap-4 text-xl text-gray-500">
                    <div className="flex items-center gap-1">
                        <FaRegHeart />
                        <span className="text-sm">978</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaRegComment />
                        <span className="text-sm">903</span>
                    </div>
                    <div className="ms-auto flex items-center">
                        <FaRegBookmark />
                    </div>
                </div>
                {/* Highlighted Comment */}
                {/* <div className="bg-gray-500 my-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, neque.
                </div> */}
                <blockquote className="border-l-4 border-gray-500 pl-2 italic text-[0.89rem] leading-[17px] text-foreground bg-background-100 p-1 overflow-ellipsis rounded-md max-w-xl mx-auto">
                    <div className="w-full overflow-hidden text-ellipsis line-clamp-2 break-words">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus placeat rerum obcaecati dignissimos doloribus explicabo.
                    </div>
                    <footer className="mt-1 text-[0.8rem] text-gray-500">— @waterEater</footer>
                </blockquote>
            </div>






            {/* Author */}
            <div className="flex items-center gap-2">
                <div
                    className="w-12 h-12 rounded-full border-2 border-green-600 bg-center bg-cover"
                    style={{ backgroundImage: "url('https://i.pravatar.cc/32')" }}
                />
                <div className="leading-5">
                    <div className="font-semibold text-foreground">Nathaniel</div>
                    <div className="text-[#8b949e]">@pleaseBurger</div>
                </div>
            </div>
        </div>
    )
}