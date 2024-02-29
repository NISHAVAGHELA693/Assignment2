import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import Home from './Home';
import HomeScreen from './HomeScreen';
import AddItemForm from './AddItemForm'
const Stack = createStackNavigator();
function App() {
    return (
        <Stack.Navigator initialRouteName="SignUpForm" screenOptions={{ headerShown: false }}>
           <Stack.Screen name='SignUpForm' component={SignUpForm}/> 
           <Stack.Screen name='LoginForm' component={LoginForm}/>
           <Stack.Screen name='HomeScreen' component={HomeScreen}/>
           <Stack.Screen name='Home' component={Home}/>
           <Stack.Screen name='AddItemForm' component={AddItemForm}/>

        </Stack.Navigator>
)}
export default App; 