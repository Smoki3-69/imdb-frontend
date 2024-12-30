import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { Camera, Wallet, Film, Award, Star, Calendar, Clock, BarChart3, Barcode } from 'lucide-react'

const MovieDetails = () => {
  const Movies = [
    {
      id: 1,
      title: "Dune: Part Two",
      rating: 8.8,
      year: 2024,
      image: "https://www.avsforum.com/attachments/dune-part-two-header-jpeg.3614613/",
      duration: "166 min",
      genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
      director: "Denis Villeneuve",
      description: "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.",
      cast: [
        { id: 1, name: "Timothee Chalamet", role: "Paul Atreides", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/535891_v9_bc.jpg", bio: "Rising Star" },
        { id: 2, name: "Zendaya", role: "Chani", image: "https://hips.hearstapps.com/hmg-prod/images/zendaya-cher-makeup-6716303946125.jpg?crop=0.939xw:0.783xh;0.0425xw,0.0295xh&resize=980:*", bio: "Established Actress" }
      ],
      trailer: "https://www.youtube.com/watch?v=Way9Dexny3w&t=15s&pp=ygUOZHVuZSAyIHRyYWlsZXI%3D",
      awards: ["Academy Award Nominee", "Golden Globe Nominee"],
      boxOffice: "$494.7M",
      language: "English",
      productionCompany: "Legendary Entertainment",
      releaseDate: "2024-03-01",
      metacriticsScore: 81,
      rottenTomatoesScore: 94
    },
    {
      id: 2,
      title: "Oppenheimer",
      rating: 8.9,
      year: 2023,
      image: "https://i.ytimg.com/vi/7KD8JwDmMFA/maxresdefault.jpg",
      duration: "180 min",
      genre: ["Biography", "Drama", "History"],
      director: "Christopher Nolan",
      description: "The story of J. Robert Oppenheimer, the brilliant physicist who led the Manhattan Project, which developed the atomic bomb during World War II, and his struggles with the moral implications of his creation.",
      cast: [
        { id: 1, name: "Cillian Murphy", role: "J. Robert Oppenheimer", image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Cillian_Murphy_2019.jpg", bio: "Irish actor known for his roles in 'Peaky Blinders', 'Inception', and 'The Dark Knight Trilogy.'" },
        { id: 2, name: "Emily Blunt", role: "Katherine Oppenheimer", image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Emily_Blint_2015.jpg", bio: "Award-winning actress known for 'The Devil Wears Prada', 'A Quiet Place', and 'Edge of Tomorrow.'" },
        { id: 3, name: "Robert Downey Jr.", role: "Lewis Strauss", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Robert_Downey_Jr_2014.jpg", bio: "Actor best known for 'Iron Man', 'Sherlock Holmes', and his role in the 'Avengers' series." },
        { id: 4, name: "Matt Damon", role: "Leslie Groves", image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Matt_Damon_2013.jpg", bio: "Academy Award-winning actor known for 'Good Will Hunting', 'The Martian', and 'The Bourne Series.'" }
      ],
      trailer: "https://www.youtube.com/watch?v=bK6ldnjE3Y0&pp=ygUTb3BwZW5oZWltZXIgdHJhaWxlcg%3D%3D",
      awards: ["Academy Award Nominee", "Golden Globe Nominee", "BAFTA Award Nominee"],
      boxOffice: "$1.1 billion (as of Dec 2023)",
      language: "English",
      productionCompany: "Syncopy, Universal Pictures",
      releaseDate: "2023-07-21",
      metacriticsScore: 93,
      rottenTomatoesScore: 94
    },

    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      rating: 8.6,
      year: 2023,
      image: "https://4kwallpapers.com/images/wallpapers/spider-man-across-1920x1080-11595.jpg",
      duration: "140 min",
      genre: ["Action", "Animation", "Adventure"],
      director: ["Joaquim Dos Santos", "Kemp Powers", "Justin K. Thompson"],
      description: "Miles Morales returns for the next chapter of the Spider-Verse saga, uniting with Gwen Stacy and a new team of Spider-People to face a new threat.",
      cast: [
        { id: 1, name: "Shameik Moore", role: "Miles Morales", image: "https://m.media-amazon.com/images/S/pv-target-images/3c7c45988ed34fe4628aed9d51507061434432482279e1b69f8fd11ced6869bf._SX1080_FMjpg_.jpg", bio: "Voice actor and actor known for 'The Get Down' and 'Dope.'" },
        { id: 2, name: "Hailee Steinfeld", role: "Gwen Stacy", image: "https://i.pinimg.com/originals/24/4d/8b/244d8b6ae51e9f3a99b8d7583859067b.jpg", bio: "Academy Award nominee and actress known for 'True Grit' and 'Pitch Perfect.'" },
        { id: 3, name: "Oscar Isaac", role: "Miguel O'Hara/Spider-Man 2099", image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Oscar_Isaac_2016.jpg", bio: "Actor known for his roles in 'Ex Machina', 'Star Wars' and 'Dune'." }
      ],
      trailer: "https://www.youtube.com/watch?v=cqGjhVJWtEg&pp=ygUfYWNyb3NzIHRoZSBzcGlkZXIgdmVyc2UgdHJhaWxlcg%3D%3D",
      awards: ["Academy Award Nominee", "Golden Globe Nominee"],
      boxOffice: "$380 million (as of Dec 2023)",
      language: "English",
      productionCompany: "Sony Pictures Animation",
      releaseDate: "2023-06-02",
      metacriticsScore: 83,
      rottenTomatoesScore: 97
    },
    {
      id: 4,
      title: "Guardians of the Galaxy Vol. 3",
      rating: 8.0,
      year: 2023,
      image: "https://images5.alphacoders.com/129/1291881.jpg",
      duration: "150 min",
      genre: ["Action", "Adventure", "Comedy"],
      director: "James Gunn",
      description: "The Guardians of the Galaxy embark on a mission to save Rocket, uncovering secrets about their past and facing new threats.",
      cast: [
        { id: 1, name: "Chris Pratt", role: "Peter Quill / Star-Lord", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Chris_Pratt_2019.jpg", bio: "Actor known for his roles in 'Parks and Recreation' and 'Jurassic World.'" },
        { id: 2, name: "Zoe Saldana", role: "Gamora", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Zoe_Saldana_2015.jpg", bio: "Actress known for 'Avatar', 'Guardians of the Galaxy' and 'Star Trek.'" },
        { id: 3, name: "Dave Bautista", role: "Drax", image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Dave_Bautista_2019.jpg", bio: "Wrestler turned actor, known for his role in 'Guardians of the Galaxy' and 'Blade Runner 2049.'" }
      ],
      trailer: "https://www.youtube.com/watch?v=u3V5KDHRQvk&pp=ygUOZ29nIHYzIHRyYWlsZXI%3D",
      awards: ["Academy Award Nominee", "Golden Globe Nominee"],
      boxOffice: "$850 million (as of Dec 2023)",
      language: "English",
      productionCompany: "Marvel Studios",
      releaseDate: "2023-05-05",
      metacriticsScore: 74,
      rottenTomatoesScore: 81
    },
    {
      id: 5,
      title: "John Wick: Chapter 4",
      rating: 8.2,
      year: 2023,
      image: "https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF1000,1000_QL80_.jpg",
      duration: "169 min",
      genre: ["Action", "Crime", "Thriller"],
      director: "Chad Stahelski",
      description: "John Wick seeks vengeance while being pursued by bounty hunters and facing an even more powerful adversary in his quest to escape his past.",
      cast: [
        { id: 1, name: "Keanu Reeves", role: "John Wick", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Keanu_Reeves_2019.jpg", bio: "Actor best known for his roles in 'The Matrix' series and 'John Wick' franchise." },
        { id: 2, name: "Donnie Yen", role: "Caine", image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Donnie_Yen_2019.jpg", bio: "Martial artist and actor known for 'Ip Man' and 'Rogue One: A Star Wars Story.'" },
        { id: 3, name: "Bill Skarsgård", role: "The Marquis", image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bill_Skarsg%C3%A5rd_2019.jpg", bio: "Actor known for his role as Pennywise in 'It' and 'It Chapter Two.'" }
      ],
      trailer: "https://www.youtube.com/watch?v=qEVUtrk8_B4&pp=ygUUancgY2hhcHRlciA0IHRyYWlsZXI%3D",
      awards: ["Best Action Movie Nominee", "MTV Movie Award Winner"],
      boxOffice: "$430 million (as of Dec 2023)",
      language: "English",
      productionCompany: "Lionsgate",
      releaseDate: "2023-03-24",
      metacriticsScore: 75,
      rottenTomatoesScore: 94
    },
    {
      id: 6,
      title: "Fast X",
      rating: 6.8,
      year: 2023,
      image: "https://4kwallpapers.com/images/wallpapers/fast-x-2023-movies-7680x4320-11236.jpg",
      duration: "141 min",
      genre: ["Action", "Adventure", "Crime"],
      director: "Louis Leterrier",
      description: "Dom Toretto and his family face new challenges and a dangerous new villain in the latest chapter of the high-octane Fast & Furious franchise.",
      cast: [
        { id: 1, name: "Vin Diesel", role: "Dom Toretto", image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Vin_Diesel_2013.jpg", bio: "Actor best known for his roles in 'Fast & Furious' and 'XXX'." },
        { id: 2, name: "Michelle Rodriguez", role: "Letty Ortiz", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Michelle_Rodriguez_2019.jpg", bio: "Actress known for 'Fast & Furious' and 'Resident Evil'." },
        { id: 3, name: "Jason Momoa", role: "Dante", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Jason_Momoa_2018.jpg", bio: "Actor known for 'Aquaman' and 'Game of Thrones.'" }
      ],
      trailer: "https://www.youtube.com/watch?v=32RAq6JzY-w",
      awards: ["Teen Choice Award", "MTV Movie Award Nominee"],
      boxOffice: "$720 million (as of Dec 2023)",
      language: "English",
      productionCompany: "Universal Pictures",
      releaseDate: "2023-05-19",
      metacriticsScore: 55,
      rottenTomatoesScore: 60
    },
    {
      id: 7,
      title: "The Conjuring: Last Rites",
      rating: 7.6,
      year: 2024,
      image: "https://m.media-amazon.com/images/M/MV5BYTZmMTdhMzUtNDMzOS00MDc5LTgzMmItYzdiZjcxODZiZWIyXkEyXkFqcGc@._V1_.jpg",
      duration: "120 min",
      genre: ["Horror", "Mystery", "Thriller"],
      director: "Michael Chaves",
      description: "The Warrens face their darkest case yet as they confront a powerful and ancient demon in a remote New England village.",
      cast: [
        { id: 1, name: "Patrick Wilson", role: "Ed Warren", image: "https://example.com/patrick_wilson.jpg", bio: "Veteran Actor" },
        { id: 2, name: "Vera Farmiga", role: "Lorraine Warren", image: "https://example.com/vera_farmiga.jpg", bio: "Renowned Actress" }
      ],
      trailer: "https://www.youtube.com/watch?v=aqvfTZTCyg0&pp=ygUcY29uanVyaW5nIGxhc3Qgcml0ZXMgdHJhaWxlcg%3D%3D",
      awards: ["Horror Movie of the Year Nominee"],
      boxOffice: "TBD",
      language: "English",
      productionCompany: "New Line Cinema",
      releaseDate: "2024-10-31",
      metacriticsScore: 70,
      rottenTomatoesScore: 82
    },
    {
      id: 8,
      title: "The Batman: Part II",
      rating: 8.9,
      year: 2025,
      image: "https://m.media-amazon.com/images/M/MV5BMTU2NzhiYWUtYThlZi00OWIyLTk3YWEtZjY3NmJjOTZiZDAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      duration: "140 min",
      genre: ["Action", "Crime", "Drama"],
      director: "Matt Reeves",
      description: "Bruce Wayne continues his crusade against crime in Gotham City, facing new enemies and uncovering secrets about his past.",
      cast: [
        { id: 1, name: "Robert Pattinson", role: "Bruce Wayne / Batman", image: "https://example.com/robert_pattinson.jpg", bio: "Leading Actor" },
        { id: 2, name: "Zoë Kravitz", role: "Selina Kyle / Catwoman", image: "https://example.com/zoe_kravitz.jpg", bio: "Critically Acclaimed Actress" }
      ],
      trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4&pp=ygUQYmF0bWFuIDIgdHJhaWxlcg%3D%3D",
      awards: ["Best Sequel Nominee"],
      boxOffice: "TBD",
      language: "English",
      productionCompany: "Warner Bros.",
      releaseDate: "2025-03-15",
      metacriticsScore: 88,
      rottenTomatoesScore: 94
    },
    {
      id: 9,
      title: "Five Nights at Freddy's 2",
      rating: 6.9,
      year: 2025,
      image: "https://m.media-amazon.com/images/M/MV5BZmYxZjEwYTAtOWY0ZS00MzExLWJkMmItYTM1YjdlZDZmYTZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      duration: "95 min",
      genre: ["Horror", "Mystery"],
      director: "Emma Tammi",
      description: "The haunting animatronics return with new terror as a new security guard takes on the night shift at Freddy Fazbear's.",
      cast: [
        { id: 1, name: "Josh Hutcherson", role: "Mike Schmidt", image: "https://example.com/josh_hutcherson.jpg", bio: "Talented Actor" },
        { id: 2, name: "Matthew Lillard", role: "William Afton", image: "https://example.com/matthew_lillard.jpg", bio: "Iconic Actor" }
      ],
      trailer: "https://www.youtube.com/watch?v=a_PeElUrQd4&pp=ygUOZm5hZiAyIHRyYWlsZXI%3D",
      awards: ["Horror Franchise Award Nominee"],
      boxOffice: "TBD",
      language: "English",
      productionCompany: "Blumhouse Productions",
      releaseDate: "2025-10-25",
      metacriticsScore: 64,
      rottenTomatoesScore: 71
    },
    {
      id: 10,
      title: "Mission: Impossible - Dead Reckoning Part Two",
      rating: 8.7,
      year: 2025,
      image: "https://m.media-amazon.com/images/M/MV5BMDJhNDUwOTYtOTYyZi00NzQwLWFiYjMtNzM1MTYxNTQ0YjI5XkEyXkFqcGc@._V1_.jpg",
      duration: "163 min",
      genre: ["Action", "Adventure", "Thriller"],
      director: "Christopher McQuarrie",
      description: "Ethan Hunt faces his most dangerous mission yet, racing against time to stop a global catastrophe.",
      cast: [
        { id: 1, name: "Tom Cruise", role: "Ethan Hunt", image: "https://example.com/tom_cruise.jpg", bio: "Legendary Actor" },
        { id: 2, name: "Hayley Atwell", role: "Grace", image: "https://example.com/hayley_atwell.jpg", bio: "Versatile Actress" }
      ],
      trailer: "https://www.youtube.com/watch?v=NOhDyUmT9z0&pp=ygUZbWkgZGVhZCByZWNrb25pbmcgdHJhaWxlcg%3D%3D",
      awards: ["Action Movie of the Year Nominee"],
      boxOffice: "TBD",
      language: "English",
      productionCompany: "Skydance Media",
      releaseDate: "2025-07-12",
      metacriticsScore: 83,
      rottenTomatoesScore: 89
    },
    {
      id: 11,
      title: "The Shawshank Redemption",
      rating: 9.3,
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      duration: "142 min",
      genre: ["Drama"],
      director: "Frank Darabont",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      cast: [
        { "id": 1, "name": "Tim Robbins", "role": "Andy Dufresne", "image": "https://m.media-amazon.com/images/M/MV5BYmFkYTBlMzEtNGE2My00ODkxLWFlY2YtY2FkOGFkMzA1ZDdmXkEyXkFqcGdeQXVyNjEwMDA5MQ@@._V1_UY268_CR3,0,182,268_AL_.jpg", "bio": "Rising Star" },
        { "id": 2, "name": "Morgan Freeman", "role": "Ellis 'Red' Redding", "image": "https://m.media-amazon.com/images/M/MV5BMmUwZDRiY2MtYjZjMy00OGVjLThhY2QtZDAwMzI4YjRlMzk1XkEyXkFqcGdeQXVyNjEwMDA5MQ@@._V1_UY268_CR9,0,182,268_AL_.jpg", "bio": "Established Actor" }
      ],
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
      awards: ["Academy Award Winner", "Golden Globe Winner"],
      boxOffice: "$28.3M",
      language: "English",
      productionCompany: "Castle Rock Entertainment",
      releaseDate: "1994-09-23",
      metacriticsScore: 80,
      rottenTomatoesScore: 91
    },
    {
      id: 12,
      title: "The Godfather",
      rating: 9.2,
      year: 1972,
      image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      duration: "175 min",
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
      description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      cast: [
        { "id": 1, "name": "Marlon Brando", "role": "Vito Corleone", "image": "https://m.media-amazon.com/images/M/MV5BYzQxMzVhY2ItYjNlYi00ODkyLTk3ODAtZjFkOGQ3YjQ0NjY5XkEyXkFqcGdeQXVyNjEwMDA5MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "bio": "Legendary Actor" },
        { "id": 2, "name": "Al Pacino", "role": "Michael Corleone", "image": "https://m.media-amazon.com/images/M/MV5BMTkxODkzMjg4N15BMl5BanBnXkFtZTcwNjE2OTgyMQ@@._V1_UY268_CR1,0,182,268_AL_.jpg", "bio": "Iconic Actor" }
      ],
      trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
      awards: ["Academy Award Winner", "Golden Globe Winner"],
      boxOffice: "$245.1M",
      language: "English",
      productionCompany: "Paramount Pictures",
      releaseDate: "1972-03-14",
      metacriticsScore: 100,
      rottenTomatoesScore: 99
    }
    

  ];

  const { id } = useParams()
  const movie = Movies.find(m => m.id === Number(id)) || Movies[0]
  return (
    <div className="bg-cover min-h-screen text-white ">
      {/* Top Section - Movie Poster and Background Overlay */}
      <div
        className="w-screen h-screen bg-cover bg-repeat "
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-[2px]"></div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Section - Poster */}
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-lg shadow-lg w-72 md:w-80 object-cover"
              />
            </div>

            {/* Right Section - Movie Details */}
            <div className="w-full md:w-3/4 mt-8 md:mt-0 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

              <div className="grid grid-cols-2 md: w-3/4 grid-cols-2 gap-4 mb-2">
                {/* Rating, Year, Duration */}
                <div className="flex items-center bg-gray-800 p-3 rounded-md text-sm space-x-2">
                  <Star className="text-yellow-400" />
                  <span>{movie.rating}</span>
                </div>
                <br />
                <div className="flex items-center bg-gray-800 p-3 rounded-md text-sm space-x-2">
                  <Calendar className="text-white" />
                  <span>{movie.year}</span>
                </div>
<br />
                <div className="flex items-center bg-gray-800 p-3 rounded-md text-sm space-x-2">
                  <Clock className="text-white" />
                  <span>{movie.duration}</span>
                </div>
<br />
                {/* Metacritic and Rotten Tomatoes Scores */}
                <div className="flex items-center bg-gray-800 p-3 rounded-md text-sm space-x-2">
                  <BarChart3 className="text-green-400" />
                  <span>{movie.metacriticsScore} Metacritic</span>
                </div>
<br />
                <div className="flex items-center bg-gray-800 p-3 rounded-md text-sm space-x-2">
                  <BarChart3 className="text-red-400" />
                  <span>{movie.rottenTomatoesScore}% Rotten Tomatoes</span>
                </div>
              </div>

              {/* Genres, Director, Production, and Awards */}
              <p className="text-lg mt-4">{movie.genre.join(', ')}</p>
              <p className="text-lg mt-2">Directed by: {movie.director}</p>

              <div className="mt-6 flex space-x-4">
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Watch Trailer
                </a>
                <button
                  // Assuming a function addToWatchlist exists
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Add To Watchlist
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mt-6 mb-2">Overview</h2>
                <p className="text-lg text-gray-300">{movie.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Movie Details Section */}
      <div className="bg-black bg-opacity-80 p-8 rounded-lg mt-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Movie Details</h2>
        <table className="w-full text-left text-gray-300">
          <tbody>
            <tr>
              <td className="py-2">Box Office:</td>
              <td className="py-2">{movie.boxOffice}</td>
            </tr>
            <tr>
              <td className="py-2">Language:</td>
              <td className="py-2">{movie.language}</td>
            </tr>
            <tr>
              <td className="py-2">Production Company:</td>
              <td className="py-2">{movie.productionCompany}</td>
            </tr>
            <tr>
              <td className="py-2">Release Date:</td>
              <td className="py-2">{new Date(movie.releaseDate).toDateString()}</td>
            </tr>
            <tr>
              <td className="py-2">Director:</td>
              <td className="py-2">{movie.director}</td>
            </tr>
            <tr>
              <td className="py-2">Awards:</td>
              <td className="py-2">{movie.awards.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <div className="mt-12 bg-black bg-opacity-80 p-8 rounded-lg">
  <h2 className="text-2xl font-semibold text-white mb-6">Cast</h2>
  <div className="flex space-x-6 overflow-x-auto">
    {movie.cast.map((actor) => (
      <div key={actor.id} className="flex-shrink-0 text-center">
        <Link
          to={`/actor/${actor.id}`}
          className="block"
        >
          <img
            src={actor.image}
            alt={actor.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform transform"
          />
          <p className="text-sm text-white mt-2">{actor.name}</p>
          <p className="text-sm text-gray-400">{actor.role}</p>
        </Link>
      </div>
    ))}
  </div>
</div>
    </div>
  );




}


export default MovieDetails