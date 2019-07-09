import React, {Component} from 'react';
import { View } from 'react-native';
import styles from '../styles'


class ScreenDefault extends Component {
    
    render() {
        return (
            <View style={styles.screenDefault}>
                {this.props.children}
            </View>
        );
    }
}

export default ScreenDefault;