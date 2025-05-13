import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    title: "Reset Your Password",
    subtitle: "Choose a new password to secure your account",
    password: "Choose a password",
    confirm: "Confirm password",
    continue: "Continue",
    switch: "Switch to Hausa"
  },
  ha: {
    title: "Sake saita Kalmar Sirrinka",
    subtitle: "Kirkiro sabuwar kalmar sirri don samun damar shiga asusunka",
    password: "Zaɓi sabuwar sirri",
    confirm: "Zaɓi sabuwar sirri",
    continue: "Ci gaba",
    switch: "Canza zuwa Turanci"
  }
};

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [language, setLanguage] = React.useState('en');
  const t = texts[language];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
      <Text style={styles.subtitle}>{t.subtitle}</Text>
      <TextInput placeholder={t.password} style={styles.input} secureTextEntry />
      <TextInput placeholder={t.confirm} style={styles.input} secureTextEntry />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Password reset!')}
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
  subtitle: { fontSize: 15, marginBottom: 16, color: '#666' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  switch: { color: '#888', textAlign: 'center', marginTop: 12 }
});
