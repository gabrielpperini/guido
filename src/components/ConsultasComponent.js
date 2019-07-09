import React, {Component} from 'react';
import { View , Text } from 'react-native';
import styles from '../styles';

export default VacinasComponent = ({
    idAnimal,
    description,
    date,
    hour
}) => {
    return(
        <View style={styles.consultas.component}>
            <Text style={styles.consultas.consultaName}>Consulta do {idAnimal}</Text>
            <View style={styles.consultas.barTop}>
                <Text style={styles.consultas.date}>{date}</Text>
                <Text style={styles.consultas.date}>{hour}</Text>
            </View>        
            <Text style={styles.consultas.descriptionText}>{description}</Text>
        </View>
    )
}