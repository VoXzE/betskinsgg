import React from 'react';
import Jackpot from '../Jackpot';
import History from '../History';
import Settings from '../Settings';
import Shop from '../Shop';
import Fair from '../Fair';
import Crash from '../Crash';
import Faq from '../Faq';
import Tos from '../Tos';
import Roulette from '../Roulette';
import MatchBetting from '../MatchBetting';

export const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <Jackpot />,
  },
  { path: '/history',
    exact: true,
    sidebar: () => <History />,
  },
  { path: '/settings',
    exact: true,
    sidebar: () => <Settings />,
  },
  { path: '/shop',
    exact: true,
    sidebar: () => <Shop />,
  },
  { path: '/fair',
    exact: true,
    sidebar: () => <Fair />,
  },
  { path: '/crash',
    exact: true,
    sidebar: () => <Crash />,
  },
  { path: '/faq',
    exact: true,
    sidebar: () => <Faq />,
  },
  { path: '/tos',
    exact: true,
    sidebar: () => <Tos />,
  },
  { path: '/roulette',
    exact: true,
    sidebar: () => <Roulette />,
  },
  { path: '/matchbetting',
    exact: true,
    sidebar: () => <MatchBetting />,
  }
]

export default routes;