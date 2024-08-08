import { getMovieNowPlaying } from '@/apis/movie'
import { useQuery } from '@tanstack/react-query'
import Banner from './_components/Banner'
import Header from './_components/Header'
import Trending from './_components/Trending'
import Popular from './_components/Popular'
import TopRated from './_components/TopRated'

export default function Home() {
  const { data } = useQuery({
    queryKey: ['movie-now-playing'],
    queryFn: getMovieNowPlaying
  })

  return (
    <div>
      <Header />
      <Banner data={data} />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}
