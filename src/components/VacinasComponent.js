import React, {Component} from 'react';
import { View , Text } from 'react-native';
import styles from '../styles';

export default VacinasComponent = ({
    content,
    date
}) => {
    return(
        <View style={styles.vacinas.component}>
            <Text style={styles.vacinas.vacinaName}>{content}</Text>
            <Text style={styles.vacinas.date}>{date}</Text>
        </View>
    )
}