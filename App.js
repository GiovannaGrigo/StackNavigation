import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size}/>
        )}} />
        <Drawer.Screen name="Details" component={DetailsScreen} options={{drawerIcon: ({color, size}) => ( 
          <Icon name="grid" color={color} size={size}/>
        )}} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}