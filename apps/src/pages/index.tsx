import { getMovieNowPlaying } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";
import Header from "./_components/Header";

export default function Home() {
  const { data } = useQuery({
    queryKey: ['movie-now-playing'],
    queryFn: getMovieNowPlaying,
  });

  console.log('data', data);
 
  return (
    <div>
      <Header />
    </div>
  )
}
