"use client"

import { createContext, useContext, useState, useEffect, useRef } from "react"

interface headerVisibilityContextType {
    showHeader: boolean;
    sectionRef: React.RefObject<HTMLDivElement | null>;
}

const headerVisibilityContext = createContext<headerVisibilityContextType | null>(null)

export const useHeaderVisibilityContext = () => {
    const context = useContext(headerVisibilityContext)
    if (!context) throw new Error('useHeaderVisibilityContext must be used within HeaderVisibilityProvider');
    return context;
}

export function HeaderVisibilityProvider({ children }: { children: React.ReactNode }) {
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
    }, []);


    return (
        <headerVisibilityContext.Provider value={{ showHeader, sectionRef }}>
            {children}
        </headerVisibilityContext.Provider>
    );

}

