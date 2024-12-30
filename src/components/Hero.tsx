import React, { useState, useEffect } from 'react';
import { Play, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredMovies = [
    {
        id: 1,
        title: "Dune: Part 2",
        rating: 8.8,
        releaseDate: "March 1, 2024",
        description: "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.",
        image: "https://images8.alphacoders.com/131/1314205.jpeg",
    },
    {
        id: 2,
        title: "Oppenheimer",
        rating: 8.3,
        releaseDate: "July 11, 2023",
        description: "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
        image: "https://i.pinimg.com/originals/b5/2b/b1/b52bb1899806e184d95d39933215bc77.png",
    }
];

const Hero = () => {
    const [currentMovie, setCurrentMovie] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);   
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const movie = featuredMovies[currentMovie];

    return (
        <div className="relative h-[90vh] bg-cover from-transparent to-black">
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 gradient-mask"
                style={{ backgroundImage: `url('${movie.image}')` }}
            >
                <div className="absolute inset-0 bg-black/20 " />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-start p-8 sm:p-16 text-white space-y-6">
                {/* Movie Rating and Release Date */}
                <div className="flex items-center space-x-6 text-lg">
                    <div className="flex items-center space-x-2">
                        <Star className="text-yellow-400" />
                        <span>{movie.rating} Rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calendar className="text-gray-300" />
                        <span>{movie.releaseDate}</span>
                    </div>
                </div>

                {/* Movie Title with Hover Glow Effect */}
                <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-shadow-md hover:text-yellow-500 transition-all mb-4">
                    {movie.title}
                </h1>

                {/* Movie Description */}
                <p className="text-lg sm:text-xl max-w-lg text-shadow-md mb-6">{movie.description}</p>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <Link
                        to={`/movie/${movie.id}`}
                        className="flex items-center bg-yellow-500 text-white border border-yellow-500 px-6 py-3 rounded-md hover:bg-yellow-600 transition"
                    >
                        <Play className="mr-2" /> Watch Trailer
                    </Link>
                    <Link
                        to={`/movie/${movie.id}`}
                        className="text-white border-b-2 border-transparent hover:border-white transition"
                    >
                        More Info
                    </Link>
                </div>

                {/* Movie Selector Dots */}
                <div className="flex mt-6 space-x-2">
                    {featuredMovies.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentMovie(index)}
                            className={`w-3 h-3 rounded-full bg-white ${
                                currentMovie === index ? 'bg-yellow-400' : 'bg-white/50'
                            } transition-colors`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
