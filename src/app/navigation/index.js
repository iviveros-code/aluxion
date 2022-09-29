import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Detail, Bio} from '@screens';

import {DrawerNavigation} from './drawer';

import {NAVIGATION} from '@constants';

export const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NAVIGATION.DRAWER.DRAWER}
        component={DrawerNavigation}
      />
      <Stack.Screen name={NAVIGATION.DETALLE.DETALLE} component={Detail} />
      <Stack.Screen name={NAVIGATION.PROFILE.PROFILE} component={Bio} />
    </Stack.Navigator>
  );
};
