import React, {Component} from 'react'
import { TouchableOpacity , Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


class ButtonMenu extends Component{

    render(){
        return(
            <TouchableOpacity onPress={() => {
                if(!this.props.func){
                    this.props.navigation.navigate(this.props.link);
                }else{
                    this.props.func();
                    this.props.navigation.navigate(this.props.link);
                }
            }}
            style={styles.buttonMenu.button}
            >
                <Icon
                name={this.props.icon}
                size={30}
                color={'#094162'}
                style={styles.buttonMenu.icon}
                />
                <Text style={styles.buttonMenu.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonMenu;