import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../res/theme';

type LoadoutItemProps = {
  title: string;
};
export const LoadoutItem = ({title}: LoadoutItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemHeader}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.grey,
    margin: 5,
    borderRadius: 5,
  },
  itemHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: theme.colors.textColor,
    textAlign: 'center',
    padding: 10,
  },
});
