import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bank from './src/assets/bank.png';
import Colors from './src/resources/colors';
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
            tabBarIcon: ({ size, color }) =>(
              <Image 
              style={{tintColor: color, width: size, height: size}}
              source={Bank}
               />
            )
          }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};


export default App;
