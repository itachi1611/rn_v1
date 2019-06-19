import React from "react";
import { View, Image, TouchableHighlight } from "react-native";

export default class Logo extends React.Component {

    render() {
        const { navigate } = this.props.nav;
        return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableHighlight
                    style={{
                        borderRadius: 80,
                        width: 80,
                        height: 80,
                        borderWidth: 0.5,
                        borderColor: "black",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    underlayColor="#ccc"
                    onPress={() => { navigate("SetCamera") }
                    }>
                    <Image source={require("../assets/avatar.png")} />
                </TouchableHighlight>
            </View>
        );
    }
}