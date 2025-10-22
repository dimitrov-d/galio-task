"use client";

import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (theme === "light") {
    return (
      <button
        onClick={toggleTheme}
        className="inline-flex items-center justify-center whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-background gap-1.5 has-[>svg]:px-2.5 fixed top-4 right-4 z-50 h-10 px-3 sm:px-4 font-medium rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#003313] text-[#00ff5d] border-[#003313] hover:bg-[#003313]/90 hover:shadow-[#003313]/30 sm:top-4 sm:right-4 lg:right-4"
        aria-label="Switch to dark mode"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-4 w-4" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
          <span className="text-xs sm:text-sm hidden xs:inline">Dark</span>
        </div>
      </button>
    );
  }


  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-background gap-1.5 has-[>svg]:px-2.5 fixed top-4 right-4 z-50 h-10 px-3 sm:px-4 font-medium rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#00ff5d] text-[#003313] border-[#00ff5d] hover:bg-[#00ff5d]/90 hover:shadow-[#00ff5d]/30 sm:top-4 sm:right-4 lg:right-4"
      aria-label="Switch to light mode"
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-4 w-4" aria-hidden="true">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
        <span className="text-xs sm:text-sm hidden xs:inline">Light</span>
      </div>
    </button>
  );
}
