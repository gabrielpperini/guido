import React, {Component} from 'react';
import { View , Text , ScrollView , Image , FlatList , TouchableOpacity , Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from '../styles';
import assets from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation';

const dim = Dimensions.get('window');

const pets = [
    {
        id: 1,
        name: 'Rodolfo',
        prontuario: 'https://quicksearch.com.br/assets/app/politica_privacidade.pdf',
    },
    {
        id: 2,
        name: 'Gregório',
        prontuario: 'https://quicksearch.com.br/assets/app/politica_privacidade.pdf',
    },
    {
        id: 3,
        name: 'Fred',
        prontuario: 'https://quicksearch.com.br/assets/app/politica_privacidade.pdf',
    },
    {
        id: 4,
        name: 'Garfield',
        prontuario: 'https://quicksearch.com.br/assets/app/politica_privacidade.pdf',
    },
]

export default class PdfComponent extends Component {
    
    state={
        doc: 1,
    }

    componentWillUnmount(){
        console.log('unmonto pdf')
    }
    
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#5ADDB1',
            }}>
                <Icon
                name={'arrow-left'}
                color={'white'}
                size={30}
                onPress={() => {
                    const backAction = NavigationActions.back({ 
                        index: 6,
                        actions: [
                          NavigationActions.navigate({ routeName: 'Prontuarios'})
                        ],
                        key: null
                    });
                    this.props.navigation.dispatch(backAction);
                }}
                style={{
                    paddingHorizontal: 25,
                    paddingVertical: 25,
                }}
                />
                {//pets.map((element) => {
                // return ( 
                    <Pdf
                    source={{uri: 'https://quicksearch.com.br/assets/app/politica_privacidade.pdf' , cache: true}}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`document  current page: ${page}`);
                    }}
                    onError={(error)=>{console.log(error);}}
                    style={{
                        backgroundColor: '#404040',
                        position: 'absolute',
                        height: dim.height - 80,
                        width: dim.width,
                        // top: (element.id === this.state.doc) ? 80 : dim.height,
                        top: 80,
                    }}
                /> 
                // ) 
                
                // })
                }
            </View>    
        )
    }
}