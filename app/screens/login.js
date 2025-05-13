import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    title: "Welcome back!",
    subtitle: "Access your account to continue",
    email: "Email",
    password: "Password",
    remember: "Remember me",
    forgot: "Forgot password?",
    signIn: "Sign in",
    google: "Sign in with Google",
    noAccount: "Don't have an account? Sign up",
    continue: "Continue",
    switch: "Switch to Hausa"
  },
  ha: {
    title: "Barka da dawowa!",
    subtitle: "Shiga asusunka don ci gaba",
    email: "Imel",
    password: "Kalmar sirri",
    remember: "Ka tuna ni",
    forgot: "Ka manta kalmar sirri?",
    signIn: "Shiga",
    google: "Shiga da asusun Google",
    noAccount: "Babu asusu? Yi rijista",
    continue: "Ci gaba",
    switch: "Canza zuwa Turanci"
  }
};

export default function LoginScreen() {
  const router = useRouter();
  const [language, setLanguage] = React.useState('en');
  const [remember, setRemember] = React.useState(false);
  const t = texts[language];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
      <Text style={styles.subtitle}>{t.subtitle}</Text>
      <TextInput placeholder={t.email} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder={t.password} style={styles.input} secureTextEntry />
      <View style={styles.row}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch value={remember} onValueChange={setRemember} />
          <Text style={{ marginLeft: 8 }}>{t.remember}</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/screens/forgot-password')}>
          <Text style={styles.forgot}>{t.forgot}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => alert('Sign in!')}>
        <Text style={styles.buttonText}>{t.signIn}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleBtn}>
        <Text>{t.google}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.noAccount}>{t.noAccount}</Text>
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
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  forgot: { color: '#007bff', marginLeft: 8 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  googleBtn: { backgroundColor: '#eee', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  noAccount: { color: '#007bff', textAlign: 'center', marginBottom: 12 },
  switch: { color: '#888', textAlign: 'center' }
});
