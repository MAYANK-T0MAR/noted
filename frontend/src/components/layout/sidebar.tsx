import { FaBell, FaBookmark, FaHome, FaPen, FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function SideBar() {
    return (
        <div className="sticky top-0 pt-5 h-[100vh] bg-background border-r border-foreground px-4 pb-4">
            <div className="font-bold text-3xl mb-4 ps-4 hidden lg:block">Noted</div>
            <div className="font-bold justify-end text-3xl mb-4 px-4 flex lg:hidden">N</div>

            {/* Navigation Links */}
            <div className="flex flex-col justify-between h-[90vh]">

                {/* Top Nav */}
                <div className="flex flex-col items-end lg:items-start">
                    {[
                        { icon: <FaHome />, label: "Home" },
                        { icon: <FaSearch />, label: "Explore" },
                        { icon: <FaBell />, label: "Notifications" },
                        { icon: <FaBookmark />, label: "Saved" },
                        { icon: <IoPerson />, label: "Profile" },
                    ].map(({ icon, label }, i) => (
                        <div
                            key={i}
                            className="flex items-center p-4 mb-2 rounded-4xl text-xl w-[fit-content] gap-3 hover:bg-gray-300 cursor-pointer transition-colors duration-400 ease-in-out"
                        >
                            {icon}
                            <span className="hidden lg:block">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Bottom Action */}
                <div className="flex flex-col items-end lg:items-start">
                    <div className="w-[fit-content] lg:w-[100%] flex items-center justify-center p-4 mb-2 rounded-4xl gap-3 border border-bg cursor-pointer
                      hover:bg-gray-300 transition-colors duration-400 ease-in-out">
                        <FaPen />
                        <span className="hidden lg:block">Create</span>
                    </div>
                </div>
            </div>
        </div>

    )
}