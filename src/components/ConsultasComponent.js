import React, {Component} from 'react';
import { View , Text , AsyncStorage } from 'react-native';
import styles from '../styles';

export default VacinasComponent = ({
    idAnimal,
    description,
    date,
    hour,
    pets
}) => {

    let preposicao = 'do';

    if(pets[idAnimal].genero === 'F'){
        preposicao = 'da';
    }

    return(
        <View style={styles.consultas.component}>
            <Text style={styles.consultas.consultaName}>Consulta {preposicao + ' ' + pets[idAnimal].nome}</Text>
            <View style={styles.consultas.barTop}>
                <Text style={styles.consultas.date}>{date}</Text>
                <Text style={styles.consultas.date}>{hour}</Text>
            </View>        
            <Text style={styles.consultas.descriptionText}>{description}</Text>
        </View>
    )
}