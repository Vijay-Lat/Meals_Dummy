import React, { FC, useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors } from './utils/colors';
import { isAndroid } from './utils/constants';
import { Fragment } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import RestaurantScreen from './Features/Restaurants/screens/RestaurantScreen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './Theme';
import { MaterialBottomTabNavigationEventMap, MaterialBottomTabNavigationOptions, createMaterialBottomTabNavigator, } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, ParamListBase, RouteConfig, TabNavigationState, } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import { SearchBar } from 'react-native-screens';
import styled from 'styled-components/native';
import { restaurantRequest } from './services/restaurants/restaurants.service';

const App = () => {
  const [value, setvalue] = useState<string>("")
  const androidHeight = StatusBar?.currentHeight?.toString() as string;

  const SafeArea = styled(SafeAreaView)`
 background-color:#e66465;
  flex:1;
  padding-top: ${isAndroid ? androidHeight + "px" : 0 + "px"};`

  const Tab = createMaterialBottomTabNavigator();

  const Settings = () => <View><Text>Settings</Text></View>;

  const Home = () => <View><Text>Home Screen</Text></View>

  interface listOfTabsProps {
    name: string;
    component: any
  }

  const listOfTabs: listOfTabsProps[] = [{ name: "Home", component: Home }, { name: "Settings", component: Settings }, { name: "Restaurant", component: RestaurantScreen }];

  restaurantRequest();


  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <StatusBar backgroundColor={"#f9f9f9"} />
          <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' >
              {listOfTabs.map(tab => <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />)}
            </Tab.Navigator>
          </NavigationContainer>
        </SafeArea>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
