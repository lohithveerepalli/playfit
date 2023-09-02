// AddSportScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddSportScreen = () => {
  const [sportName, setSportName] = useState('');
  const [sportTime, setSportTime] = useState('');
  const [sportLocation, setSportLocation] = useState('');

  const handleAddSport = () => {
    // Logic to add the sport with its details
    // You can save the details to a state or a database
  };

  return (
    <View style={styles.container}>
      <Text>Add a New Sport</Text>
      <TextInput
        placeholder="Sport Name"
        value={sportName}
        onChangeText={setSportName}
        style={styles.input}
      />
      <TextInput
        placeholder="Sport Time"
        value={sportTime}
        onChangeText={setSportTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Sport Location"
        value={sportLocation}
        onChangeText={setSportLocation}
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddSport}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddSportScreen;
