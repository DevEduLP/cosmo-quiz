import { StyleSheet, Text, View } from 'react-native'

export default function Logo() {
    return (
        <View>
            <Text style={styles.primario}>COSMO QUIZ</Text>
            <Text style={styles.segundario}>Perguntas do Universo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primario: {
        fontFamily: 'RUBIKMOONROCKS',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    segundario: {
        fontFamily: 'CHAKRAPETCH_BOLD',
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
    },
})
