/**
 * ✅ Open/Closed Principle (OCP)
 *
 * Components should be open for extension (via props or composition),
 * but closed for modification (don't rewrite the component just to change behavior).
 *
 * ✅ Principio Abierto/Cerrado 
 * 
 * Los componentes deben estar abiertos a extensión (por props o composición),
 * pero cerrados a modificación (no reescribas el componente solo para cambiar su comportamiento).
 */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Base Notification component (closed for modification)
interface NotificationProps {
    message: string;
    backgroundColor: string;
    icon: string;
}

const Notification: React.FC<NotificationProps> = ({ message, backgroundColor, icon }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

// ✅ Extended Notification Components (open for extension)
export const EmailNotification = ({ message }: { message: string }) => (
    <Notification message={message} backgroundColor="#e3f2fd" icon="📧" />
);

export const SMSNotification = ({ message }: { message: string }) => (
    <Notification message={message} backgroundColor="#f3e5f5" icon="📱" />
);

export const PushNotification = ({ message }: { message: string }) => (
    <Notification message={message} backgroundColor="#fff3e0" icon="🔔" />
);

// ✅ Example usage
export default function App() {
    const [current, setCurrent] = React.useState<"email" | "sms" | "push">("email");

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Open/Closed Principle</Text>

            {current === "email" && <EmailNotification message="Welcome to the app!" />}
            {current === "sms" && <SMSNotification message="Your code is 1234" />}
            {current === "push" && <PushNotification message="You have a new message!" />}

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => setCurrent("email")} style={styles.button}>
                    <Text>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrent("sms")} style={styles.button}>
                    <Text>SMS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrent("push")} style={styles.button}>
                    <Text>Push</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

/**
 * ✅ What does this example do?
 *
 * `Notification` is a base component closed to modification.
 *
 * We create `EmailNotification`, `SMSNotification`, and `PushNotification` without modifying the original component, just by passing different props.
 *
 * The Open/Closed Principle is applied through composition and reuse.
 */

/**
 * ✅ ¿Qué hace este ejemplo?
 *
 * `Notification` es un componente base cerrado a modificación.
 *
 * Creamos `EmailNotification`, `SMSNotification`, y `PushNotification` sin modificar el componente original, solo pasándole props distintas.
 *
 * El principio de Open/Closed se aplica gracias a composición y reutilización.
 */

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    container: {
        flexDirection: "row",
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
    },
    icon: {
        fontSize: 24,
        marginRight: 10,
    },
    message: {
        fontSize: 16,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#eee",
        padding: 10,
        borderRadius: 8,
    },
});
