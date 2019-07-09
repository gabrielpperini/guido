import React, {Component} from 'react';
import { View , Text , ScrollView , FlatList } from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import ConsultasComponent from '../components/ConsultasComponent';

const consultas = [
    {
        id: 1,
        idAnimal: '1',
        date: '28/06/2019',
        hour: '13:00',
        description: 'Revisão Geral'
    },
    {
        id: 2,
        idAnimal: '2',
        date: '29/06/2019',
        hour: '13:00',
        description: 'Revisão Geral'
    },
    {
        id: 3,
        idAnimal: '3',
        date: '30/06/2019',
        hour: '13:00',
        description: 'Revisão Geral'
    },
    {
        id: 4,
        idAnimal: '4',
        date: '01/07/2019',
        hour: '13:00',
        description: 'Revisão Geral'
    },
    {
        id: 5,
        idAnimal: '5',
        date: '02/07/2019',
        hour: '13:00',
        description: 'Revisão Geral'
    },
    {
        id: 6,
        idAnimal: '6',
        date: '03/07/2019',
        hour: '13:00',
        description: 'Revisão Geral'
    },
]

export default class Consultas extends Component {
    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
            <ScreenDefault>
                <ScrollView style={styles.usualy.scrollView}> 
                    <Text style={styles.usualy.title}>Consultas</Text>
                    <FlatList
                        data={consultas}
                        style={styles.usualy.flatList}
                        renderItem={({ item }) => (
                            <ConsultasComponent
                            idAnimal={item.id}
                            description={item.description}
                            date={item.date}
                            hour={item.hour}
                            />
                        )}
                        keyExtractor={item => item.id}
                        extraData={consultas}
                    />
                </ScrollView>
            </ScreenDefault>
        );
    }
}