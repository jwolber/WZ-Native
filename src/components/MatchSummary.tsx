import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import strings from '../res/strings';
import theme from '../res/theme';
import {PlayerStats} from '../types';
import {MatchStat} from './MatchStat';

type MatchSummaryProps = {
  playerStats: PlayerStats;
};

export const MatchSummary = ({playerStats}: MatchSummaryProps) => {
  return (
    <View style={styles.summary}>
      <View style={styles.placement}>
        <Text style={styles.placementText}>{playerStats.teamPlacement}</Text>
      </View>
      <MatchStat title={strings.kills} stat={playerStats.kills} />
      <MatchStat title={strings.deaths} stat={playerStats.deaths} />
      <MatchStat title={strings.kdr} stat={playerStats.kdRatio.toFixed(2)} />
      <MatchStat
        title={strings.gulag}
        stat={playerStats.gulagKills}
        isBool={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  placement: {
    backgroundColor: theme.colors.grey,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  placementText: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.textColor,
  },
});
