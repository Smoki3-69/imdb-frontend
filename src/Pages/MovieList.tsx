import { SlidersHorizontal } from 'lucide-react';
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const MovieList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  
  const Movies = [
    {
        id: 1,
        title: "Dune: Part 2",
        rating: 8.8,
        releaseDate: "March 1, 2024",
        description: "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.",
        image: "https://images8.alphacoders.com/131/1314205.jpeg",
        genre: ["Action", "Sci-Fi", "Adventure"]
    },
    {
        id: 2,
        title: "Oppenheimer",
        rating: 8.3,
        releaseDate: "July 11, 2023",
        description: "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
        image: "https://i.pinimg.com/originals/b5/2b/b1/b52bb1899806e184d95d39933215bc77.png",
        genre: ["Action", "Historic", "Thriller"]
    },
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
    },
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
    },
    {
      id: 11,
      title: "The Shawshank Redemption",
      rating: 9.3,
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      genre: ["Drama"]
    },
    {
      id: 12,
      title: "The Godfather",
      rating: 9.2,
      year: 1972,
      image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: ["Crime", "Drama"],
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{search ? `Search Results for "${search}"` : 'Popular Movies'}</h1>
        <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-900 transition-colors">
          <SlidersHorizontal /> Filters
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
              {/* Image with zoom effect */}
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-300"
              />
              {/* Overlay with glow effect for rating */}
              <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200">
                {movie.rating} <Star className="inline-block text-yellow-400 ml-1" />
              </div>
              {/* Card content */}
              <div className="p-4 bg-white flex flex-col group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-gradient-to-r from-purple-400 via-pink-500 to-red-500 truncate transition-all duration-200">
                  {movie.title}
                </h2>
                <div className="text-sm text-gray-500 group-hover:text-gray-300 mb-2">{movie.year}</div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {movie.genre.slice(0, 2).map((g) => (
                    <span key={g} className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
