import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";
const stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.navigator intialrouteName = "Home"
      screenOptions={{ 
        headerShown:false}}>
          <stack.Screen name = "Home"
          component={HomeScreen}/>
          <Stack.Screen name="IssLocation" 
           component={IssLocationScreen} /> 
           <Stack.Screen name="Meteors" 
           component={MeteorScreen} />
           <Stack.Screen name="Updates" 
           component={UpdateScreen} />
        </stack.navigator>
      
    </NavigationContainer>
    
  );
}

