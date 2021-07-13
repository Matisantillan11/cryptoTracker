import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bank from './src/assets/bank.png';
import Star from './src/assets/star.png';
import Colors from './src/resources/colors';
import FavoriteStack from './src/components/favorites/FavoriteStack'
const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
      tabBarOptions = {{ tintColor: "#333",
      style:{
        backgroundColor: Colors.blackPearl
        }
      }}>
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size }) =>(
              <Image 
              style={{tintColor: Colors.softBlue, width: size, height: size}}
              source={Bank}
               />
            )
          }}/>

          <Tabs.Screen
          name="Favorites"
          component={FavoriteStack}
          options={{
            tabBarIcon: ({ size }) =>(
              <Image 
              style={{tintColor: Colors.softBlue, width: size, height: size}}
              source={Star}
               />
            )
          }}/>
          
      </Tabs.Navigator>
    </NavigationContainer>
  );
};


export default App;
