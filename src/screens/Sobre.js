import React, {Component} from 'react';
import { ActivityIndicator , Text , ScrollView , Image} from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import Api from '../../Api';

export default class Sobre extends Component {

    state = {
        sobre: {},
        load: false,
    }
    
    async componentDidMount(){
        this.setState({load: true});
        let sobre = await Api.Sobre();
        this.setState({sobre});
        this.setState({load: false});
    }

    render() {
        let {
            titulo,
            descricao,
            tituloS1,
            descricaoS1,
            tituloS2,
            descricaoS2,
            tituloS3,
            descricaoS3,
            tituloS4,
            descricaoS4,
        } = this.state.sobre;
        return (
            <ScreenDefault>
            
                <ScrollView style={styles.sobre.view}> 
                    <Text style={styles.usualy.title}>Sobre Nós</Text>
                    <Image source={assets.news} style={styles.sobre.image} />
                    
                    <ActivityIndicator style={{
                        display: this.state.load ? 'flex'  : 'none',
                        marginTop: 50,
                    }} size={100} color={"#FFFFFF"} />
                    
                    <Text style={styles.sobre.textTitulo}>{titulo}</Text>
                    <Text style={styles.sobre.text}>{descricao}</Text>

                    <Text style={styles.sobre.textTitulo}>{tituloS1}</Text>
                    <Text style={styles.sobre.text}>{descricaoS1}</Text>

                    <Text style={styles.sobre.textTitulo}>{tituloS2}</Text>
                    <Text style={styles.sobre.text}>{descricaoS2}</Text>

                    <Text style={styles.sobre.textTitulo}>{tituloS3}</Text>
                    <Text style={styles.sobre.text}>{descricaoS3}</Text>

                    <Text style={styles.sobre.textTitulo}>{tituloS4}</Text>
                    <Text style={styles.sobre.text}>{descricaoS4}</Text>
                    
                </ScrollView>
            </ScreenDefault>
        );
    }
}