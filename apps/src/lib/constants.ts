export const TAB_LIST_HEADER = [
  {
    title: 'Movies',
    id: 'movies',
    child: [
      {
        name: 'Popular',
        path: '/movies',
      },
      {
        name: 'Now Playing',
        path: '/movies/now-playing',
      },
      {
        name: 'Upcoming',
        path: '/movies/upcoming',
      },
      {
        name: 'Top Rated',
        path: '/movies/top-rated',
      },
    ],
  },
  {
    title: 'TV Shows',
    id: 'tv',
    child: [
      {
        name: 'Popular',
        path: '/tv',
      },
      {
        name: 'Airing Today',
        path: '/tv/airing-today',
      },
      {
        name: 'On TV',
        path: '/on-the-air',
      },
      {
        name: 'Top Rated',
        path: '/tv/top-rated',
      },
    ],
  },
  {
    title: 'People',
    id: 'people',
    child: [
      {
        name: 'Popular People',
        path: '/people',
      },
    ],
  },
  {
    title: 'More',
    id: 'more',
    child: [
      {
        name: 'Dicussions',
        path: '/discuss',
      },
      {
        name: 'Leaderboard',
        path: '/leaderboard',
      },
      {
        name: 'Support',
        path: 'talk',
      },
      {
        name: 'API',
        path: 'api',
      },
    ],
  },
];
