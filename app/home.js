import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    empty: "No transactions yet!\nLog your first transaction to get started.",
    balance: "₦0.00",
    history: "History",
    newTransaction: "New Transaction",
    switch: "Switch to Hausa"
  },
  ha: {
    empty: "Babu mu'amala tukuna!\nShiga mu'amalarka ta farko don farawa.",
    balance: "₦0.00",
    history: "Tarihi",
    newTransaction: "Sabuwar mu'amala",
    switch: "Canza zuwa Turanci"
  }
};

export default function HomeScreen() {
  const [language, setLanguage] = React.useState('en');
  const t = texts[language];
  const router = useRouter();

  // For demo, you can toggle this to show empty or with data
  const hasData = false;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.balance}>{t.balance}</Text>
        <TouchableOpacity>
          <Text style={styles.history}>{t.history}</Text>
        </TouchableOpacity>
      </View>
      {hasData ? (
        <View>
          {/* Render your transaction list here */}
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4072/4072301.png' }}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>{t.empty}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/transactions')}>
        <Text style={styles.buttonText}>{t.newTransaction}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLanguage(language === 'en' ? 'ha' : 'en')}>
        <Text style={styles.switch}>{t.switch}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fa', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  balance: { fontSize: 28, fontWeight: 'bold' },
  history: { color: '#007bff', fontSize: 16 },
  emptyContainer: { alignItems: 'center', marginVertical: 40 },
  emptyImage: { width: 120, height: 120, marginBottom: 16 },
  emptyText: { color: '#888', fontSize: 16, textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  switch: { color: '#888', textAlign: 'center', marginTop: 12 }
});
