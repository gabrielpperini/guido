import React, {Component} from 'react';
import { View , Text , Image , Dimensions , ScrollView , ActivityIndicator, AsyncStorage} from 'react-native';
import styles from '../styles';
import ScreenDefault from './screendefault';
import Icon from 'react-native-vector-icons/FontAwesome'

const dim = Dimensions.get("window");

export default class New extends Component {

    state = {
        text: null,
        load: false,
    }

    
    render() {
        let {
            titulo,
            texto,
            data,
            thumbnail
        } = this.props.navigation.getParam('item');
        return (
            <ScreenDefault>
                <ScrollView style={{backgroundColor: 'white'}}> 
                    <Icon
                        name={'arrow-left'}
                        color={'#094162'}
                        size={30}
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 20,
                        }}
                        onPress={() => {this.props.navigation.navigate('Home')}}
                    />
                    <Text style={styles.usualy.title}>{titulo}</Text>
                    <View style={styles.news.view}>
                        {thumbnail ? 
                        <Image source={{uri: 'http://www.lucianaguidolin.com.br/uploads/default/files/novidades/' + thumbnail}} style={styles.news.image}/>
                        :null
                        }
                        <Text style={[styles.news.text, {fontSize: 21}] }>{texto}</Text>
                    </View>
                </ScrollView>
            </ScreenDefault>
        );
    }
}