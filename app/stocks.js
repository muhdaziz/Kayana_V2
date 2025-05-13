import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const texts = {
  en: {
    empty: "No products available yet.\nAdd your first product to get started.",
    search: "Search Product",
    newProduct: "New Product",
    addStock: "Add Stock",
    switch: "Switch to Hausa"
  },
  ha: {
    empty: "Babu kayayyaki tukuna.\nƘara kaya na farko don farawa.",
    search: "Bincika Kaya",
    newProduct: "Ƙara Kaya",
    addStock: "Ƙara Stock",
    switch: "Canza zuwa Turanci"
  }
};

export default function StocksScreen() {
  const [language, setLanguage] = React.useState('en');
  const t = texts[language];
  const router = useRouter();

  // For demo, you can toggle this to show empty or with data
  const hasData = false;

  return (
    <ScrollView style={styles.container}>
      <TextInput placeholder={t.search} style={styles.input} />
      {hasData ? (
        <View>
          {/* Render your product list here */}
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
      <TouchableOpacity style={styles.button} onPress={() => alert('Add Product')}>
        <Text style={styles.buttonText}>{t.newProduct}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLanguage(language === 'en' ? 'ha' : 'en')}>
        <Text style={styles.switch}>{t.switch}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fa', padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 },
  emptyContainer: { alignItems: 'center', marginVertical: 40 },
  emptyImage: { width: 120, height: 120, marginBottom: 16 },
  emptyText: { color: '#888', fontSize: 16, textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  switch: { color: '#888', textAlign: 'center', marginTop: 12 }
});
  