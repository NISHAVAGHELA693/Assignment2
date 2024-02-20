import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { BG1, email, password, userIcon,menu,Notification,Bin} from './assests';
import Scale from './Scale';
import TextInputFields from './TextInput';
import Header from './Header';
export default class txtForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            emailError: null,
            passwordError: null,
            nameError: null,
        };
    }
    handleEmailChange = (text) => {
        this.setState({ email: text, emailError: null });
    };
    handleNameChange = (text) => {
        this.setState({ name: text, nameErrorError: null });
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

    handleCreateAccount = () => {
        const { name, email, password } = this.state;
        this.setState({ emailError: null, passwordError: null, nameError: null });
        if (!name.trim()) {
            this.setState({ nameError: "Name is required" });
            return;
        }
        if (!this.validateEmail(email)) {
            this.setState({ emailError: "Invalid email address" });
            return;
        }

        if (!this.validatePassword(password)) {
            this.setState({ passwordError: "Invalid password. It should be at least 8 characters long." });
            return;
        }
        console.log("Account created successfully");
    };
    render() {
        return (
            <ImageBackground source={BG1} style={styles.ImageBackground}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.txt}>SignUp Your Account</Text>
                        <TextInputFields
                            placeholder="Enter Your Name"
                            autoCapitalize="none"
                            iconSource={userIcon}
                            value={this.state.name}
                            onChangeText={this.handleNameChange}
                        />
                        {this.state.nameError && <Text style={styles.errorText}>{this.state.nameError}</Text>}
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
                        <View style={styles.LoginUpView}>
                            <Text style={styles.txt}>Already have an account? </Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('LoginForm')}>
                                <Text>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", marginTop: Scale(50) }}>
                            <TouchableOpacity style={styles.ACCOUNT} onPress={this.handleCreateAccount}>
                                <Text style={styles.btnTxt}>
                                    CREATE ACCOUNT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        )
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
    },
    ACCOUNT: {
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
        marginTop: Scale(30),
        padding: Scale(20)
    },
    txt: {
        color: "#8898AA",
        fontWeight: "400",
        textAlign: "center"
    },
    errorText: {
        color: "red",
        marginTop: Scale(5)
    },
    LoginUpView: {
        marginTop: Scale(10),
        flexDirection: "row"
    },
    btnTxt: {
        color: "#fff",
        fontWeight: "700",
        fontSize: Scale(14)
    }

})
