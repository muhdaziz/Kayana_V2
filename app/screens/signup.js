import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    title: "Create an account",
    subtitle: "Let's get you started in managing your business",
    name: "Name",
    email: "Email",
    password: "Create a password",
    passwordNote: "Must be at least 8 characters",
    createAccount: "Create Account",
    google: "Sign up with Google",
    login: "Already have an account? Login",
    switch: "Switch to Hausa"
  },
  ha: {
    title: "Kirkiri asusu",
    subtitle: "Mu fara tunkado naka/yakin sarrafa kasuwancinka",
    name: "Suna",
    email: "Imel",
    password: "Kirkiro kalmar sirri",
    passwordNote: "Dole ta kasance akalla haruffa 8",
    createAccount: "Kirkiri Asusu",
    google: "Yi rijista da asusun Google",
    login: "Kana da asusu? Shiga",
    switch: "Canza zuwa Turanci"
  }
};

export default function SignUpScreen() {
  const router = useRouter();
  const [language, setLanguage] = React.useState('en');
  const t = texts[language];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
      <Text style={styles.subtitle}>{t.subtitle}</Text>
      <TextInput placeholder={t.name} style={styles.input} />
      <TextInput placeholder={t.email} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder={t.password} style={styles.input} secureTextEntry />
      <Text style={styles.note}>{t.passwordNote}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/screens/email-verification')}
      >
        <Text style={styles.buttonText}>{t.createAccount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleBtn}>
        <Text>{t.google}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/screens/login')}>
        <Text style={styles.login}>{t.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLanguage(language === 'en' ? 'ha' : 'en')}>
        <Text style={styles.switch}>{t.switch}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  subtitle: { 
    fontSize: 16, 
    marginBottom: 16,
    color: '#666'
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 12 
  },
  note: { 
    fontSize: 12, 
    color: '#888', 
    marginBottom: 12 
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  googleBtn: { 
    backgroundColor: '#eee', 
    padding: 12, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginBottom: 12 
  },
  login: { 
    color: '#007bff', 
    textAlign: 'center', 
    marginBottom: 12 
  },
  switch: { 
    color: '#888', 
    textAlign: 'center' 
  }
});
