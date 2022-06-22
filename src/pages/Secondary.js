import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Secondary = () => {
  const names = useSelector(state => state.names);

  const renderNames = ({item}) => (
    <View style={styles.name}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View>
      <FlatList data={names} renderItem={renderNames} />
    </View>
  );
};

export default Secondary;

const styles = StyleSheet.create({
  name: {
    marginBottom: 10,
  },
});
