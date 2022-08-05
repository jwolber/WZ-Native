import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Grid, LineChart, YAxis} from 'react-native-svg-charts';

type StatChartProps = {
  data: Array<number>;
  title: string;
};

export const StatChart = ({data, title}: StatChartProps) => {
  const axesSvg = {fontSize: 10, fill: 'white'};
  const verticalContentInset = {top: 10, bottom: 10};
  const xAxisHeight = 10;

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <YAxis
          data={data}
          style={{marginBottom: xAxisHeight}}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={styles.lineChart}>
          <LineChart
            style={styles.line}
            data={data}
            contentInset={verticalContentInset}
            svg={{stroke: 'white'}}>
            <Grid />
          </LineChart>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  chartContainer: {
    height: 200,
    padding: 20,
    paddingBottom: 0,
    flexDirection: 'row',
    backgroundColor: '#5081A0',
  },
  lineChart: {
    flex: 1,
    marginLeft: 10,
  },
  line: {flex: 1},
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.4,
    marginBottom: 5,
  },
});
