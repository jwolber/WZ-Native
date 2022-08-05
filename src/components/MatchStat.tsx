import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons/faCircleXmark';

type MatchStatProps = {
  title: string;
  stat: string | number;
  isBool?: boolean;
};
export const MatchStat = ({title, stat, isBool}: MatchStatProps) => {
  return (
    <View style={styles.matchStat}>
      <Text style={styles.statHeader}>{title}</Text>
      {!isBool ? (
        <Text style={styles.stat}>{stat}</Text>
      ) : (
        <FontAwesomeIcon
          icon={stat ? faCheckCircle : faCircleXmark}
          color={stat ? 'green' : 'red'}
          style={styles.icon}
        />
      )}
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
    color: 'white',
  },
  stat: {
    fontSize: 14,
    color: 'white',
  },
  icon: {
    flex: 1,
  },
});
