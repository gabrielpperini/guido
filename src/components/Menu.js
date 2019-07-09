import React, {Component} from 'react'
import { View,  TouchableWithoutFeedback  , AsyncStorage , Animated , Easing  } from 'react-native'
import  styles  from "../styles"
import ButtonMenu from './ButtonMenu';




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
                    <ButtonMenu navigation={this.props.navigation} link={'Home'} title={'Política'} icon={'lock'} />
                    <ButtonMenu navigation={this.props.navigation} link={'Login'} title={'Sair'} icon={'sign-out'} func={async () => {
                        await AsyncStorage.setItem('user' , '');
                    }} />
            </View>
        )
    }
}

export default Menu