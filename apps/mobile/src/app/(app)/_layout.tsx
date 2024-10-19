import { SplashScreen, Tabs } from 'expo-router';
import React, { useEffect } from 'react';

export default function TabLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarTestID: 'home',
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
