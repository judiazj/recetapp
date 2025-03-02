import { router, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'sticky',
          bottom: 20,
          left: 20,
          right: 20,
          height: 70,
          backgroundColor: '#fff',
          borderRadius: 30,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#2EC4B6',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="albums" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              onPress={() => router.push('/(tabs)/explore')}
              style={{
                position: 'absolute',
                left: '50%',
                marginLeft: -35,
                top: -30,
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#2EC4B6',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 6,
              }}
            >
              <Ionicons name="restaurant" size={32} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}