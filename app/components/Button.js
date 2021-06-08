import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import defaultStyles from '../config/styles'

const Button = ({ backgroundColor, onPress, title }) => {
    const color = backgroundColor === defaultStyles.colors.primary ? defaultStyles.colors.secondary : defaultStyles.colors.primary;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, {backgroundColor}]}>
                <Text style={[styles.title, {color}]}>{ title }</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 25,
        height: 50,
        justifyContent: 'center',
        marginVertical: 5,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase'
    }
})
