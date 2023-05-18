import { StyleSheet, Dimensions} from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const css = StyleSheet.create({
    screen: {
        height: windowHeight,
        width: windowWidth,
    },
    content: {
        paddingTop: 20
    },
    header: {
        width: windowWidth,
        flexDirection: "column",
        alignContent: "center",
        marginTop: "3%",
    },
    text: {
        fontSize: 30,
        fontWeight: "600",
        color: "black",
        width: (windowWidth * 8) / 10,
        textAlign: "left",
        paddingTop: 42,
        paddingLeft: "7%",
    },
    textInput: {
        width: "80%",
        marginLeft: "7%",
        border: "none",
        borderRadius: 25,
        backgroundColor: "#D2D2D2aa",
        height: 50,
        color: "white",
        paddingLeft: 15,
    },
    textSecond: {
        color: "#7B7B7B",
        paddingLeft: "7%",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 17,
    },
    barrier: {
        height: "5%",
        width: windowWidth,
        backgroundColor: "#white",
        flexDirection: "row",
        alignItems: "flex-end",
    },
    addStatusButton: {
        width: windowHeight / 11 - 35,
        height: windowHeight / 11 - 35,
        borderRadius: (windowHeight / 11 - 30) / 2,
        position: "absolute",
        bottom: windowHeight / 20,
        right: windowWidth / 20,
        justifyContent: "center",
        alignItems: "center",
    },
    svg: {
        width: "50%",
        height: "50%",
    }
});