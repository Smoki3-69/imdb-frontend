import React from 'react';
import Hero from '../components/Hero.tsx';
import { Link } from 'react-router-dom';
import { TrendingUp, Star, Clock, Award } from 'lucide-react';
import MovieCarousel from '../components/MovieCarousel.tsx';


    const trendingMovies = [
        
            {
                id: 3,
                title: "Spider-Man: Across the Spider-Verse",
                rating: 8.6,
                image: "https://m.media-amazon.com/images/S/pv-target-images/3c7c45988ed34fe4628aed9d51507061434432482279e1b69f8fd11ced6869bf._SX1080_FMjpg_.jpg",
                year: 2023,
                genre: ["Action", "Animation", "Adventure"]
            },
            {
                id: 4,
                title: "Guardians of the Galaxy Vol. 3",
                rating: 8.0,
                image: "https://i.cdn.newsbytesapp.com/images/l257_2851636523743.jpg",
                year: 2023,
                genre: ["Action", "Adventure", "Comedy"]
            },
            {
                id: 5,
                title: "John Wick: Chapter 4",
                rating: 8.2,
                image: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/d4795c6b-9718-4c52-8d4a-858ce47cd694/review-john-wick-chapter-4-elevates-the-badass-action-franchise-to-a-new-level.jpg",
                year: 2023,
                genre: ["Action", "Crime", "Thriller"]
            },
            {
                id: 6,
                title: "Fast X",
                rating: 6.8,
                image: "https://images.alphacoders.com/131/1315896.jpeg",
                year: 2023,
                genre: ["Action", "Adventure", "Crime"]
            }
    
    ];
    
    const upcomingMovies = [
        {
            id: 7,
            title: "The Conjuring: Last Rites",
            rating: null,  // No rating yet
            image: "https://i.ytimg.com/vi/xvakXXeoEho/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCB2U0cqjQNCMC26xwutyQ89q__mQ", // Placeholder image
            year: 2024,
            genre: ["Horror", "Thriller", "Mystery"]
        },
        {
            id: 8,
            title: "Batman: Part 2",
            rating: null,  // No rating yet
            image: "https://images.hdqwalls.com/wallpapers/the-batman-2-reckoning-vx.jpg", // Placeholder image
            year: 2024,
            genre: ["Action", "Adventure", "Drama"]
        },
        {
            id: 9,
            title: "Five Nights at Freddy's 2 (FNAF 2)",
            rating: null,  // No rating yet
            image: "https://i.ytimg.com/vi/qtXLaNbr0KY/maxresdefault.jpg", // Placeholder image
            year: 2024,
            genre: ["Horror", "Mystery", "Thriller"]
        },
        {
            id: 10,
            title: "Mission: Impossible: Final Reckoning",
            rating: null,  // No rating yet
            image: "https://4kwallpapers.com/images/wallpapers/mission-impossible-2560x1440-19890.jpg", // Placeholder image
            year: 2024,
            genre: ["Action", "Adventure", "Thriller"]
        }
    ];
    

    const categories = [
        { icon: TrendingUp, label: "Trending", path: "/movies?sort=trending", color: "bg-yellow-500" },
        { icon: Star, label: "Top Rated", path: "/top-rated", color: "bg-purple-500" },
        { icon: Clock, label: "Coming Soon", path: "/coming-soon", color: "bg-blue-500" },
        { icon: Award, label: "Awards", path: "/awards", color: "bg-red-500" }
    ];

    
    const Home = () => {
        return (
            <div>
                <Hero />
                <main className="px-4 sm:px-8">
                    {/* Categories Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to={category.path}
                                className={`flex items-center justify-center space-x-2 py-4 px-6 rounded-md text-white ${category.color} hover:bg-opacity-80 transition`}
                            >
                                <category.icon className="text-xl" />
                                <span className="text-lg font-semibold">{category.label}</span>
                            </Link>
                        ))}
                    </div>
    
                    {/* Trending Now Section */}
                    <section className="mt-12">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                                <TrendingUp className="text-xl" />
                                <span>Trending Now</span>
                            </h2>
                            <Link to="/movies?sort=trending" className="text-blue-400 hover:text-blue-600">View All</Link>
                        </div>
                        <MovieCarousel movies={trendingMovies}/>
                    </section>
    
                    {/* Coming Soon Section */}
                    <section className="mt-12">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                                <Clock className="text-xl" />
                                <span>Coming Soon</span>
                            </h2>
                            <Link to="/coming-soon" className="text-blue-400 hover:text-blue-600">View All</Link>
                        </div>
                        <MovieCarousel movies={upcomingMovies}/>
                    </section>
    
                </main>
            </div>
        );
    };


    export default Home;    