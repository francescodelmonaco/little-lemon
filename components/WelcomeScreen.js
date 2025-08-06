import { ScrollView, StyleSheet, Text } from "react-native";

export default function WelcomeScreen() {
    return (
        <ScrollView
            style={welcomeStyles.container}
            indicatorStyle={"white"}
        >
            <Text style={welcomeStyles.title}>
                Welcome to Little Lemon
            </Text>

            <Text style={welcomeStyles.paragraph}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    )
};

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: "#EDEFEE",
        fontSize: 35,
        textAlign: "center",
        paddingVertical: 40
    },
    paragraph: {
        color: "#EDEFEE",
        fontSize: 25,
        textAlign: "center",
        paddingHorizontal: 40
    }
});