import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ha', label: 'Hausa' },
];

export default function LanguageScreen({ navigation }) {
  const [selected, setSelected] = useState('en');

  const handleContinue = () => {
    // Save language selection (could use context or async storage for global app)
    navigation.navigate('login', { lang: selected });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Preferred Language</Text>
      <Text style={styles.subtitle}>Recover your account in just a few steps</Text>
      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          style={styles.option}
          onPress={() => setSelected(lang.code)}
        >
          <View style={styles.radioOuter}>
            {selected === lang.code && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.optionText}>{lang.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3A3A3A',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
