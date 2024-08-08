import { getMovieTrendingToday, getMovieTrendingWeek } from '@/apis/movie'
import ProgressCircle from '@/components/ui/progress-circle'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

interface MovieProps {
  id: number
  poster_path: string
  title: string
  release_date: string
  vote_average: number
}

export default function Trending() {
  const [isToday, setIsToday] = useState(true)

  const movieTrendingToday = useQuery({
    queryKey: ['get-movie-trending-today'],
    queryFn: getMovieTrendingToday
  })

  const movieTrendingWeek = useQuery({
    queryKey: ['get-movie-trending-week'],
    queryFn: getMovieTrendingWeek
  })

  const data = isToday ? movieTrendingToday.data : movieTrendingWeek.data

  return (
    <div className="px-10 space-y-5">
      <div className="flex mt-5 gap-5 items-center">
        <p className="text-xl font-bold">Trending</p>
        <div className="relative cursor-pointer select-none flex border border-primary rounded-full w-48 h-8 items-center justify-between">
          <p
            onClick={() => setIsToday(true)}
            className={cn('px-4 font-bold absolute z-10', {
              'text-primary-foreground': isToday
            })}
          >
            Today
          </p>
          <p
            onClick={() => setIsToday(false)}
            className={cn('px-4 font-bold absolute right-0 z-10', {
              'text-primary-foreground ': !isToday
            })}
          >
            This Week
          </p>
          <div
            className={cn('h-full rounded-full bg-primary', {
              'translate-x-0 w-20 animate-fade-left animate-ease-in-out animate-duration-300': isToday,
              'translate-x-20 ml-20 w-28 animate-fade-right animate-ease-in-out animate-duration-300': !isToday
            })}
          />
        </div>
      </div>

      <ScrollArea className="whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {data?.map((movie: MovieProps) => (
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
