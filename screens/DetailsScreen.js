import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen({navigation}){
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
            }}>
                <Text>Details Screen</Text>
                <Button 
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                    />
        </View>
    )
}