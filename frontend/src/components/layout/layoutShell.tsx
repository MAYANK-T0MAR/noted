"use client"

import { useHeaderVisibilityContext } from "@/app/providers/HeaderVisibilityContext";
import RightSidebar from "@/components/layout/rightbar";
import SideBar from "@/components/layout/sidebar";
import { FaBell, FaHome, FaPlus, FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const { sectionRef } = useHeaderVisibilityContext();

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
                {/* Don't know why but this boy's default size is smaller than other's defaults */}
                <button><FaHome className="text-[1.7rem]" /></button>
                {/* ------------------------------------------ */}
                <button><FaSearch className="text-xl" /></button>
                <button><FaPlus className="text-xl" /></button>
                <button><FaBell className="text-xl" /></button>
                <button><IoPerson className="text-xl" /></button>
            </footer>
        </main>
    )
}