/**
 * ✅ Dependency Inversion Principle (DIP)
 *
 * High-level modules should not depend on low-level modules.
 * Both should depend on abstractions.
 *
 * ✅ Principio de Inversión de Dependencias
 *
 * Los módulos de alto nivel no deben depender de módulos de bajo nivel.
 * Ambos deben depender de abstracciones.
 */

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

/**
 * ✅ Abstraction: NotificationService interface
 *    Abstracción: interfaz NotificationService
 */
interface NotificationService {
  send(message: string): void;
}

/**
 * ✅ Low-level module: concrete implementation using push
 *    Módulo de bajo nivel: implementación concreta usando push
 */
class PushNotificationService implements NotificationService {
  send(message: string) {
    console.log(`Push notification sent: ${message}`);
  }
}

/**
 * ✅ Low-level module: another implementation using SMS
 *    Otro módulo de bajo nivel: implementación concreta con SMS
 */
class SMSNotificationService implements NotificationService {
  send(message: string) {
    console.log(`SMS sent: ${message}`);
  }
}

/**
 * ✅ High-level component depends on abstraction, not implementation
 *    Componente de alto nivel depende de una abstracción, no de una implementación concreta
 */
interface Props {
  notifier: NotificationService;
}

export function NotifyButton({ notifier }: Props) {
  const handleNotify = () => {
    notifier.send("Hello from NotifyButton!");
  };

  return (
    <View style={styles.container}>
      <Button title="Send Notification" onPress={handleNotify} />
    </View>
  );
}

/**
 * ✅ Usage Example
 *    Ejemplo de uso
 */
export function DIPExampleScreen() {
  const pushNotifier = new PushNotificationService();
  const smsNotifier = new SMSNotificationService();

  return (
    <View style={styles.screen}>
      <Text>Push Notifier:</Text>
      <NotifyButton notifier={pushNotifier} />

      <Text>SMS Notifier:</Text>
      <NotifyButton notifier={smsNotifier} />
    </View>
  );
}

/**
 * ✅ What does this example demonstrate?
 * The NotifyButton component is reusable with any notification system.
 * It follows DIP by depending on the `NotificationService` interface, not on the concrete classes.
 *
 * ✅ ¿Qué demuestra este ejemplo?
 * El componente NotifyButton es reutilizable con cualquier sistema de notificación.
 * Sigue el principio DIP al depender de la interfaz `NotificationService`, no de las clases concretas.
 */

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  screen: {
    padding: 16,
    gap: 12,
  },
});
