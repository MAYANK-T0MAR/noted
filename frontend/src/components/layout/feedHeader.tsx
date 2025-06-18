'use client'


import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/themeToggle";

export default function FeedHeader() {
    const [showHeader, setShowHeader] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
                setShowHeader(false) // scrolling down
            } else {
                setShowHeader(true) // scrolling up
            }
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    return (
        <div className=
        {`sticky top-0 z-50 transition-transform duration-300 
        ${showHeader ? 'translate-y-0' : '-translate-y-full'} 
        bg-background flex gap-1 text-xl py-2 lg:py-5`}
        >
            <div className="flex gap-2 whitespace-nowrap overflow-x-auto scrollbar-hide">
                <div className="px-2">For you</div>
                <div className="px-2">Following</div>
                <div className="px-2">Tags</div>
            </div>

            <ThemeToggle />
        </div>
    )
}