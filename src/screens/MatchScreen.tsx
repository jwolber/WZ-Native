import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSWRConfig} from 'swr';
import {LoadoutItem} from '../components/LoadoutItem';
import {MatchSummary} from '../components/MatchSummary';
import {useMatchRoute} from '../navigation/RootStack';
import {globalStyle} from '../styles/global';
import theme from '../theme';
import {Match} from '../types';
import {cleanEquip, cleanGameMode, cleanPerk, cleanWeapon} from '../utils';

const useCachedMatch = () => {
  const {params} = useMatchRoute();
  const {cache} = useSWRConfig();
  const cachedMatch = cache
    .get(params.gamerTag)
    .data.matches.find((match: Match) => match.matchID === params.id);

  return cachedMatch;
};

export const MatchScreen = () => {
  const match: Match = useCachedMatch();
  const loadout = match.player.loadout[0];
  console.log(loadout);
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.header}>
        {cleanGameMode(match.mode)}
        {'\n'}
        <Text style={styles.matchDate}>
          {new Date(match.utcStartSeconds * 1000).toLocaleDateString()}
        </Text>
      </Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.subTitle}>Summary</Text>
        <MatchSummary playerStats={match.playerStats} />
      </View>
      {loadout && (
        <View style={styles.loadoutContainer}>
          <Text style={styles.subTitle}>Loadout</Text>
          {/* PERKS */}
          <View style={styles.perkContainer}>
            {loadout.perks.map(perk => (
              <LoadoutItem title={cleanPerk(perk.name)} />
            ))}
          </View>
          {/* WEAPONS */}
          <View style={styles.perkContainer}>
            <LoadoutItem title={cleanWeapon(loadout.primaryWeapon.name)} />
            <LoadoutItem title={cleanWeapon(loadout.secondaryWeapon.name)} />
          </View>
          {/* TACTICALS */}
          <View style={styles.perkContainer}>
            <LoadoutItem title={cleanEquip(loadout.lethal.name)} />
            <LoadoutItem title={cleanEquip(loadout.tactical.name)} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  matchDate: {
    fontSize: 12,
  },
  summaryContainer: {
    backgroundColor: theme.colors.darkGrey,
    margin: 10,
    marginBottom: 0,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loadoutContainer: {
    backgroundColor: theme.colors.darkGrey,
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontWeight: 'bold',
    marginTop: 5,
    opacity: 0.7,
  },
  perkContainer: {
    flexDirection: 'row',
  },
});
