import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCarousel = ({ movies }) => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleMovies = 4; // Number of movies to display at once

    // Handle Next Slide
    const nextSlide = () => {
        setStartIndex((prev) => (prev + visibleMovies) % movies.length);
    };

    // Handle Previous Slide
    const prevSlide = () => {
        setStartIndex((prev) => (prev - visibleMovies + movies.length) % movies.length);
    };

    // Get the visible movies based on the current start index
    const visibleMoviesList = movies.slice(startIndex, startIndex + visibleMovies);

    return (
        <div className="relative">
            <div className="flex overflow-hidden space-x-4">
                {/* Movie Cards */}
                {visibleMoviesList.map((movie) => (
                    <div key={movie.id} className="flex-shrink-0 w-full sm:w-1/4 px-2">
                        <Link to={`/movie/${movie.id}`} className="relative block rounded-lg overflow-hidden group">
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-full h-[300px] object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                            />
                            {/* Movie Title and Rating Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white text-sm sm:text-lg p-3">
                                <div className="font-semibold">{movie.title}</div>
                                {movie.rating && (
                                    <div className="mt-1 text-yellow-400 text-xs sm:text-sm">
                                        <span>{movie.rating} / 10</span>
                                    </div>
                                )}
                                {/* Genres */}
                                <div className="mt-2 text-xs sm:text-sm">
                                    {movie.genre.join(', ')}
                                </div>
                            </div>
                            {/* View Details Button */}
                            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-center">
                                <button
                                    className="px-4 py-2 bg-yellow-500 text-black text-xs sm:text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                                >
                                    View Details
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Carousel Navigation */}
            {movies.length > visibleMovies && (
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                    <button
                        onClick={prevSlide}
                        className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MovieCarousel;
