import React, { Component } from 'react';
import { Text,
         View,
         StyleSheet, 
         ActivityIndicator, 
         Image, 
         KeyboardAvoidingView ,
         TouchableOpacity
        } from 'react-native';
import { NavigationActions } from 'react-navigation';
import customstyles from '../../../assets/styles/customstyles';
import customtext from '../../utils/customtext';
// import LoginForm from './LoginForm';
import colors from '../../utils/colors';
import { TextField } from 'react-native-material-textfield';
//import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RaisedTextButton } from 'react-native-material-buttons';
import Toast from 'react-native-simple-toast';
/*importing and using from const*/
const { 
        loginscreenLogoContainer,
        loginscreenLogo,
        loginTitle, 
        container
    } = customstyles;
const { login_welcome } = customtext;
const { username_label,
    password_label,
    login_label,
    create_account_text,
    create_account_link
 } = customtext;
const { loginscreenInputContainer,
    loginscreenContainer,
    loginscreenCreateAccountWrapper,
    loginscreenCreateAccountText,
    loginscreenCreateAccountLinkText,
    loginscreenLoginContainer
 } = customstyles;
const { white,
    black,
    electricBlue
 } = colors;

export default class HomeScreen extends Component {
    constructor() {
        super();
    }
}