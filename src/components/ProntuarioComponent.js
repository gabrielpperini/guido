import React from 'react';
import { View , Text , TouchableOpacity } from 'react-native';
import styles from '../styles';
import PdfComponent from './PdfComponent';

export default ProntuarioComponent = ({
    id,
    name,
    prontuario,
    navigation
}) => {
    return(
        <View style={styles.prontuarios.component} >
            <TouchableOpacity style={styles.prontuarios.button} onPress={() => navigation.navigate('Pdf' , {prontuario: prontuario }) } >
                <Text style={styles.prontuarios.buttonText} >{name}</Text>
            </TouchableOpacity>
        </View>
    )
}