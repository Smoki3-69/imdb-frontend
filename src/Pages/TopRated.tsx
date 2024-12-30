import React from 'react';
import { Star, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const torpedo = () => {
    const movies = [
        {
            id: 11,
            title: "The ShawShank Redemption",
            rating: 9.3,
            image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
            year: 1994,
            votes: "2.8M",
            rank: 1
        },
        {
            id: 12,
            title: "The GodFather",
            rating: 9.2,
            image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            year: 1972,
            votes: "2.1M",
            rank: 2
        }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto p-6">
                <div className="flex items-center mb-8">
                    <Trophy className="text-yellow-500 w-8 h-8 mr-2" />
                    <h1 className="text-3xl font-bold text-gray-100">Top Rated Movies</h1>
                </div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {movies.map((movie) => (
                        <motion.div
                            key={movie.id}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform"
                        >
                            <Link to={`/movie/${movie.id}`}>
                                <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <div className="text-gray-500 font-bold text-xl mr-2">{movie.rank}</div>
                                            <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="text-yellow-500 w-5 h-5 mr-1" />
                                            <span>{movie.rating}</span>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        <span>{movie.year}</span> • <span>{movie.votes} votes</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default torpedo;
