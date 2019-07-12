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


    render(){
        console.disableYellowBox = true;
        return(
            <View style={{flex: 1}}>
                <Router/>
            </View>
        )
    }
} 
