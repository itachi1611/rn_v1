import React from "react";
import {
    View,
    Image,
    Text,
    SafeAreaView,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from "react-native";
import {
    showMessage,
} from 'react-native-flash-message';
import FlashMessage from "react-native-flash-message";
import Logo from '../components/Logo';
import styles from '../src/styles';
import { firebaseApp } from '../components/FirebaseConfig';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            re_password: '',
        }
    }
    static navigationOptions = {
        header: null,
    }

    register() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                showMessage({
                    message: 'Success',
                    description: 'Register Successful : ' + this.state.email,
                    type: 'success',
                    onPress: () => {
                        this.props.navigation.navigate("Login")
                    }
                });
                this.setState({
                    email: '',
                    password: '',

                })
            })
            .catch(function (error) {

            });
    }

    validate() {
        space = /^\s*$/;
        regE = /\w+@\w+(\.\w+){1,2}/;
        regP = /\w{5,}/;
        const { email, password, re_password } = this.state;
        if (space.test(email)) {
            showMessage({
                message: 'Error',
                description: 'Email can not be empty !',
                type: 'warning',
            });
        } else if (!regE.test(email)) {
            showMessage({
                message: 'Error',
                description: 'Please fill the correct email format !',
                type: 'warning',
            });
        } else if (space.test(password) || !regP.test(password)) {
            showMessage({
                message: 'Error',
                description: 'Password can not be empty and at least 5 characters !',
                type: 'warning',
            });
        } else if (re_password != password) {
            showMessage({
                message: 'Error',
                description: 'Password not match !',
                type: 'warning',
            });
        } else {
            this.register();
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />

                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TouchableWithoutFeedback
                        style={styles.container}
                        onPress={Keyboard.dismiss}>

                        <View style={styles.container}>
                            <View style={styles.header}>
                                <Image
                                    style={styles.logo}
                                    source={require("../assets/welcome.png")}
                                />
                            </View>
                            <Logo />
                            <FlashMessage position='top' hideOnPress={true} autoHide={false} animated={true}/>
                            <View style={styles.loginInfo}>
                                <View style={styles.loginInfoSection}>
                                    <Image
                                        source={require("../assets/mail.png")}
                                        style={styles.inputImage}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email address"
                                        placeholderTextColor="rgba(255,255,255,0.8)"
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        autoCorrect={false}
                                        onSubmitEditing={() => this.password.focus()}
                                        onChangeText={(email) => this.setState({ email })}
                                        value={this.state.email}
                                    />
                                </View>
                                <View style={styles.loginInfoSection}>
                                    <Image
                                        source={require("../assets/pass.png")}
                                        style={styles.inputImage}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Password"
                                        placeholderTextColor="rgba(255,255,255,0.8)"
                                        keyboardType="email-address"
                                        returnKeyType="go"
                                        secureTextEntry={true}
                                        autoCorrect={false}
                                        ref={input => (this.password = input)}
                                        onSubmitEditing={() => this.re_password.focus()}
                                        onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password}
                                    />
                                </View>

                                <View style={styles.loginInfoSection}>
                                    <Image
                                        source={require("../assets/pass.png")}
                                        style={styles.inputImage}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Password"
                                        placeholderTextColor="rgba(255,255,255,0.8)"
                                        keyboardType="email-address"
                                        returnKeyType="go"
                                        secureTextEntry={true}
                                        autoCorrect={false}
                                        ref={input => (this.re_password = input)}
                                        onChangeText={(re_password) => this.setState({ re_password })}
                                        value={this.state.re_password}
                                    />
                                </View>

                                <TouchableOpacity style={styles.btnRegister} onPress={() => { this.validate() }}>
                                    <Text style={styles.textButton}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.signin}>
                                <Text style={styles.text}>
                                    Already have an account ?
                                    <Text style={{ color: "blue" }} onPress={() => { navigate("Login") }}> Login </Text>
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}
