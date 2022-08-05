import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Grid, LineChart, YAxis} from 'react-native-svg-charts';
import theme from '../res/theme';

type StatChartProps = {
  data: Array<number>;
  title: string;
  color: string;
};

export const StatChart = ({data, title, color}: StatChartProps) => {
  const axesSvg = {fontSize: 10, fill: color};
  const verticalContentInset = {top: 10, bottom: 10};
  const xAxisHeight = 10;

  const styles = StyleSheet.create({
    chartContainer: {
      height: 200,
      padding: 20,
      paddingBottom: 0,
      flexDirection: 'row',
      backgroundColor: theme.colors.primaryBlue,
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
      color: color,
      opacity: 0.4,
      marginBottom: 5,
    },
  });

  return (
    <>
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
            svg={{stroke: color}}>
            <Grid />
          </LineChart>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
    </>
  );
};
