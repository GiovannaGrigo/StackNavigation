import React from "react";
import { View, Text, Button } from "react-native";
import { Avatar } from 'react-native-paper';


export default function HomeScreen({ navigation }) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Home Screen</Text>
            <Avatar.Icon size={24} icon="folder" />
            <Button
                title="Ir para detalhes"
                onPress={() => navigation.navigate('Details')}
            />

        </View>
    )
}