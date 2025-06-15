import { FaBell, FaBookmark, FaHome, FaPen, FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function SideBar() {
    return (
        <div className="sticky top-0 pt-5 h-[100vh] bg-background border-r border-foreground px-4 pb-4">
            <div className="text-3xl mb-4 ps-4">Noted</div>
            {/* Navigation Links */}
            <div className="flex flex-col justify-between h-[90vh]">
                <div>
                    <div className="flex gap-3 text-xl items-center hover:bg-gray-300 transition-colors duration-400 ease-in-out cursor-pointer p-4 rounded-4xl mb-2">
                        <FaHome />
                        <span>Home</span>
                    </div>
                    <div className="flex gap-3 text-xl items-center hover:bg-gray-300 transition-colors duration-400 ease-in-out cursor-pointer p-4 rounded-4xl mb-2">
                        <FaSearch />
                        <span>Explore</span>
                    </div>
                    <div className="flex gap-3 text-xl items-center hover:bg-gray-300 transition-colors duration-400 ease-in-out cursor-pointer p-4 rounded-4xl mb-2">
                        <FaBell />
                        <span>Notifications</span>
                    </div>
                    <div className="flex gap-3 text-xl items-center hover:bg-gray-300 transition-colors duration-400 ease-in-out cursor-pointer p-4 rounded-4xl mb-2">
                        <FaBookmark />
                        <span>Saved</span>
                    </div>
                    <div className="flex gap-3 text-xl items-center hover:bg-gray-300 transition-colors duration-400 ease-in-out cursor-pointer p-4 rounded-4xl mb-2">
                        <IoPerson />
                        <span>Profile</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center gap-3 text-xl items-center hover:bg-gray-300 transition-colors duration-400 ease-in-out cursor-pointer p-4 border border-bg rounded-4xl self-end mb-2">
                        <FaPen />
                        <span>Create</span>
                    </div>
                </div>
            </div>

        </div>
    )
}