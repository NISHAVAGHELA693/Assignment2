import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { BG1, email, password } from './assests';
import Scale from './Scale';
import TextInputFields from './TextInput';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class TxtForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            emailError: null,
            passwordError: null,
        };
    }

    handleEmailChange = (text) => {
        this.setState({ email: text, emailError: null });
    };

    handlePasswordChange = (text) => {
        this.setState({ password: text, passwordError: null });
    };

    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    validatePassword = (password) => {
        const passwordRegex = /^.{8,}$/;
        return passwordRegex.test(password);
    };

    handleLoginLoginBtn = async () => {
        const { email, password } = this.state;
        this.setState({ emailError: null, passwordError: null });

        if (!this.validateEmail(email)) {
            this.setState({ emailError: "Invalid email address" });
            return;
        }

        if (!this.validatePassword(password)) {
            this.setState({ passwordError: "Enter your Password" });
            return;
        }

        try {
            const storedEmail = await AsyncStorage.getItem('email');
            const storedPassword = await AsyncStorage.getItem('password');

            if (email === storedEmail && password === storedPassword) {
                Alert.alert("Login successfully");
                this.props.navigation.navigate('Home');
            } else {
                Alert.alert("Invalid credentials");
            }

        } catch (error) {
            console.error("Error fetching data from local storage:", error);
        }
    };

    render() {
        return (
            <>
                <Header />
                <ImageBackground source={BG1} style={styles.ImageBackground}>
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.Txt}>Login your Account</Text>
                            <TextInputFields
                                placeholder="Email"
                                autoCapitalize="none"
                                iconSource={email}
                                value={this.state.email}
                                onChangeText={this.handleEmailChange}
                            />
                            {this.state.emailError && <Text style={styles.errorText}>{this.state.emailError}</Text>}
                            <TextInputFields
                                placeholder="Password"
                                autoCapitalize="none"
                                iconSource={password}
                                value={this.state.password}
                                onChangeText={this.handlePasswordChange}
                                secureTxt={true}
                            />
                            {this.state.passwordError && <Text style={styles.errorText}>{this.state.passwordError}</Text>}
                            <View style={styles.signUpView}>
                                <Text style={styles.Txt}>Don't have any account? </Text>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('SignUpForm')}>
                                    <Text>signUp</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: "center", marginTop: Scale(30) }}>
                                <TouchableOpacity style={styles.LoginBtn} onPress={this.handleLoginLoginBtn}>
                                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: Scale(14) }}>
                                        LOGIN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </>
        );
    }
}

const styles = StyleSheet.create({
    ImageBackground: {
        resizeMode: "contain",
        height: "100%",
        width: "100%",
        justifyContent: "center"
    },
    container: {
        width: Scale(345),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: Scale(5),
        marginBottom: Scale(50)
    },
    LoginBtn: {
        width: Scale(144),
        height: Scale(44),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Scale(4),
        backgroundColor: "#5E72E4",
    },
    inputContainer: {
        backgroundColor: "#F4F5F7",
        width: Scale(345),
        padding: Scale(20)
    },
    Txt: {
        color: "#8898AA",
        fontWeight: "400",
        textAlign: "center"
    },
    errorText: {
        color: "red",
        marginTop: Scale(5)
    },
    signUpView: {
        marginTop: Scale(10),
        flexDirection: "row"
    }
});

