import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useSWR from 'swr';
import {getMatches} from '../api/stats';
import {StatChart} from '../components/StatChart';
import config from '../config';
import {useRootStackNavigation} from '../navigation/RootStack';
import {Match} from '../types';
import {cleanGameMode} from '../utils';
import {globalStyle} from '../styles/global';
import theme from '../res/theme';
import {MatchSummary} from '../components/MatchSummary';
import strings from '../res/strings';

const useMatches = (gamerTag: string) =>
  useSWR(gamerTag ? gamerTag : null, getMatches);

export const HomeScreen = () => {
  const {data: matches} = useMatches(config.GAMER_TAG);
  const navigation = useRootStackNavigation();
  const renderItem = useCallback(
    ({item}: {item: Match}) => {
      return (
        <TouchableOpacity
          style={styles.matchContainer}
          onPress={() => {
            navigation.navigate('Match', {
              id: item.matchID,
              gamerTag: config.GAMER_TAG,
            });
          }}
          accessibilityRole="button">
          <View style={styles.matchHeader}>
            <Text style={styles.matchTitle}>{cleanGameMode(item.mode)}</Text>
            <Text style={styles.smallText}>
              {new Date(item.utcStartSeconds * 1000).toLocaleDateString()}
            </Text>
          </View>
          <MatchSummary playerStats={item.playerStats} />
        </TouchableOpacity>
      );
    },
    [navigation],
  );

  if (!matches) {
    return null;
  }

  return (
    <View style={globalStyle.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <StatChart
              title={strings.killChart}
              color={theme.colors.textColor}
              data={matches.data.matches
                .map(match => match.playerStats.kills)
                .reverse()}
            />
            <Text style={globalStyle.header}>{strings.lastGames}</Text>
          </>
        }
        data={matches.data.matches}
        renderItem={renderItem}
        style={styles.matchList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  matchList: {
    marginBottom: 20,
  },
  matchContainer: {
    flex: 1,
    backgroundColor: theme.colors.darkGrey,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  matchHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  matchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.textColor,
  },
  smallText: {
    fontSize: 12,
    paddingLeft: 5,
    color: theme.colors.textColor,
    marginLeft: 'auto',
  },
});
