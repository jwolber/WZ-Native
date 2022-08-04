import React, {useCallback, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import useSWR from 'swr';
import {getMatches} from '../api/stats';
import {MatchStat} from '../components/MatchStat';
import config from '../config';
import {useRootStackNavigation} from '../navigation/RootStack';
import {Match} from '../types';
import {cleanGameMode} from '../utils';

const useMatches = (gamerTag: string) =>
  useSWR(gamerTag ? gamerTag : null, getMatches);

type ListMatchProps = {};

const ListMatches = () => {
  const {data: matches} = useMatches(config.GAMER_TAG);
  const navigation = useRootStackNavigation();
  const renderItem = useCallback(
    ({item}: {item: Match}) => {
      return (
        <View style={styles.matchContainer}>
          <View style={styles.matchHeader}>
            <Text style={styles.matchTitle}>{cleanGameMode(item.mode)}</Text>
            <Text style={styles.smallText}>
              {new Date(item.utcStartSeconds * 1000).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.summary}>
            <View style={styles.placement}><Text style={styles.placementText}>{item.playerStats.teamPlacement}</Text></View>
            <MatchStat title="Kills" stat={item.playerStats.kills} />
            <MatchStat title="Deaths" stat={item.playerStats.deaths} />
            <MatchStat title="KDR" stat={item.playerStats.kdRatio.toFixed(2)} />
            <MatchStat
              title="Gulag"
              stat={item.playerStats.gulagKills}
              isBool={true}
            />
          </View>
        </View>
      );
    },
    [navigation],
  );

  if (!matches) {
    return null;
  }

  return (
    <FlatList
      data={matches.data.matches}
      renderItem={renderItem}
      style={{backgroundColor: '#5081A0'}}
    />
  );
};

export const HomeScreen = () => {
  return <ListMatches />;
};

const styles = StyleSheet.create({
  matchContainer: {
    flex: 1,
    backgroundColor: '#192530',
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
    color: 'white',
  },
  smallText: {
    fontSize: 12,
    paddingLeft: 5,
    color: 'white',
    marginLeft: 'auto',
  },
  summary: {
    flexDirection: 'row',
    marginVertical:10
  },
  placement: {
    backgroundColor:'#465562',
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  placementText: {
    fontSize:20,
    fontWeight: '700',
    color:'white',
  }
});
