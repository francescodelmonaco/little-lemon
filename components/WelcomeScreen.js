import { ScrollView, Text } from "react-native";

export default function WelcomeScreen() {
    return (
        <ScrollView
            style={{
                flex: 1
            }}
            indicatorStyle={"white"}
        >
            <Text
                style={{
                    color: "white",
                    fontSize: 35,
                    textAlign: "center",
                    paddingVertical: 40
                }}>
                Welcome to Little Lemon
            </Text>

            <Text
                style={{
                    color: "white",
                    fontSize: 25,
                    textAlign: "center",
                    paddingHorizontal: 40
                }}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    )
}