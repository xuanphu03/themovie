import Header from "./_components/Header";
import Banner from "./_components/Banner";
import { useQuery } from "@tanstack/react-query";
import { getMovieNowPlaying } from "@/apis/movie";

export default function Home() {
  const { data } = useQuery({
    queryKey: ['movie-now-playing'],
    queryFn: getMovieNowPlaying,
  })

  return (
    <div>
      <Header />
      <Banner data={data} />
    </div>
  )
}
