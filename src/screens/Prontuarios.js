import React, {Component} from 'react';
import { View , Text , ScrollView , AsyncStorage , FlatList } from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import ProntuarioComponent from '../components/ProntuarioComponent';


export default class Prontuarios extends Component {
    
    state={
        pets: {}
    }

    async componentDidMount(){
        let userJSON = await AsyncStorage.getItem('user');
        let pets = JSON.parse(userJSON).user.pets;
        
        pets = Object.entries(pets);
        this.setState({pets});

    }
    
    render() {
        return (
            <ScreenDefault>
                <ScrollView style={styles.usualy.scrollView} > 
                    <Text style={styles.usualy.title}>Prontuários</Text>
                    <FlatList
                        data={this.state.pets}
                        style={styles.usualy.flatList}
                        renderItem={({ item }) => (
                            <ProntuarioComponent
                            id={item[1].id}
                            name={item[1].nome}
                            prontuario={item[1].prontuario}
                            navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={item => item.id}
                        extraData={this.state.pets}
                    />
                </ScrollView>
            </ScreenDefault>
        );
    }
}