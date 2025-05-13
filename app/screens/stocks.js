import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function StockScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Stocks</Text>

      <View style={styles.stockRow}>
        <View style={styles.stockBox}>
          <Text style={styles.stockLabel}>Total Stock Value{'\n'}(Cost Price)</Text>
          <Text style={styles.stockValue}>₦ 2,000.00</Text>
        </View>
        <View style={styles.stockBox}>
          <Text style={styles.stockLabel}>Total Stock Value{'\n'}(Selling Price)</Text>
          <Text style={styles.stockValue}>₦ 2,000.00</Text>
        </View>
      </View>

      <TextInput
        placeholder="Search Products"
        placeholderTextColor="#999"
        style={styles.searchInput}
      />

      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No Products or Services Yet</Text>
        <Text style={styles.emptySubText}>
          Add products or services to keep{'\n'}track of your business
        </Text>
      </View>

      <TouchableOpacity style={styles.newProductBtn}>
        <Text style={styles.newProductText}>＋ New Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E50B5',
    marginBottom: 20,
  },
  stockRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  stockBox: {
    flex: 0.48,
    backgroundColor: '#F3F6FA',
    padding: 12,
    borderRadius: 12,
  },
  stockLabel: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },
  stockValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E50B5',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    padding: 12,
    marginBottom: 30,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
  },
  newProductBtn: {
    marginTop: 'auto',
    backgroundColor: '#1E50B5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  newProductText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
  