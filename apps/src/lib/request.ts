
export const API_URL = `https://api.themoviedb.org/3/movie`;
export const KEY_API = `78645d06e51b4051076e06c96636507b`;

export const request = {
  get: async (url: string) => {
    const res = await fetch(`${API_URL}${url}?api_key=${KEY_API}`);
    return res.json();
  },
};

export const getMovieNowPlaying = async () => {
  const res = await request.get(`/now_playing`);
  console.log('res', res);
  return res.results;
}