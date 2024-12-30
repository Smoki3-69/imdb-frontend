import { Award, Instagram,  Star, Twitter } from 'lucide-react';
import React from 'react'
import { useParams, Link} from 'react-router-dom'


const actors = [
  {
    id: 1,
    name: "Zendaya",
    birthDate: "September 1, 1996",
    birthPlace: "Oakland, California, USA",
    nationality: "American",
    height: "5'10 FT(1.78M)",
    biography: "Zendaya Maree Stoermer Coleman is an American actress and singer. Her accolades include two Primetime Emmy Awards and a Golden Globe Award. In 2022, Time named her one of the 100 most influential people in the world. Born and raised in Oakland, California, Zendaya began her career as a child model and backup dancer.",
    image: "https://www.women.com/img/gallery/15-of-zendayas-most-gorgeous-hair-looks/intro-1713995771.jpg",
    coverImage: "https://media.glamour.com/photos/674f0eeb6790c42690f54566/master/w_2560%2Cc_limit/GettyImages-2187959506.jpg",
    awards: [
      {
        name: "Emmy Award",
        year: 2020,
        category: "Outstanding Lead Actress",
        film: "Euphoria"
      }
    ],
    socialMedia: {
      instagram: "https://instagram.com/zendaya",
      twitter: "https://twitter.com/zendaya",
    },
    knownFor: [
      {
        id: 1,
        title: "Dune: Part Two",
        role: "Chani",
        year: 2024,
        rating: 8.8,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIATgBAgMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EAEAQAAICAQMCAwUEBwQLAQAAAAABAhEDBBIhBTFBUWEGEyJxgRSRofAjMlKCscHRFWKU8SUzNERUcqLC0uHiJP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAnEQEBAQEAAgEDBAIDAQAAAAAAARECAyEEEjFBExRRYSIyUpGxBf/aAAwDAQACEQMRAD8A/OAEBLu0wEexoelTjc9XpZ5cbS2+7yqLTumu/e2vkFuDXkIo9nL0yOfRLLo9DkxcxbyTy2qcU+1trh2cOm6ZqdTLLHCozeKeySUq5uv4k6HJYHoroXUN6j7mN0n/AKyNck9M6Zn1bxZVgeTC8m2Ud21uuWvTgNDgKPdzdJxTxS9xo5wmlW6Wa0nT578Lj88Xww6Nrp6mWnWGskVFyTkuFJ0hbD1540ezrOkOSX2PRyxtcycsyl58d/CvwY+m9K34oZNTp55FmSliccqimvvsNDx/EpHoy6f/APp0k4aaX2fU7fdweTmVxi+/7yO3J0zTxxcaDNu2uS/TJ8Lx4kLTeCNHoaPpmaTw5cuFzwTSfwzSbTTr8Ua63peRZL02FQgou4vLubau33DQ8xAevoNBjzaLHlejyZXN1GcctJ812srUaHCtFkzYtFkgtilGTzXSaTur8muOe6J1WvH8BHuaXpkJ4cLnoMkpZIKVrNttcc9/VeXctdKw7N09Fma3V/r14vjx8mg2FrwGJnpavpuT7ZDBhwPG3C6c07adN93+bLx9IyPST34G8rfwSWRUlx3V+drt3Y9g15DJZ2ZOm6nHlx4pxipZVJx+JPhK3+B26fpFRctRp8snB7ciWVJJ34U7uvxK0niMk9zUdHc8L+yYGpwnU5TyqkvLv5tficml6dKUYzzYMslLJtShOK7TUWn9ZRQ5YmvMZLPpZ9IwpRrpuffKLaTzrzr9r0f3nmy6Xkn1LNgjiahCpuEZpyjBySSturtpMqdRLymSfSx6NiWn3fYc8pSjFRl75J3KttpP+8j57UYZ6fNPDlVZIS2yXkypZSZAAFAAIADcBhRmojth1XX41UdTJKkmqXNefHPfxOMAwOyXVNdPH7uepnKH7Mkmv4f5EY9dqcalsyVuk5P4Yt26t3XovuRzDDIHc+r9RlV6vJw78Fz5/P1M8ev1WKW7Hmae5yulw33fbj/2cp0abRanVNLBilL18CbeZNqpLbkb/wBr6+7+0u/WMf6fn6smPUtcsryrU5PeSSTlfLp2vxPV0fsvmnT1GRR/ux5Pb0ns9osCV4vePznycvfy/Fx/bo4+J5Ovf2fKR6j1LJ8Mc2SX/LFf0OvTYutyxY8eL3sYY62JpfDxX5+nkj7PDo8WP9THGPyjR0RxJdkcvX/0L+I3nw+fzXxsOjdWy+635IxWP9RJJbeEuEl5Jfcd0Oj9R9zHFPXNY4pJRUVwkqXgfTKHoXsML83yVpPjeKPntP0bVYsax/b8ixpUopKvz6msekZlbWtzJtttpJXfc93YP3Znfl+W/lX6Pi/h8/g6Lk0+NQ0+szQivBPgzz9G1E8bxrWS2uO1ralx5dj6TYLZ6BPl+X+S/R8X8PlP7J6nhUPc6vnHHbHhXFccdu3C+5HNPQdZi1JZU3GTkntXeqvt5cfLg+092S8aLnzfIm/G8VfAZsXVoZo58m95YXtltT235ccHN9r1+CHu/eThHnhJJc/T88eR+iyxJ90c+bQ4Mq+PFF/Q35+f/wAoi/En4r89ya/VZMuPJky7p4neNuK+F+iqvBfcVLqmuaSepm0pKSUkmrXZ9u6/kj63U+zukypuMdjPE1vs3nxXLC9y8Edfj+X4uv6Yd/G75/t5j6v1B3erm15NKv4GWLqWswxrHqJxVt8ebdv8/INRo9Rgf6XE0cz4Orm837ObqWeq6f7V16k5/aZ7mknKlfHbmiP7T1yzyzx1M1llDY5qr2967HOyWVkS65dX6hJVLVTa9Yx8O3h4UvkcebLPPlllzTc8kuZSfdiEyvRJEU0SyoCAAGHQACM1AYHVoun6nWzUcEHXjJ9hddTmbTnN6uRynd0/pWq1z/RQah+3LsfS9M9nNPgqede9yevZHv48EYxSjFJeSPO83z5PXDu8fwr9+3hdP9mtNhqWb9LP17I9vDpoY4pRgorySOmMPJGigeb5PN13fddvPPPE/wAYzjjRaiaKJSiY6L0hRKUTRIaROo+pG0pRL2jURaWo2htNNo9oaWsmg2mtBtFpfUxcRbTfaS4j09YOJLib7RbR6c6c7gZuJ1OJLiPVzp5+fS48sWpwTv0PC6h7N4crcsXwv0PqXEzlA38fn64vqjrnnuZ1H5rrek6nSN7obo+aPPkuWnw0fqebBCaqUU0eB1L2dw5k5Yvhl5I9Lw/Pl9duLyfD/PD4liO7XdM1Gkk1KDaRws9Hnqde44eubzcpMlooRaUgAFBuOMXKSjFNt9kjTBgyajIseKLcm67H2HRei49HFZMyUsz8/A5PN8jnxT393R4fB15b6+zzekezjyVl1qaXhDz+Z9VptNDDBQxxUYrwRrCBvGJ4vm8/fku2vW8fi48UzmJhBI0jEqMS0jmtO9EolpFJDSJZ2hIpIEi0hakkikhpFJEkmhpFDoCTQ0h0OhEmgoqgoAihOJdBQHrNxJaNWhND0MmiGjZohoemyaIlE2aJaKXK55QMpROmSM5RsqVcrh1Gmx5ouMop2fM9X9nlzk08afkfYSiZThZ0+Hz9eO7KXfj48kyvyvNgyYZuGSLT+Rmff9W6Ph1UW1GpeaPi+oaDLo8jjJNxvhnteD5PPln9vL83xuvHf6cdAMDq1zv0TpnTMOhxKMFcvGXiz04QSCEeDWKPl++71dr6CSczJBFGsUKKLRlU2nFFpDSKiiWdoSKSBLktInUhIaQ0ikhJ0ikhpDSEWkolJDSHQEVCooKECoKHQACoTRQqGECo0oTQGyE0aNCoZ6xaIaNmiZIcpsWjNo3aM2ilSsZRM5ROhxIaKlXK5ZR4PN6n07Hq8TjKKvzPXkjOceDXju83Yu51Mr4Ofs/Pc6Uu4z7bYB2fvfIw/aeJvFGiRMUaJHn1taaRaQkjREooSLSFE0SJqAkXFAkUSnQihIoRAYwAghgAgAQABBiGMAQihACBjADTRLRYUMM6IaNWiWhnKyaM2jZkyQ1MGiJI2kiGi4uVhJGUkdLRnKJUqpWFAXt9BlL04miJii0iaiqRaEkUiUVSRa7EouJNS7MeHROKctbNSrlfZ7/7jRaPFk40uqWXJ4QlBwb+XLv5HEUm4/FF01ymi53z+ef/AFjeOvx0aVfMZ19USWuycU3Tkv7zSb/E5CO+fp6vKub9XMpgAEYbbVYfs+eWJy3VXNeav+Zl2Orqn+2zfhKMWvVbUchfk5zuyI4u8S1tqcP2fPLE3uca5qu6szOnqr/0hmXk0n9EjlDycyd2QcW3mWgdiAhTox6a8ay58scON8R3K3L5L+ZT0kckW9JnWaSVuDg4yr0XiPqdLWzhyo40oRS8Ekc+Ofu8kckG1KLtG9+jnr6bGU+u8/VqO4HVr4Yoa7PH4klN8L15MVHD4zkvoZ9cWdWfwvnrZrIDojj0z75pL900jg0Umk9TJfQc8Vv5gvkk/DKGlj7uOXU544Mcv1bi5Sl6pLwG8Oi/46f+Gf8A5Hq5tNoMmvn7/VOLUtqjXZLsitZ0/psYX75Y+eKle5Udv7ayXJPX9ueefbNt/wCnzmRRUpKDco3w2qtGckehlwaNfqalv905p48Phlv904+vHY6ue9crIkbzjH9t/cZSS8wxpKyaJaNWjNguVnQDGWokUiUXEVKqRaIRokSiqii0SiySdccWjcU5azIpVylguvxNIS0eme+DnqZr9VTgoRT83y2zhGafqZ9pGV8e/e1c5yyTlObuUncm/FgSNGV9rUAhkh1QzYcuKGLVqacFUMsFbS8mn3RUJ6TTNZMLyZ8q5jvhtjF+dW7OVwlGNtL718wp7d1ceZt+p1PvPbH6Of59CTcpOUm3Ju234iKUJNWqrnxCMJSuq49UjLK02RIDY1BuLlxXzQTfwK112WOfV5csL2ylatUc9FqEpJuMbona3JxS5Xcdtt+r+SmSZ/DbXZY59XlywvbOVq1RgOSadPhiDq222nzJJJAAAI3Us+HURitV7yGSK2rLBXa8Ny4+8UsWjf8AvuX/AA//ANHKBt+rv3monjz7UppKTUZOUb4bVX9DNmjRDM2sRIhmjIkhmzZDNGQxqiKGHIFKSi0TEtBRVIpEopEorRFIlNDTEShoQ75JIxokpARgAAFuUpJbpN12XkHvJOO2/h8iUNC9pyLU5KO1SaXkSm1fqABtGQBbqvC7/P3gAQHDJLHex1bT7CTcXa/EAHtGQN7nb/AQABgGAACEMQGTJZTJGaWQzRkMZs5Iho0kQyjQAwGrWaLiQi0Aq0UiCkxJWikQmUmIlWOybBCC7GiUx2LCVZcYN169rMkXGTXZv6Am6tQlSdcPxGovdt8SFJrs35lKT3br5D0XtSi6sNvxuL7qybfmxttu75F6HtShLi1XF/MSi2r8nQKTVci7LuHovatjdV4uhbJeVO6+8NzqrddxbmvHyH6Hs9kuOO9160QPc1VPt29CQufg5p2DZN8gGKOyW+QbEPDOxWKwAEyWNksZoZLKZLKw0gADUzRaIKvgDqikQihJUhkjDCVY0yQTETROh2QNCC0OyB2IlplIzQxUml8jRC9SkycJVgxcBYEAYgGYYgYrGYYrBiscOALBksZnYmKwHABMCZDwE2QymS2UpIAAYbNFIhMpMZrRRCfA0xEoohMdiJQCCxYSrGmQOwwNExpmVjTETWLKsyTKTJKto7WuW19Cvg8HKvkY2OxJsbwWBr4pzTvwXgNxw18M5PjxXj/Q57HY9/pOf2qxWKxNgpTZLYtxLkPFRVislyJseGtsVkpisrDXYrIsLGFNktisVgA2SwbJbHioAJsB4EJlJmEZFqQYtqmUmZJlJiwl2NMgYYTSxWRYWLA0sLIsLAmljszsdisLGljTM0yrJxNap8DsyspMSWlhZFhYEvcKyGxWPFRVktktisrDVYrFZNjNTYWRuCx4a7E2RuC+B4FWxPsTYNjwBvglsTZEmPD1ViM94Dwayiy4yOdSLjIeLdCkUpHOpFKROE6Nw7RgpD3BhNrCzHcG4WBvYWZbw3iwNUx2ZKQ94WBtY0zHdZaZNiK2TGmZKRW4nErsLIugsMC7E2Q2JschrbJbJsTZUhxTYrIcuBJlYFuQtxDZLkPD1pu5ByMdw1If0he4NxluE5DwluREmS2S2M12Iz3APA50y1I5oyNFIqqdCkUpGCkVuFgb7gsy3DsWBruBSMrCwwNtwbjLcJSFhN9w1KzHcNSF9IdCZcWcykaRkRYmt0ykzFMpMjEtbCyEwbAjsLJsncVIpe4iTJb5E2VIDsVktgUDbJsGRYzNvke4ixWMKchbiGyXIqQLciXIiUiN3A8NpuAx3APA54yNFI54yLUirD10RkWpHPFlpk4Nb7g3GW4NwsGtdwbjO+ATFga7h7jOwTDCabikzGxphgbplxZgpFp+RFhOhSRe4+I637X6vQalafD09Qbtp6hu2rpNJeHDOnpftblnpMctb03W5Mk23u0mDdGr48fp9DW/D8s5+rHP+443H1+4Nx4kfaHFJLb0/qcm/BaSX8zaHVsk18PSuo/XHCP8Zox/R7n3i53z+HqWS2Y4c0skd08M8T8sjjf/AEtlNk4tdhZnuCyzWmBAWAVJmdjbM2+SoDbE2S2S5FYFORm5EuRDkOQLlLghyIcid3BUgXYGW4B4HNGRrGRzKRcZFYNdKkWpHMpFqXAsGuncG4xUrGpCw224aZipFbhYGlj3GSkG4WBruKUjCykwwNtxUZWYWKeWOLHLJN/DCLk36In6Stz2+D67CfVvbGWmTkk8kMCa7qKXL/iz9H02PHpsEMGCKhixrbCK8EfnnsjJ6v2inq8iW6XvMnnTlf8AVn33vKVydJd22dfzN/x8c/EcnxpL9Xbq3+obj57F7V9Knk2+9yRh297LG9neu57UMkZwjOElKMkpRkuzT5TTOLrxdcf7R0Tvnr7VvuE5HHq9fptFFS1eeGJSdLc+7KwarBqYb9PnxZY9rxzUv4B9FzcPZ9nTuDcY7ioyDDbXwKyN3AWGEpshsTZLY5AJEtibJsuDRJmcmU2ZTZUPScjOUhNmbkXIWr3AZbwHha54s0UjmjItSKwa6VIpSOdTKUicPXQpFKRzqRSkGDW6kPcY7h7hYNbKfA9xjuKTFg1smUmZJjFg1qmeX7TZp4uhat4023Da68E3Tf3HoWRmxxz4cmHKrhki4y+T4HxZOpanv3zY+N9iMjh1bnbU8ck234/lHu+2eWT6bg08W0s+ojCT9Kb/AKHycVqehdWcG2p43xLwnHz+v9T29d1HJ1fBLEvdL3c4TxuKpttPi2+K7ep3eXjfLPJPs4vH1njvF+49n9Pkz9Rlp8ORJxlF7ZxTjKHaUWvW1z6fVfR9Dzylpc+nak4aLU5NNint4lCLajT8aVfgfHdF6lqNJrpSx5ZKbW1xcVdr/Luj7LpWH7NoMUd/vJZEss5WmpTaVtUu1mPypZPbXwe76fM9fy5MnW9RkntyLA4wxwl2ittv8WfQ9B3Yoxy1hhuzrFOOPiOeEoycJNPxTSXyk/JM+f8Aa/JpYauMsOaL1DVZcS5quzb8H6Hqey3UYarSLTyljWXFFbIJ90rtu/HnsvUO+b+jOpBzZ9dlfQSdSaGmZ7nJ3J2ykzhdWr3DshggJdkthZLYwT7ktismTKgDZlNlSkZTZchM5yoxb5KmzGTLkCtwzKwLwtYRkWpGKZSkMtbKRSkYbi1IWHrdSKUjBSKToWG6Nw07MEy4uhYGtlJmdhuoWG3TopMxUrLT4JsDS7BzUU3JpRXdvwI3JK20kuWfIdf639qm8Onlt08X3T/Xfn8i/H4b5LkZ+TyTibXP7Ua+Gv1uL3aWzHFxT8XycGHOsCTfLu9pyzybmmlVcEq2+Wetz45OZy8y929a7tLJLPeRW5O7un957+X2iyQ0ODT6WLxZlzOf6yryV+fez53TtKUd9+RrqkseW4ttpLdz4mffHPXXtfPV5noZ1PU5ZZMs7nN7pSk+WzbQ5cmjz4pabM8eWLbWRSqvDv8AU43Kcna7rsPmVxpK+PoVnrC32+06D1HPPXSxa3NKUc9uLlztyN/w7r7n4c/RWfAdIhKeu0WLNL9G8iqpc+NKz7tSvk8r5PE56ju8HVsa2TuJbJcjnjZo2RKRO4mUisAbJciZSM3IqQtaSZjOQORnN8FyFamTM5DsTZcJmAxDJwqRe4ANMTpqRSkACxUq1IpS5GBJ6tSLTACaeq3DTABHqkylIAFRrxvabqcdNpXpcck82aLTX7MfM+NabAD1PBzOePTzvN1eu/aSkwA3YurBGU2u3mb6pRnrFF8KTipO+y4sQGNv+S59mepjHDrM+KDUowyygpeaTasvT/Ev1VuQAO/6iX26PfrFrdM2qjjkp/iv6H6DuV8cLwADg+XzM5rr+PfdG4TYAceOm1LkS2ADkJnKRnKQAXAiUjNyAC5E6myXIAKKp94AAPEv/9k=",
      }
    ],
    stats: {
      moviesCount: 15,
      totalAwards: 14,
      avgRating: 8.2,
      yearsActive: "2010-present",
    },
    upcomingProjects: [
      {
        title: "Challengers",
        role: "Tashi Donaldson",
        status: "Post-Production",
        expectedRelease: "2024",
      },
    ],
  },
];

const ActorDetails = () => {
  const {id} = useParams();
  const actor = actors.find((m)=> m.id === Number(id)) || actors[0];
  return (
    
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" 
              style={{backgroundImage: `url(${actor.knownFor[0].image})`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via gray-900/80"></div>
              </div>
            <div className="relative h-full container flex items-end pb-8">
              <div className="flex items-end gap-8">
                <img src={actor.image} alt={actor.name} classname="w-48 h-48 rounded-xl object-cover border-4 border-gray-900"/>
                <div>
                  <h1 className="text-4xl font-bold mb-4">{actor.name}</h1>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500"/>
                      <span>{actor.stats.avgRating} Average Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-500"/>
                      <span>{actor.stats.totalAwards}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="sticky top-24 space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="font-semibold mb-4">Personal Info</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-400">Born</dt>
                  <dd>{actor.birthDate}</dd>
                </div>

                <div>
                  <dt className="text-gray-400">Place of Birth</dt>
                  <dd>{actor.birthPlace}</dd>
                </div>

                <div>
                  <dt className="text-gray-400">Movies</dt>
                  <dd>{actor.stats.moviesCount} titles</dd>
                </div>
              </dl>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="font-semibold mb-4">Social Media</h2>
              <div className="flex gap-4">
                <a href={actor.socialMedia.instagram} className="text-gray-400 hover:text-white"><Instagram className="w-6 h-6"/></a>
                <a href={actor.socialMedia.twitter} className="text-gray-400 hover:text-white"><Twitter className="w-6 h-6"/></a>
              </div>
            </div>
          </div>
        </div>

      <div className="md:col-span-2">
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{actor.biography}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Awards & Nominations</h2>
          <div className="grid gap-4">
            {actor.awards.map((award, index)=> (
              <div key={index} className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl">
                <Award className="w-5 h-5 text-yellow-500"/>
                <div>
                  <span className="font-semibold">{award.name} </span>
                  <span className="mx=2"></span>
                  <span>{award.year}</span>
                  <p className="text-sm text-gray-400">
                    {award.category} - {award.film}
                  </p>
                </div>
                </div>
            ))}
          </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold mb-6">Known For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {actor.knownFor.map((movie)=> (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <div className="relative aspect-[2/3">
                    <img src={movie.image} alt={movie.title} className="w-full h-full object-cover"/>
                    <div className="absolute top-4 right-4 bg-block/60 px-2 py-1 rounded-md flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                    <span className="text-yellow-500 font-medium">
                      {movie.rating}
                    </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{movie.title}</h3>
                    <p className="text-gray-400">as {movie.role}</p>
                    <p className="text-gray-500 text-sm">{movie.year}</p>
                  </div>
                  </div>
                </Link>
              ))}
            </div>
        </section>
      </div>

      </div>
    </div>

  )
}

export default ActorDetails