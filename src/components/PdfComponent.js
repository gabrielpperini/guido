import React, {Component} from 'react';
import { View , Text , ScrollView , Image , FlatList , TouchableOpacity , Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from '../styles';
import assets from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation';

const dim = Dimensions.get('window');

export default class PdfComponent extends Component {
    
    state={
        numberOfPages: 0,
    }

    static navigationOptions = {
        header: null
    };

    
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
            <View style={{
                backgroundColor: '#5ADDB1',
                height: 80
            }}>
                <Icon
                name={'arrow-left'}
                color={'white'}
                size={30}
                onPress={() => {
                    this.props.navigation.goBack();
                }}
                style={{
                    paddingHorizontal: 25,
                    paddingVertical: 25,
                }}
                />
            </View>
                    <Pdf
                    ref={(pdf) => {
                        this.pdf = pdf;
                    }}
                    source={{uri: this.props.navigation.state.params.prontuario , cache: true}}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                        this.setState({numberOfPages})
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`document  current page: ${page}`);
                    }}
                    onError={(error)=>{console.log(error);}}
                    style={{
                        backgroundColor: '#404040',
                        height: dim.height - 100,
                        width: dim.width,
                    }}
                /> 
            </View>    
        )
    }
}