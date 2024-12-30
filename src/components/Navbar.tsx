import React, { useState } from "react";
import { Film, Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        /* if (searchQuery.trim()) {
            navigate(`/search?q=${searchQuery}`);
        }
    */
    };
    const navItems = [
        { label: "Movies", path: "/movies" },
        { label: "Top Rated", path: "/top-rated" }, // Ensure path matches
    ];
    

    return (
        <nav className="bg-black/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div>
                    <Link to="/" className="flex items-center gap-2 text-yellow-500 text-2xl font-bold">
                        <Film />
                        <span>MovieDB</span>
                    </Link>
                </div>

                {/* Search Form positioned on the left side of Movies & Top Rated */}
                <form
                    onSubmit={handleSearch}
                    className="flex items-center bg-zinc-800 rounded-lg px-3 py-2 text-white max-w-xl mr-4"
                >
                    <Search className="mr-2 text-white" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search Movies"
                        className="bg-transparent border-none outline-none w-full placeholder-gray-400"
                    />
                </form>

                {/* Navbar Items (Movies & Top Rated) */}
                <div className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link key={item.label} to={item.path} className="text-white hover:text-yellow-500 transition-all text-lg">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/90 text-white">
                    <div className="p-4">
                        <form onSubmit={handleSearch} className="flex items-center gap-2">
                            <Search />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Movies"
                                className="bg-transparent border-none outline-none w-full placeholder-gray-400"
                            />
                        </form>
                    </div>
                    <div className="flex flex-col gap-2 px-4 pb-4">
                        {navItems.map((item) => (
                            <Link key={item.label} to={item.path} className="block text-white hover:text-yellow-500 transition-all text-lg">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
