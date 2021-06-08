import React from 'react'
import { FlatList, Dimensions, StyleSheet } from 'react-native'

import Card from './Card'

const CardList = ({ data }) => {
    return (
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Card
                    imageUrl={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
            />}
            snapToAlignment="start"
            decelerationRate='fast'
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}       
            />
    )
}

export default CardList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

