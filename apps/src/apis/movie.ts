import { request } from "@/lib/request"

export const getMovieNowPlaying = async () => {
  const res = await request.get(`/now_playing`)
  return res.results
}
