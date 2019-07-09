import React, {Component} from 'react';
import { View , Text , ScrollView , Image , FlatList , Dimensions} from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import VacinasComponent from '../components/VacinasComponent';

const dim = Dimensions.get("window");


const vacinas = [
    {
        id: 1,
        content: 'Vacina 1',
        date: '28/06/2019'
    },
    {
        id: 2,
        content: 'Vacina 2',
        date: '29/06/2019'
    },
    {
        id: 3,
        content: 'Vacina 3',
        date: '30/06/2019'
    },
    {
        id: 4,
        content: 'Vacina 4',
        date: '01/07/2019'
    },
    {
        id: 5,
        content: 'Vacina 5',
        date: '02/07/2019'
    },
    {
        id: 6,
        content: 'Vacina 6',
        date: '03/07/2019'
    },
]

export default class Vacinas extends Component {
    
    render() {
        return (
            <ScreenDefault>
                <ScrollView style={styles.usualy.scrollView}> 
                    <Text style={styles.usualy.title}>Vacinas</Text>
                    <FlatList
                        data={vacinas}
                        style={styles.usualy.flatList}
                        renderItem={({ item }) => (
                            <VacinasComponent
                            content={item.content}
                            date={item.date}
                            />
                        )}
                        keyExtractor={item => item.id}
                        extraData={vacinas}
                    />
                </ScrollView>
            </ScreenDefault>
        );
    }
}