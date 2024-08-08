
export const API_URL = `https://api.themoviedb.org/3/`;
export const KEY_API = `78645d06e51b4051076e06c96636507b`;
export const IMAGE_URL = `https://image.tmdb.org/t/p/original`

export const request = {
  get: async (url: string) => {
    const res = await fetch(`${API_URL}${url}?api_key=${KEY_API}`);
    return res.json();
  },
};


