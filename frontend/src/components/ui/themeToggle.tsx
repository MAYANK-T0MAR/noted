'use client';
import { useTheme } from '../../app/providers/ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="px-2 ms-auto text-xl rounded-full cursor-pointer"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme === 'dark' ? 'moon' : 'sun'}
                    initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4 }}
                >
                    {theme === 'dark' ? <FaSun/> : <FaMoon/>}
                </motion.div>
            </AnimatePresence>
        </button>
    )
}