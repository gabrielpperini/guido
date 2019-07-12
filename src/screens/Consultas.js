import React, {Component} from 'react';
import { ActivityIndicator , Text , ScrollView , FlatList , AsyncStorage} from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import ConsultasComponent from '../components/ConsultasComponent';
import Api from '../../Api';


export default class Consultas extends Component {

    state = {
        consultas: {},
        load: false,
        pets: {}
    }

    async componentDidMount(){
        this.setState({load: true});
        let consultas = await Api.Consultas();
        let userJSON = await AsyncStorage.getItem('user');
        let user = JSON.parse(userJSON).user;
        if(!user){
            this.props.navigation.navigate('Login');
        }else{
            let pets = user.pets;
            this.setState({pets});
        }
        this.setState({consultas})
        this.setState({load: false});
    }
    
    render() {
        return (
            <ScreenDefault>
                <ScrollView style={styles.usualy.scrollView}> 
                    <Text style={styles.usualy.title}>Consultas</Text>
                    <FlatList
                        data={this.state.consultas}
                        style={styles.usualy.flatList}
                        renderItem={({ item }) => (
                            <ConsultasComponent
                            idAnimal={item.pet}
                            description={item.descricao}
                            date={item.data}
                            hour={item.hora}
                            pets={this.state.pets}
                            />
                        )}
                        keyExtractor={item => item.id}
                        extraData={this.state.consultas}
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