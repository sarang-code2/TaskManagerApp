import React, { useState } from 'react';
import { View, Text, Button, Switch, Alert, ScrollView, TextInput, StyleSheet } from 'react-native';

export default function ActionsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Actions Demo</Text>

      <Button title="Show Alert" onPress={() => Alert.alert('Alert!', 'This is a test alert')} />

      <View style={styles.switchContainer}>
        <Text>Toggle Switch:</Text>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </View>

      <TextInput
        placeholder="Enter some text"
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button title="Submit Text" onPress={() => Alert.alert('Submitted', inputValue)} />
      <Button title="Show Modal (Coming Soon)" onPress={() => Alert.alert('Modal', 'Pretend modal opened')} />
      <Button title="Scroll Action Done" onPress={() => console.log('Scrolled')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  switchContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginVertical: 10 }
});
