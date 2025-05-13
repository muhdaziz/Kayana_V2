import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    title: "Select Your Preferred Language",
    subtitle: "Recover your account in just a few steps",
    english: "English",
    hausa: "Hausa",
    continue: "Continue",
    switch: "Switch to Hausa"
  },
  ha: {
    title: "Zaɓi Yaren da Kake So",
    subtitle: "Sake samun asusunka cikin sauki",
    english: "Turanci",
    hausa: "Hausa",
    continue: "Ci gaba",
    switch: "Canza zuwa Turanci"
  }
};

export default function SelectLanguageScreen() {
  const router = useRouter();
  const [language, setLanguage] = React.useState('en');
  const [selected, setSelected] = React.useState('en');
  const t = texts[language];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
      <Text style={styles.subtitle}>{t.subtitle}</Text>
      <TouchableOpacity
        style={[styles.radio, selected === 'en' && styles.selected]}
        onPress={() => setSelected('en')}
      >
        <Text>{t.english}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.radio, selected === 'ha' && styles.selected]}
        onPress={() => setSelected('ha')}
      >
        <Text>{t.hausa}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/screens/login')}
      >
        <Text style={styles.buttonText}>{t.continue}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLanguage(language === 'en' ? 'ha' : 'en')}>
        <Text style={styles.switch}>{t.switch}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 15, marginBottom: 24, color: '#666' },
  radio: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 14, marginBottom: 12 },
  selected: { borderColor: '#007AFF', backgroundColor: '#e6f0ff' },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 16 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  switch: { color: '#888', textAlign: 'center', marginTop: 18 }
});
