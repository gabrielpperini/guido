import { createDrawerNavigator, createStackNavigator , createAppContainer } from "react-navigation";
import React, { Component } from 'react';
import { View , AsyncStorage } from 'react-native';

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Vacinas from "./src/screens/Vacinas";
import Consultas from "./src/screens/Consultas";
import Prontuarios from "./src/screens/Prontuarios";

import Menu from "./src/components/Menu";
import Header from './src/components/Header'
import Login from "./src/components/Login";
import PdfComponent from "./src/components/PdfComponent";
import New from "./src/screens/New";
import Politica from "./src/screens/Politica";
import OneSignal from 'react-native-onesignal'

const AppNavigator = createDrawerNavigator({
  Home: Home,
  Login: Login,
  Sobre: Sobre,
  Vacinas: Vacinas,
  Consultas: Consultas,
  Prontuarios: Prontuarios,
  New: New,
  Politica: Politica
} , { 
  initialRouteName: 'Home',
  contentComponent: Menu
});

const t = createStackNavigator({
    Main: AppNavigator,
    Pdf: PdfComponent,
},{
  headerMode: 'screen',
  defaultNavigationOptions: ({navigation}) =>  ({
    header: <Header navigation={navigation} />
  })
}
)


const Router = createAppContainer(t);

export default class App extends Component {

    componentDidMount(){
      OneSignal.init('94e62de8-f115-4c0b-8494-76cfb53a2847');
      OneSignal.addEventListener("received", this.receivedPush);
      OneSignal.addEventListener("opened", this.openedPush);
      OneSignal.addEventListener("ids", this.idsPush);
    }
      
    receivedPush(push){
      console.log("Received Push:", push);
    }
    openedPush(push){
      console.log("Opened Push:", push);
    }
    idsPush(push){
      console.log("IDS Push:", push);
    }

    render(){
        console.disableYellowBox = true;
        return(
            <View style={{flex: 1}}>
                <Router/>
            </View>
        )
    }
} 
