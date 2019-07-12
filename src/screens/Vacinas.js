import React, {Component} from 'react';
import { View , Text , ScrollView , ActivityIndicator , FlatList , Dimensions} from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import VacinasComponent from '../components/VacinasComponent';
import Api from '../../Api';

const dim = Dimensions.get("window");


export default class Vacinas extends Component {
    
    state = {
        vacinas: {},
        load: false
    }

    async componentDidMount(){
        this.setState({load: true});
        let vacinas = await Api.Vacinas();
        this.setState({vacinas})
        this.setState({load: false});
    }
    
    render() {
        return (
            <ScreenDefault>
                <ScrollView style={styles.usualy.scrollView}> 
                    <Text style={styles.usualy.title}>Vacinas</Text>
                    <FlatList
                        data={this.state.vacinas}
                        style={styles.usualy.flatList}
                        renderItem={({ item }) => (
                            <VacinasComponent
                            content={item.titulo}
                            date={item.data}
                            />
                        )}
                        keyExtractor={item => item.id}
                        extraData={this.state.vacinas}
                    />
                    <ActivityIndicator style={{
                        display: this.state.load ? 'flex'  : 'none',
                        marginTop: 50,
                    }} size={100} color={"#FFFFFF"} />
                </ScrollView>
            </ScreenDefault>
        );
    }
}