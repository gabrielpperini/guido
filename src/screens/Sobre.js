import React, {Component} from 'react';
import { View , Text , ScrollView , Image} from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';

const t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel rhoncus lorem. Aliquam sed orci sit amet eros accumsan viverra. Donec consequat enim vel mauris gravida faucibus. Suspendisse id egestas purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel rhoncus lorem. Aliquam sed orci sit amet eros accumsan viverra. Donec consequat enim vel mauris gravida faucibus. Suspendisse id egestas purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel rhoncus lorem. Aliquam sed orci sit amet eros accumsan viverra. Donec consequat enim vel mauris gravida faucibus. Suspendisse id egestas purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel rhoncus lorem. Aliquam sed orci sit amet eros accumsan viverra. Donec consequat enim vel mauris gravida faucibus. Suspendisse id egestas purus.";

export default class Sobre extends Component {
    static navigationOptions = {
        header: null
    }
    
    componentWillUnmount(){
        console.log('desmonto Sobre')
    }

    render() {
        return (
            <ScreenDefault>
                <ScrollView style={styles.sobre.view}> 
                    <Text style={styles.usualy.title}>Sobre Nós</Text>
                    <Image source={assets.news} style={styles.sobre.image} />
                    <Text style={styles.sobre.text}>{t}</Text>
                </ScrollView>
            </ScreenDefault>
        );
    }
}