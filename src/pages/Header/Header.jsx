import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return false; // light mode بالدفولت
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none transition-colors duration-300">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">

          <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5 transition-colors">

            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link to="/" className="text-gray-900 dark:text-white font-bold transition-colors">Portfolio</Link>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-gray-700 dark:text-yellow-400 text-lg p-2"
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-900 dark:text-white p-2"
                >
                  <FaBars />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      ${
                        activeLink === id
                          ? "bg-blue-500 text-white shadow-lg"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 dark:hover:text-white"
                      }
                    `}
                  >
                    <Icon className={`text-base ${activeLink === id ? "scale-110" : ""}`} />
                    <span className="inline">{text}</span>
                  </Link>
                ))}

                {/* Dark Mode Toggle - Desktop */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="hidden md:flex ml-2 p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-yellow-400 hover:ring-2 ring-blue-400 transition-all duration-300"
                >
                  {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}