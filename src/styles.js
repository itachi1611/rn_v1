import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgb(32,53,78)",
        justifyContent: "center"
    },
    header: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 128,
        height: 56,
        marginTop: 100
    },
    loginInfo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    loginInfoSection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    inputImage: {
        position: "absolute",
        top: 0,
        left: 10,
        height: 35,
        width: 25,
        resizeMode: "stretch",
        alignItems: "center"
    },
    input: {
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#000",
        height: 40,
        width: 250,
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 20,
        paddingHorizontal: 10
    },
    btnLogin: {
        backgroundColor: "green",
        paddingVertical: 15,
        width: 250,
        marginTop: 5
    },
    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        color: "rgb(32,53,70)"
    },
    signup: {
        position: "absolute",
        bottom: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    btnRegister: {
        backgroundColor: "green",
        paddingVertical: 15,
        width: 250
    },
    signin: {
        position: "absolute",
        bottom: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    error: {
        borderWidth: 3,
        borderColor: 'red',
    },
    //UserHeader
    userHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 0.5,
    },
    image: {
        width: 35,
        height: 35,
    }
});