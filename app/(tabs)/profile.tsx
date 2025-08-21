import AsyncStorage from "@react-native-async-storage/async-storage"; // 1. Import AsyncStorage
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Profile = () => {
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const storageKey = "@user_name"; // 2. Define a key for storage

    // 3. Use useEffect to load data when the component mounts
    useEffect(() => {
        const loadName = async () => {
            try {
                const storedName = await AsyncStorage.getItem(storageKey);
                if (storedName !== null) {
                    setName(storedName);
                    setSubmitted(true); // Automatically set to submitted if a name is found
                }
            } catch (e) {
                console.error("Failed to load name from storage", e);
            }
        };

        loadName();
    }, []);

    const handleSave = async () => {
        try {
            await AsyncStorage.setItem(storageKey, name); // 4. Save the name
            setSubmitted(true);
        } catch (e) {
            console.error("Failed to save name to storage", e);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Profile</Text>
            {!submitted ? (
                <>
                    <Text style={styles.label}>What's your name?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor="#888"
                    />
                    <Button
                        title="Save"
                        onPress={handleSave} // 5. Call the new save function
                        color="#F9A8D4"
                        disabled={!name.trim()}
                    />
                </>
            ) : (
                <View style={styles.profileBox}>
                    <Text style={styles.greeting}>Hello, {name}!</Text>
                    <Button
                        title="Edit"
                        onPress={() => setSubmitted(false)}
                        color="#F9A8D4"
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 32,
        letterSpacing: 1,
    },
    label: {
        fontSize: 18,
        color: "#000000",
        marginBottom: 8,
    },
    input: {
        width: 260,
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#F3F4F6",
        color: "#000000",
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#d984b3ff",
    },
    profileBox: {
        alignItems: "center",
        backgroundColor: "#e9e9e998",
        padding: 24,
        borderRadius: 12,
    },
    greeting: {
        fontSize: 22,
        color: "#000000ff",
        marginBottom: 16,
        fontWeight: "600",
    },
});

export default Profile;