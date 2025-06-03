import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="main"
        options={{
          title: 'main',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'about',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubble" color={color} />,
        }}
      />
    </Tabs>
  );
}
