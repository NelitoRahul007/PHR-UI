/**
 * Created by Rahuld on 2017/08/26
 */

import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import Fuego from '../components/SplashScreen/Fuego';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import RegisterScreen from '../components/RegisterScreen/RegisterScreen';
import HomeScreen from '../components/Home/HomeScreen';

/*Routing at difernt page */
export const Navigator  = StackNavigator({
  SplashPage: {screen: Fuego},
  LoginPage: {screen: LoginScreen},
  RegisterPage: {screen: RegisterScreen},
  HomePage: {screen: HomeScreen}
 
});