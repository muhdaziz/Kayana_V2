import { Tabs } from 'expo-router';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

const ACTIVE_COLOR = '#0052CC';
const INACTIVE_COLOR = '#222';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500', marginBottom: 4 },
        tabBarStyle: { height: 60, paddingTop: 4 },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'home') {
            return focused ? (
              <Ionicons name="home" size={24} color={color} />
            ) : (
              <Ionicons name="home-outline" size={24} color={color} />
            );
          }
          if (route.name === 'stocks') {
            return focused ? (
              <MaterialCommunityIcons name="cube" size={24} color={color} />
            ) : (
              <MaterialCommunityIcons name="cube-outline" size={24} color={color} />
            );
          }
          if (route.name === 'transaction') {
            return focused ? (
              <Feather name="credit-card" size={24} color={color} />
            ) : (
              <Feather name="credit-card" size={24} color={color} />
            );
          }
          if (route.name === 'insights') {
            return focused ? (
              <Feather name="trending-up" size={24} color={color} />
            ) : (
              <Feather name="trending-up" size={24} color={color} />
            );
          }
          return null;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="stocks" options={{ title: "Stock" }} />
      <Tabs.Screen name="transaction" options={{ title: "Transactions" }} />
      <Tabs.Screen name="insights" options={{ title: "Insights" }} />
    </Tabs>
  );
}