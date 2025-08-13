import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function LoginScreen() {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    return (
        <ScrollView style={loginStyles.container}>
            <Text style={loginStyles.headerText}>Welcome to Little Lemon</Text>
            <Text style={loginStyles.regularText}>Login to continue </Text>

            <TextInput
                style={loginStyles.input}
                placeholder='email'
                keyboardType='email-address'
                value={email}
                onChangeText={onChangeEmail}
            />
            <TextInput
                style={loginStyles.input}
                placeholder='password'
                secureTextEntry={true}
                value={password}
                onChangeText={onChangePassword}
            />
        </ScrollView>
    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        backgroundColor: "#EDEFEE",
        marginHorizontal: 40,
        padding: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "#EDEFEE"
    }
});