import config from '../config';
import {MatchResult} from '../types';

export const getMatches = (gamerTag: string): Promise<MatchResult> =>
  fetch(
    `https://callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/uno/gamer/${encodeURIComponent(
      gamerTag,
    )}/matches/wz/start/0/end/0/details`,
    {
      headers: {
        Cookie: `ACT_SSO_COOKIE=${config.ACT_SSO_COOKIE}`,
      },
      credentials: 'omit',
    },
  ).then(res => res.json());
