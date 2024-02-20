import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BG1, email, password,userIcon } from './assests';
import Scale from './Scale';
import TextInputFields from './TextInput';

const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const storedData = await AsyncStorage.getItem('@userData:key');
            if (storedData !== null) {
                setData(JSON.parse(storedData));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const validateInputs = () => {
        let isValid = true;

        if (!nameInput.trim()) {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!emailInput.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!passwordInput.trim()) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const saveData = async () => {
        if (validateInputs()) {
            try {
                const newData = [...data, { id: Date.now(), name: nameInput, email: emailInput, password: passwordInput }];
                await AsyncStorage.setItem('@userData:key', JSON.stringify(newData));
                setData(newData);
                clearInputs();
            } catch (error) {
                console.error('Error saving data:', error);
            }
        }
    };

    const updateData = async (id) => {
        if (validateInputs()) {
            try {
                const updatedData = data.map(item =>
                    item.id === id ? { ...item, name: nameInput, email: emailInput, password: passwordInput } : item
                );
                await AsyncStorage.setItem('@userData:key', JSON.stringify(updatedData));
                setData(updatedData);
                clearInputs();
            } catch (error) {
                console.error('Error updating data:', error);
            }
        }
    };

    const deleteData = async (id) => {
        try {
            const newData = data.filter(item => item.id !== id);
            await AsyncStorage.setItem('@userData:key', JSON.stringify(newData));
            setData(newData);
            clearInputs();
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const clearInputs = () => {
        setNameInput('');
        setEmailInput('');
        setPasswordInput('');
        setNameError('');
        setEmailError('');
        setPasswordError('');
    };

    return (
        <ImageBackground source={BG1} style={styles.ImageBackground}>
            <View style={styles.container}>
                <Text style={styles.crudTxt}>CRUD Example with AsyncStorage</Text>
                <TextInputFields
                    autoCapitalize="none"
                    iconSource={userIcon}
                    placeholder="Name"
                    value={nameInput}
                    onChangeText={(text) => setNameInput(text)}
                />
                {nameError && <Text style={styles.errorText}>{nameError}</Text>}
                <TextInputFields
                    placeholder="Email"
                    autoCapitalize="none"
                    iconSource={email}
                    value={emailInput}
                    onChangeText={(text) => setEmailInput(text)}
                />
                {emailError && <Text style={styles.errorText}>{emailError}</Text>}
                <TextInputFields
                    placeholder="Password"
                    autoCapitalize="none"
                    iconSource={password}
                    value={passwordInput}
                    onChangeText={(text) => setPasswordInput(text)}
                    secureTxt={true}
                />
                {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
                <View style={styles.buttonContainer}>
                    <Button title="Save" onPress={saveData} />
                    <Button title="Update" onPress={() => updateData(data[0]?.id)} />
                    <Button title="Delete" onPress={() => deleteData(data[0]?.id)} />
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.crudTxtItem}>{`Name: ${item.name}`}</Text>
                            <Text style={styles.crudTxtItem}>{`Email: ${item.email}`}</Text>
                            <Text style={styles.crudTxtItem}>{`Password: ${item.password}`}</Text>
                        </View>
                    )}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop:Scale(20)
    },
    listItem: {
        marginBottom: 10,
    },
    ImageBackground: {
        resizeMode: "contain",
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    crudTxt: {
        fontWeight: "700",
        color: "#ffff",
        marginVertical: Scale(20)
    },
    crudTxtItem: {
        fontWeight: "700",
        color: "#ffff",
        marginTop: Scale(10)
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        textAlign:"left"
    },
});

export default HomeScreen;
