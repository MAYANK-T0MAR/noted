"use client"

import { useHeaderVisibilityContext } from "@/app/providers/HeaderVisibilityContext";
import RightSidebar from "@/components/layout/rightbar";
import SideBar from "@/components/layout/sidebar";
import { i, label } from "framer-motion/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBell, FaPlus, FaRegBell } from "react-icons/fa";
import { IoIosSearch, IoMdSearch } from "react-icons/io";
import { IoHomeOutline, IoHomeSharp, IoPerson, IoPersonOutline } from "react-icons/io5";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const { sectionRef } = useHeaderVisibilityContext();
    const pathName = usePathname();

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-400">
            <div className="bg-background grid grid-cols-12 gap-4 max-w-7xl mx-auto lg:px-4">

                {/* Sidebar */}
                <aside className="hidden sm:block col-span-2 lg:col-span-3">
                    <SideBar />
                </aside>

                {/* Feed */}
                <section ref={sectionRef} className="bg-background col-span-12 sm:col-span-9 lg:col-span-6 pb-5 overflow-y-scroll h-[100vh] scrollbar-hide snap-y snap-mandatory scroll-smooth">
                    {children}
                </section>

                {/* Rightbar */}
                <aside className="bg-background sticky top-5 col-span-3 hidden lg:block">
                    <RightSidebar />
                </aside>
            </div>
            <footer className="fixed bottom-0 left-0 right-0 bg-background flex justify-around items-center py-4 sm:hidden">
                {[
                    { icon : <IoHomeOutline className="text-xl"/>, activeIcon : <IoHomeSharp className="text-xl"/>, routeName : "/" },
                    { icon : <IoIosSearch className="text-xl"/>, activeIcon : <IoMdSearch className="text-xl"/>, routeName : "/explore" },
                    { icon : <FaPlus className="text-xl"/>, activeIcon : <FaPlus className="text-xl"/>, routeName : "/" },
                    { icon : <FaRegBell className="text-xl"/>, activeIcon : <FaBell className="text-xl"/>, routeName : "/notifications" },
                    { icon : <IoPersonOutline className="text-xl"/>, activeIcon : <IoPerson className="text-xl"/>, routeName : "/user/kaisel" },
                ].map(({ icon, activeIcon, routeName }, i) => (
                    <Link key={i} href={routeName}>
                        {pathName === routeName ? activeIcon : icon}
                    </Link>
                ))}
            </footer>
        </main>
    )
}