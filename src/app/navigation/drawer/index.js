import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';

import {Profile, Fee} from '@screens';

import {NAVIGATION, Images} from '@constants';

import {styles} from './styles';

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  const OpenDrawer = () => {
    return (
      <View style={{marginLeft: 30}}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image source={Images.Home.Burguer} style={styles.drawer} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen
        name={NAVIGATION.HOME.HOME}
        component={Fee}
        options={{
          title: 'Home',
          headerTitle: () => <Text style={styles.title}>Discover</Text>,
          headerTitleAlign: 'center',
          headerLeft: () => <OpenDrawer />,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Drawer.Screen
        name={NAVIGATION.DRAWER.MENU}
        component={Profile}
        options={{
          title: 'Profile',
          headerTitle: () => <Text style={styles.title}>Profile</Text>,
          headerTitleAlign: 'center',
          headerLeft: () => <OpenDrawer />,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </Drawer.Navigator>
  );
};
