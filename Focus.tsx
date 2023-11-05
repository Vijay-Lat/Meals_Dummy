import React from 'react'
import { colors } from "./utils/colors.ts"
import { TextInput } from "react-native-paper"
import { StyleSheet, View } from "react-native";
import { RoundedButton } from './components/RoundedButton.tsx';

const Focus = () => {
    const focusStyle = StyleSheet.create({
        focusContainer: {
            flex:0.8,
        },
        textInputContainer: {
            backgroundColor: "gray",
            padding: 50,
            flex:1,
        },
        textInputStyle:{
            marginRight:"10px"

        },
        btnContainer:{
            flex:0.5,
        }

    })
    return (
        <View style={focusStyle.focusContainer}>
            <View style={focusStyle.textInputContainer}>
                <TextInput style={focusStyle.textInputStyle} label="Add Action Item" />
                <RoundedButton title="+" size={50}/>
            </View>
           
        </View>
    )
}

export default Focus
