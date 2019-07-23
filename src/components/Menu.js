import React, {Component} from 'react'
import { View,  TouchableWithoutFeedback  , AsyncStorage , Animated , Easing  } from 'react-native'
import  styles  from "../styles"
import ButtonMenu from './ButtonMenu';
import { NavigationActions } from 'react-navigation';
import OneSignal from 'react-native-onesignal';




class Menu extends Component{ 
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        console.log('desmonto menu')
    }

    render(){  
        return( 
            <View style={[styles.menu.view]}>
                    <ButtonMenu navigation={this.props.navigation} link={'Home'} title={'Home'} icon={'home'} />
                    <ButtonMenu navigation={this.props.navigation} link={'Sobre'} title={'Sobre'} icon={'bookmark'} />
                    <ButtonMenu navigation={this.props.navigation} link={'Vacinas'} title={'Vacinas'} icon={'tint'} />
                    <ButtonMenu navigation={this.props.navigation} link={'Consultas'} title={'Consultas'} icon={'calendar'} />
                    <ButtonMenu navigation={this.props.navigation} link={'Prontuarios'} title={'Prontuários'} icon={'book'} />
                    <ButtonMenu navigation={this.props.navigation} link={'Politica'} title={'Política'} icon={'lock'} />
                    <ButtonMenu navigation={this.props.navigation} link={'Login'} title={'Sair'} icon={'sign-out'} func={async () => {
                        await AsyncStorage.removeItem('user');
                        OneSignal.removeExternalUserId();
                        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Main' })], 0)
                    }} />
            </View>
        )
    }
}

export default Menu