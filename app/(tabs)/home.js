import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const profilePic = 'https://randomuser.me/api/portraits/men/32.jpg'; // Placeholder
const emptyIllustration = 'https://cdn-icons-png.flaticon.com/512/4072/4072301.png';

const mockTransactions = [
  {
    id: 1,
    type: 'expense',
    label: 'Electricity bills',
    amount: -2000,
    date: '12 April',
  },
  {
    id: 2,
    type: 'income',
    label: 'Bottled Water 35cl',
    amount: 2000,
    date: '12 April',
  },
  {
    id: 3,
    type: 'income',
    label: 'Bottled Water 35cl',
    amount: 2000,
    date: '12 April',
  },
  {
    id: 4,
    type: 'income',
    label: 'Bottled Water 35cl',
    amount: 2000,
    date: '12 April',
  },
];

export default function HomeScreen() {
  // Toggle this to test empty state
  const hasData = true;
  const balance = hasData ? 6000 : 0;

  return (
    <View style={styles.root}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.iconBtn}>
          <Feather name="settings" size={24} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Balance Card */}
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Text style={styles.businessName}>Business name</Text>
        </View>
        <View style={styles.balanceRow}>
          <View>
            <Text style={styles.label}>Available balance</Text>
            <Text style={styles.balance}>₦{balance.toLocaleString()}</Text>
          </View>
          <TouchableOpacity style={styles.historyBtn}>
            <Text style={styles.historyText}>History</Text>
            <Feather name="chevron-right" size={18} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Transactions */}
      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions List or Empty State */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        {hasData ? (
          <View>
            {mockTransactions.map((tx) => (
              <View key={tx.id} style={styles.txCard}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {tx.type === 'income' ? (
                    <Feather name="check-circle" size={20} color="#22C55E" style={{ marginRight: 8 }} />
                  ) : (
                    <Feather name="arrow-up-right" size={20} color="#EF4444" style={{ marginRight: 8 }} />
                  )}
                  <Text style={styles.txLabel}>{tx.label}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={[styles.txAmount, { color: tx.type === 'income' ? '#22C55E' : '#EF4444' }] }>
                    {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()}
                  </Text>
                  <Text style={styles.txDate}>{tx.date}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Image source={{ uri: emptyIllustration }} style={styles.emptyImage} />
            <Text style={styles.emptyTitle}>No Transactions Yet</Text>
            <Text style={styles.emptyDesc}>Log your first transaction to get started</Text>
          </View>
        )}
      </ScrollView>

      {/* New Transaction Button */}
      <TouchableOpacity style={styles.newTxBtn}>
        <Ionicons name="add" size={22} color="#fff" />
        <Text style={styles.newTxText}>New Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 48 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  profilePic: { width: 36, height: 36, borderRadius: 18, marginRight: 8 },
  iconBtn: { padding: 4 },
  card: { backgroundColor: '#F3F7FB', borderRadius: 12, padding: 16, marginBottom: 20 },
  businessName: { fontWeight: '600', fontSize: 15, color: '#222' },
  balanceRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { color: '#888', fontSize: 13 },
  balance: { fontSize: 22, fontWeight: 'bold', color: '#0070F0', marginTop: 2 },
  historyBtn: { flexDirection: 'row', alignItems: 'center' },
  historyText: { color: '#222', fontWeight: '500', marginRight: 2 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: { fontWeight: '600', fontSize: 15, color: '#222' },
  viewAll: { color: '#0070F0', fontWeight: '500', fontSize: 13 },
  txCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: '#F0F0F0', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 2, elevation: 1 },
  txLabel: { fontWeight: '500', fontSize: 15, color: '#222' },
  txAmount: { fontWeight: '600', fontSize: 15 },
  txDate: { color: '#888', fontSize: 12 },
  emptyState: { alignItems: 'center', marginTop: 40, marginBottom: 24 },
  emptyImage: { width: 120, height: 120, marginBottom: 16 },
  emptyTitle: { fontWeight: '600', fontSize: 16, color: '#222', marginBottom: 4 },
  emptyDesc: { color: '#888', fontSize: 14, textAlign: 'center' },
  newTxBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0052CC', padding: 16, borderRadius: 8, marginVertical: 16 },
  newTxText: { color: '#fff', fontWeight: '600', fontSize: 16, marginLeft: 8 },
}); 