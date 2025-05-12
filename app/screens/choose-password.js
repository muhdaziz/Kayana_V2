import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    title: "Secure Your Account",
    subtitle: "Create a password to protect your account",
    password: "Choose a password",
    confirm: "Confirm password",
    continue: "Continue",
    switch: "Switch to Hausa"
  },
  ha: {
    title: "Kare Asusunka",
    subtitle: "Saita kalmar sirri don kare asusunka",
    password: "Zaɓi kalmar sirri",
    confirm: "Tabbatar da kalmar sirri",
    continue: "Ci gaba",
    switch: "Canza zuwa Turanci"
  }
};

export default function ChoosePasswordScreen() {
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
        onPress={() => {
          // Here you would typically handle the password creation
          alert('Account created successfully!');
          router.push('/');
        }}
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
  switch: { 
    color: '#888', 
    textAlign: 'center', 
    marginTop: 12 
  }
}); 