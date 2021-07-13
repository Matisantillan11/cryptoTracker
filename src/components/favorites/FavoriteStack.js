import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from './FavoritesScreen'
import Colors from '../../resources/colors'
const Stack = createStackNavigator();

const FavoriteStack = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle :{
                backgroundColor: Colors.blackPearl,
            },
            headerTintColor: Colors.softWhite
        }}>
            <Stack.Screen name="Favorites" component={FavoritesScreen}/>
        </Stack.Navigator>
    );
}

export default FavoriteStack;