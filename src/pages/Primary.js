import {Button, TextInput, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addName} from '../store/actions/names';

const Primary = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleText = text => {
    setName(text);
  };

  const handleAdd = () => {
    dispatch(addName(name));
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={styles.textInput}
        placeholder="Enter a name"
        onChangeText={handleText}
      />
      <Button title="Add" onPress={handleAdd} />
      <Text style={styles.infoText} numberOfLines={4}>
        You can type names or any text and add it to the list.You can see the
        list in the Secondary Screen.
      </Text>
    </View>
  );
};

export default Primary;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    borderColor: '#e0e0e0',
  },
  infoText: {
    fontSize: 20,
    marginTop: 50,
    padding: 10,
  },
});
