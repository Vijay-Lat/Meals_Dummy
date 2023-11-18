import React, { FC } from 'react'
import { View } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'

const RestaurantScreen: FC = () => {

    return (
        <View>
            <RestaurantCard name={1} />
        </View>
    )
}

export default RestaurantScreen
