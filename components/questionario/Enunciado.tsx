import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'

export interface EnunciadoProps {
    enunciado: string
}

export default function Enunciado(props: EnunciadoProps) {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.4)']}
                style={styles.background}
            />
            <Text style={styles.texto}>{props.enunciado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#852E9C',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 15,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 15,
    },
    texto: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.8, 
    },
})
