/**
 * ✅ Liskov Substitution Principle (LSP)
 *
 * Subtypes must be substitutable for their base types without altering the behavior of the program.
 *
 * ✅ Principio de sustitución de Liskov 
 * 
 * Los subtipos deben ser sustituibles por sus tipos base sin alterar el comportamiento del programa.
 */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// ✅ Base component / Componente base
interface ButtonProps {
    label: string;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.baseButton}>
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
);

// ✅ Extended buttons that can substitute the base Button / Botones extendidos que pueden sustituir al botón base
const PrimaryButton: React.FC<ButtonProps> = (props) => (
    <TouchableOpacity onPress={props.onPress} style={[styles.baseButton, styles.primary]}>
        <Text style={[styles.label, styles.white]}>{props.label}</Text>
    </TouchableOpacity>
);

const DangerButton: React.FC<ButtonProps> = (props) => (
    <TouchableOpacity onPress={props.onPress} style={[styles.baseButton, styles.danger]}>
        <Text style={[styles.label, styles.white]}>{props.label}</Text>
    </TouchableOpacity>
);

// ✅ Usage / Uso
export default function App() {
    const handlePress = (type: string) => {
        console.log(`Pressed: ${type}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liskov Substitution Principle</Text>

            {/* These buttons can be used in place of the base Button / Estos botones pueden sustituir al botón base */}
            <Button label="Default" onPress={() => handlePress("default")} />
            <PrimaryButton label="Primary" onPress={() => handlePress("primary")} />
            <DangerButton label="Danger" onPress={() => handlePress("danger")} />
        </View>
    );
}

/**
 * ✅ What does this example represent?
 *
 * - `Button` is the base component.
 * - `PrimaryButton` and `DangerButton` implement the same interface and can replace the base button.
 * - All of them behave the same from the consumer’s point of view: they accept `label` and `onPress`, and comply with the contract.
 */

/**
 * ✅ ¿Qué representa este ejemplo?
 *
 * - `Button` es el componente base.
 * - `PrimaryButton` y `DangerButton` implementan la misma interfaz y pueden sustituir al botón base.
 * - Todos se comportan igual desde el punto de vista del consumidor: aceptan `label` y `onPress`, y cumplen con el contrato.
 */

const styles = StyleSheet.create({
    container: {
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
    baseButton: {
        padding: 12,
        borderRadius: 6,
        backgroundColor: "#ddd",
        marginBottom: 10,
    },
    primary: {
        backgroundColor: "#007bff",
    },
    danger: {
        backgroundColor: "#dc3545",
    },
    label: {
        textAlign: "center",
        fontSize: 16,
    },
    white: {
        color: "#fff",
    },
});
