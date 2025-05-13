import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    success: "Your account has been successfully created!",
    continue: "Continue",
    switch: "Switch to Hausa"
  },
  ha: {
    success: "An kirkiri asusunka cikin nasara!",
    continue: "Ci gaba",
    switch: "Canza zuwa Turanci"
  }
};

export default function OnboardingSuccessScreen() {
  const router = useRouter();
  const [language, setLanguage] = React.useState('en');
  const t = texts[language];

  return (
    <View style={styles.container}>
      {/* Replace with your own image or illustration */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/190/190411.png' }}
        style={styles.image}
      />
      <Text style={styles.success}>{t.success}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/screens/home')}
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
  container: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  image: { width: 120, height: 120, marginBottom: 24 },
  success: { fontSize: 18, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 12, width: '100%' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600', textAlign: 'center' },
  switch: { color: '#888', textAlign: 'center', marginTop: 12 }
});
