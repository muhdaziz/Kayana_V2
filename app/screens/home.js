import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/32' }} // Replace with user's avatar URL
          style={styles.avatar}
        />
        <Feather name="settings" size={24} color="#000" />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.businessLabel}>Business name</Text>
          <Text style={styles.balanceLabel}>Available balance</Text>
          <Text style={styles.balanceAmount}>₦ 0.00</Text>
          <TouchableOpacity onPress={() => console.log('Go to history')}>
            <Text style={styles.historyText}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions */}
        <View style={styles.transactionsSection}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>

          {/* Empty state */}
          <View style={styles.emptyState}>
            <Ionicons name="card-outline" size={64} color="#7ca6f5" />
            <Text style={styles.emptyText}>No Transactions Yet</Text>
            <Text style={styles.emptySubText}>
              Log your first transaction to get started
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* New Transaction Button */}
      <TouchableOpacity style={styles.newTransactionButton}>
        <Text style={styles.buttonText}>+ New Transaction</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
  },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  balanceCard: {
    backgroundColor: '#eef4ff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 24,
    marginTop: 10,
    position: 'relative',
  },
  businessLabel: { fontSize: 12, color: '#444', fontWeight: '500' },
  balanceLabel: { fontSize: 13, color: '#777', marginTop: 4 },
  balanceAmount: { fontSize: 22, fontWeight: '600', marginTop: 4 },
  historyText: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: '#0a5cd8',
    fontWeight: '500',
  },
  transactionsSection: {
    marginHorizontal: 24,
    marginTop: 20,
    flex: 1,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 16, fontWeight: '600' },
  viewAll: { color: '#0a5cd8' },
  emptyState: { alignItems: 'center', marginTop: 40 },
  emptyText: { marginTop: 12, fontSize: 16, fontWeight: '500' },
  emptySubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  newTransactionButton: {
    backgroundColor: '#0a5cd8',
    margin: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});
