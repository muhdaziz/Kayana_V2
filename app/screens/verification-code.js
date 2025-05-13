import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    title: "Verify Your Identity",
    subtitle: "Enter the code sent to your email address",
    continue: "Continue",
    resend: "Resend code",
    switch: "Switch to Hausa"
  },
  ha: {
    title: "Tabbatar da Shaidar ka",
    subtitle: "Shigar da lambar da aka aiko zuwa imel dinka",
    continue: "Ci gaba",
    resend: "Sake aiko da lambar",
    switch: "Canza zuwa Turanci"
  }
};

export default function VerificationCodeScreen() {
  const router = useRouter();
  const [language, setLanguage] = React.useState('en');
  const t = texts[language];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
      <Text style={styles.subtitle}>{t.subtitle}</Text>
      <View style={styles.codeRow}>
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/screens/reset-password')}
      >
        <Text style={styles.buttonText}>{t.continue}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.resend}>{t.resend}</Text>
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
  codeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  codeInput: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, width: 48, height: 48, textAlign: 'center', fontSize: 24 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  resend: { color: '#007bff', textAlign: 'center', marginBottom: 12, marginTop: 8 },
  switch: { color: '#888', textAlign: 'center' }
});
