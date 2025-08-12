import { SectionList, StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const Item = ({ name, price }) => {
    return (
        <View style={menuStyles.menuRow}>
            <Text style={menuStyles.text}>{name}</Text>
            <Text style={menuStyles.text}>{price}</Text>
        </View>
    )
};

const Header = () => <Text style={menuStyles.title}>Menu list</Text>

export default function MenuItems() {
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />

    const renderSectionHeader = ({ section: { title } }) => (
        <View>
            <Text style={menuStyles.sectionTitle}>{title}</Text>
        </View>
    )

    return (
        <View style={menuStyles.container}>
            <SectionList
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={Header}
                renderSectionHeader={renderSectionHeader}
            />
        </View>
    )
};

const menuStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    text: {
        color: "#F4CE14",
        fontSize: 20
    },
    title: {
        color: "#F4CE14",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        textDecorationLine: "underline",
        paddingBottom: 20
    },
    sectionTitle: {
        backgroundColor: "#F4CE14",
        textAlign: "center",
        fontSize: 25
    }
});