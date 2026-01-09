import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState('');
  const parsedAge = parseFloat(age);

  const lowerLimit =
    isNaN(parsedAge) ? 0 : (220 - parsedAge) * 0.65;
    
  const upperLimit =
    isNaN(parsedAge) ? 0 : (220 - parsedAge) * 0.85;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Heart Rate Limits Calculator
      </Text>

      <Text style={styles.label}>
        Enter your age:
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        placeholder="Age"
      />

      <Text style={styles.result}>
        Lower limit: {lowerLimit.toFixed(2)} bpm
      </Text>

      <Text style={styles.result}>
        Upper limit: {upperLimit.toFixed(2)} bpm
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 5,
  },
  result: {
    fontSize: 16,
    marginTop: 5,
  },
});
