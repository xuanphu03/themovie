import { getMoviePopular } from '@/apis/movie'
import ProgressCircle from '@/components/ui/progress-circle'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { MovieProps } from '@/lib/interface'
import { useQuery } from '@tanstack/react-query'

export default function Popular() {
  const data = useQuery({
    queryKey: ['get-movie-poular'],
    queryFn: getMoviePopular
  })

  console.log(data.data)
  return (
    <div className="px-10">
      <div className="mt-10">
        <p className="text-xl font-bold">What's Popular</p>
      </div>

      <ScrollArea className="whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {data?.data?.map((movie: MovieProps) => (
            <div key={movie.id} className="w-48 shadow-md rounded-md p-2 hover:opacity-80 transition-opacity">
              <div className="relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-md w-full h-56 object-cover"
                />
                <div className="absolute top-48 left-32">
                  <ProgressCircle value={Math.round(movie.vote_average) * 10} size={50} />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold mt-2 text-wrap">{movie.title}</p>
                <p className="text-xs">{movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
