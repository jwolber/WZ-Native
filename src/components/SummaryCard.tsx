import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../res/theme';

type SummaryCardProps = {
  title: string;
  stat: string | number;
};
export const SummaryCard = ({title, stat}: SummaryCardProps) => {
  return (
    <View style={styles.matchStat}>
      <Text style={styles.statHeader}>{title}</Text>
      <Text style={styles.stat}>{stat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  matchStat: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  statHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: theme.colors.textColor,
  },
  stat: {
    fontSize: 14,
    color: theme.colors.textColor,
  },
  icon: {
    flex: 1,
  },
});
