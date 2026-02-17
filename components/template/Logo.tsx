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
        fontFamily: 'SOLARSPACEDEMO-Regular',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    segundario: {
        fontFamily: 'SPACEMISSION',
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
    },
})
