import React, {Component} from 'react';
import { View , Text , ScrollView , Image , FlatList , Dimensions } from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import ProntuarioComponent from '../components/ProntuarioComponent';
import Pdf from 'react-native-pdf';


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
        prontuario: 'http://judorecreio.com.br/manualdigital/documents/11%20KI%C3%9B%20BRANCA_CINZA.pdf',
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

export default class Prontuarios extends Component {
    
    componentWillUnmount(){
        console.log('desmonto prontuaios')
    }
    
    render() {
        return (
            <ScreenDefault>
                <ScrollView style={styles.usualy.scrollView} > 
                    <Text style={styles.usualy.title}>Prontuários</Text>
                    <FlatList
                        data={pets}
                        style={styles.usualy.flatList}
                        renderItem={({ item }) => (
                            <ProntuarioComponent
                            id={item.id}
                            name={item.name}
                            navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={item => item.id}
                        extraData={pets}
                    />
                </ScrollView>
            </ScreenDefault>
        );
    }
}