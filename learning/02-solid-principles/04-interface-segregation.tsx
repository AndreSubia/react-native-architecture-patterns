/**
 * ✅ Interface Segregation Principle (ISP)
 *
 * Clients should not be forced to depend on interfaces they do not use.
 * Divide large interfaces into smaller, more specific ones.
 *
 * ✅ Principio de segregación de interfaz
 *
 * Los clientes no deben depender de interfaces que no usan.
 * Divide las interfaces grandes en otras más pequeñas y específicas.
 */

import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

/**
 * ❌ Bad: One giant interface for all kinds of forms
 *  Malo: Una interfaz gigante para todo tipo de formularios
 */
interface FullFormProps {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  onReset: () => void;
  onUpload?: () => void;
}

/**
 * ✅ Good: Split into smaller, focused interfaces
 *  Bueno: Divide en interfaces más pequeñas y enfocadas
 */
interface BaseFormProps {
  value: string;
  onChange: (text: string) => void;
}

interface SubmitProps {
  onSubmit: () => void;
}

interface ResetProps {
  onReset: () => void;
}

interface UploadProps {
  onUpload: () => void;
}

/**
 * ✅ Usage example: SimpleForm only cares about typing and submitting
 *  Ejemplo de uso: SimpleForm solo se preocupa por escribir y enviar
 */
type SimpleFormProps = BaseFormProps & SubmitProps;

export function SimpleForm({ value, onChange, onSubmit }: SimpleFormProps) {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={onChange} style={styles.input} />
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
}

/**
 * ✅ Usage example: UploadForm uses upload and reset too
 *  Ejemplo de uso: UploadForm también usa subir y reiniciar
 */
type UploadFormProps = BaseFormProps & SubmitProps & UploadProps & ResetProps;

export function UploadForm({
  value,
  onChange,
  onSubmit,
  onUpload,
  onReset,
}: UploadFormProps) {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={onChange} style={styles.input} />
      <Button title="Upload file" onPress={onUpload} />
      <Button title="Reset" onPress={onReset} />
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
}

/**
 * ✅ What does this example demonstrate?
 * Each form component uses only the interfaces it needs.
 * This avoids bloated props and respects the Interface Segregation Principle.
 *
 * ✅ ¿Qué demuestra este ejemplo?
 * Cada componente de formulario usa solo las interfaces que necesita.
 * Esto evita props innecesarias y respeta el Principio de Segregación de Interfaces.
 */

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 8,
  },
  input: {
    borderColor: "#aaa",
    borderWidth: 1,
    padding: 8,
  },
});
