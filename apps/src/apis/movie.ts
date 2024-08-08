import { request } from "@/lib/request"

export const getMovieNowPlaying = async () => {
  const res = await request.get(`movie/now_playing`)
  return res.results
}

export const getMoviePopular = async () => {
  const res = await request.get(`movie/popular`)
  return res.results
}

export const getMovieTrendingToday = async () => {
  const res = await request.get(`trending/movie/day`)
  return res.results
}

export const getMovieTrendingWeek = async () => {
  const res = await request.get(`trending/movie/week`)
  return res.results
}
