import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function TransactionsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Transactions</Text>

      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButtonActive}>
          <Text style={styles.filterTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Expense</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.emptyState}>
        
        <Text style={styles.emptyTitle}>No Transactions Yet</Text>
        <Text style={styles.emptyText}>Log your first transaction to get started</Text>
      </View>

      <TouchableOpacity style={styles.newButton}>
        <Text style={styles.newButtonText}>+ New Transaction</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  filterButtonActive: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#0a5cd8',
  },
  filterText: {
    color: '#333',
  },
  filterTextActive: {
    color: '#fff',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 60,
  },
  placeholderImg: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  newButton: {
    backgroundColor: '#0a5cd8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
  },
  newButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
