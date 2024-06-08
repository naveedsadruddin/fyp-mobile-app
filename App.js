// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import Welcome from './screens/welcomeScreen';
import Signup from'./screens/Signup';
import Homepage from './screens/Homepage';
import SignInScreen from './screens/SignInScreen';
import Splash from './screens/Splash';
import Products from'./screens/Products';
import DescriptionPage from'./screens/DescriptionPage';
import Cart from './screens/Cart';
import Error from './screens/Error';
import User from './screens/User';
import Reel from './screens/Reel';
import Lowerbar from './screens/Lowerbar';
import Chat from './screens/Chat';
import Chatbot from './screens/ChatHeader';
import Abc from './screens/Abc'
import Reels from './screens/Reels';
import Payment from './screens/Payment';
import Cartcomponent from './screens/cartcomponent';
import ReelC from './screens/Reel copy';
import ChatHeader from './screens/ChatHeader';
import UserScreen from './screens/UserScreen';
import EditProfile from './screens/EditProfile';
import ReelC2 from './screens/Reel copy 2';
import Comment from "./screens/Comment"
import { Provider } from 'react-redux';
import OrderDetail from './screens/OrderDetail';
import store from './store'; 


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='screen1'>
        {/* <Stack.Screen name='screen1' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='screen2' component={LandingPage} options={{headerShown:false}}/>
        <Stack.Screen name='screen3' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name='screen4' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='screen5' component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name='screen6' component={Homepage} options={{headerShown:false}}/>
        <Stack.Screen name='screen7' component={Products} options={{headerShown:false}}/>
        <Stack.Screen name='screen8' component={DescriptionPage} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name='screen9' component={Cart} options={{headerShown:false}}/>
        <Stack.Screen name='screen10' component={ReelC} options={{headerShown:false}}/> */}
        <Stack.Screen name='screen11' component={User} options={{headerShown:false}}/>
        {/* <Stack.Screen name='screen12' component={Payment} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name='screen13' component={UserScreen} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name='screen14' component={Chat} options={{headerShown:false}}/> */}
        <Stack.Screen name='screen15' component={OrderDetail} options={{headerShown:false}}/>
    </Stack.Navigator>
   {/* <Error/> */}
   {/* <User/> */}
   {/* <DescriptionPage/> */}
   {/* <Lowerbar/> */}
    {/* <ReelC/> */}
    {/* <Cart/> */}
    {/* <Chat/> */}
    {/* <Cartcomponent/> */}
    {/* <UserScreen/> */}
    {/* <Homepage/> */}
    {/* <Comment/> */}
    {/* <EditProfile/> */}
  {/* <Stack.Navigator  initialRouteName='screen1'>
    <Stack.Screen  name='screen1' component={UserScreen} options={{headerShown:false}}/>
    <Stack.Screen name='screen2' component={Chat} options={{headerShown:false}}/>
  </Stack.Navigator> */}
    </NavigationContainer>
  
    </Provider>

  );
}

export default App;