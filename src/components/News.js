import React, {Component} from 'react';
import {Text, View , Image , TouchableWithoutFeedback , Dimensions} from 'react-native';
import styles from "../styles"


export default class News extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View
            style={styles.news.view}
            >
                <Text style={styles.news.title}>{this.props.title}</Text>
                <Text style={styles.news.text}>{this.props.text}</Text>
                {this.props.image ? 
                <Image source={this.props.image} style={styles.news.image}/>
                :null
                }
            </View>
        );
    }
}





