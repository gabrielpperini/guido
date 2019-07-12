import React, {Component} from 'react';
import { ActivityIndicator , Text , ScrollView } from 'react-native';
import styles from '../styles';
import ScreenDefault from './screendefault';
import Api from '../../Api';


export default class Politica extends Component {

    state = {
        politica: {},
        load: false,
    }
    
    async componentDidMount(){
        this.setState({load: true});
        let politica = await Api.Politica();
        this.setState({politica});
        this.setState({load: false});
    }

    render() {
        return (
            <ScreenDefault>
            
                <ScrollView style={styles.sobre.view}> 
                    <Text style={styles.usualy.title}>Política de Privacidade</Text>
                    
                    <ActivityIndicator style={{
                        display: this.state.load ? 'flex'  : 'none',
                        marginTop: 50,
                    }} size={100} color={"#FFFFFF"} />
                    
                    
                    <Text style={styles.sobre.text}>{this.state.politica.politica}</Text>
                    
                </ScrollView>
            </ScreenDefault>
        );
    }
}