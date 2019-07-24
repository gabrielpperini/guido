import React, {Component} from 'react';
import {Text, View , Image , TouchableWithoutFeedback , Dimensions} from 'react-native';
import assets from '../../assets';
import styles from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Header extends Component {
    
    constructor(props){
        super(props);
    }

    state = {
        iconName: 'navicon'
    }

    render() {
        let idScreen = this.props.navigation.state.index ;
        let show = (idScreen === 5 ) ? false : true;
        
        return (
            <View style={[styles.header.view, {display: show ? 'flex' : 'none'}]}>
                <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.toggleDrawer();
                }}
                >
                    <Icon style={styles.header.navicon} 
                    size={30}
                    name={'navicon'}
                    color={'white'}
                    onPress={this.props.menu}
                    />
                </TouchableWithoutFeedback>
                <Image source={assets.logo} />
            </View>
        );
    }
}


