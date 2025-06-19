"use client"

import FeedBox from "@/components/layout/feed";
import FeedHeader from "@/components/layout/feedHeader";
import RightSidebar from "@/components/layout/rightbar";
import SideBar from "@/components/layout/sidebar";
import { FaBell, FaHome, FaPlus, FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)
  const sectionRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const scrollThreshold = 100 // based on snap item height

    const handleScroll = () => {
      const currentScrollY = section.scrollTop
      const delta = currentScrollY - lastScrollY.current

      // Hide header only if scrolling down *significantly*
      if (delta > scrollThreshold) {
        setShowHeader(false)
        lastScrollY.current = currentScrollY
      }
      // Show header if there's *any* upward scroll
      else if (delta < -2) {
        setShowHeader(true)
        lastScrollY.current = currentScrollY
      }
    }

    section.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      section.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-400">
      <div className="bg-background grid grid-cols-12 gap-4 max-w-7xl mx-auto lg:px-4">

        {/* Sidebar */}
        <aside className="hidden sm:block col-span-2 lg:col-span-3">
          <SideBar />
        </aside>

        {/* Feed */}
        <section ref={sectionRef} className="bg-background col-span-12 sm:col-span-9 lg:col-span-6 pb-5 overflow-y-scroll h-[100vh] scrollbar-hide snap-y snap-mandatory scroll-smooth">
          <FeedHeader showHeader={showHeader} />
          <FeedBox showHeader={showHeader} />
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
  );
}
