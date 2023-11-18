import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'
import styled from "styled-components/native"

const RestCard = styled(Card)`
background-color:${(props) => props.theme.colors.bg.primary};
margin:${(props) => props.theme.space[2]};
`
const CoverCard = styled(Card.Cover)`
padding:${(props) => props.theme.space[3]}
`
const Title = styled.Text`
font-family:${(props) => props.theme.fonts.body}
`
const RestaurantCard = ({ name }) => {
    return (

        <RestCard elevation={5}>
            <CoverCard key={name} source={{ uri: "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}></CoverCard>
            <Title>{name}</Title>
        </RestCard >
    )
}

export default RestaurantCard

