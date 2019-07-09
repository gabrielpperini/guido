import React from 'react';
import { View , Text , TouchableOpacity } from 'react-native';
import styles from '../styles';
import PdfComponent from './PdfComponent';

export default ProntuarioComponent = ({
    id,
    name,
    navigation
}) => {
    return(
        <View style={styles.prontuarios.component} >
            <TouchableOpacity style={styles.prontuarios.button} onPress={() => navigation.navigate('Pdf' , {pet: id }) } >
                <Text style={styles.prontuarios.buttonText} >{name}</Text>
            </TouchableOpacity>
        </View>
    )
}