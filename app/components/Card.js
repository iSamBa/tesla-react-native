import React from 'react'
import {Dimensions,  ImageBackground, StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../config/styles'
import Button from './Button'

const Card = ({ imageUrl, title, subtitle }) => {
    const handlePress = () => {
        alert('Zaama 3ndek l flous bach tchri !!! TA SIR FIHALATEK')
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={imageUrl}
                style={styles.image}
            />
            <View style={styles.information}>
                <Text style={styles.title}>{ title }</Text>
                { subtitle && <Text style={styles.subtitle}>{ subtitle }</Text>}
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    backgroundColor={defaultStyles.colors.primary}
                    title="Custom order"
                    onPress={handlePress}
                />
                <Button
                    backgroundColor={defaultStyles.colors.secondary}
                    title="Existing inventory"
                />
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: Dimensions.get('window').height,
    },
    buttonsContainer: {
        alignItems: 'center',
        bottom: 50,
        justifyContent: 'center',
        padding : 10,
        position: 'absolute',
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    information: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 150,
    },
    title: {
        color: defaultStyles.colors.primary,
        marginBottom: 5,
        fontSize: 48,
        fontWeight: '500'
    },
    subtitle: {
        color: defaultStyles.colors.primary,
        fontSize: 20,
        fontWeight: '300'
    }
})


