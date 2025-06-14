/**
 * ✅ Single Responsibility Principle (SRP)
 * *
 * A class or module should have only one reason to change.
 * In React Native, this often means separating UI, business logic, and data handling.
 *
 * ✅ Principio de Responsabilidad Única
 * 
 * En React Native, esto significa separar la interfaz, la lógica de negocio y el manejo de datos.
 * Un componente o clase debe tener una sola razón para cambiar.
 * 
 */

import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
};

// ❌ Bad Example: This component handles UI, fetching and formatting user data
// ❌ Mal ejemplo: Este componente maneja la interfaz, la obtención y el formateo de datos

const BadUserProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, []);

  if (!user) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.avatar} />
      <Text>{`${user.name.first} ${user.name.last}`}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

// ✅ Good Example: Separate concerns into reusable components and hooks
// ✅ Buen ejemplo: Separar responsabilidades en componentes y hooks reutilizables

// 📌 Hook: responsible for fetching user data (SRP: data fetching only)
// 📌 Hook: responsable de obtener datos del usuario (SRP: solo obtención de datos)
const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      });
  }, []);

  return { user, loading };
};

// 📌 UI Component: only responsible for rendering UI (SRP: presentation only)
// 📌 Componente UI: solo responsable de renderizar la UI (SRP: solo presentación)
const UserProfile = () => {
  const { user, loading } = useUser();

  if (loading) return <ActivityIndicator />;

  if (!user) return null;

  return (
    <UserCard
      name={`${user.name.first} ${user.name.last}`}
      email={user.email}
      avatar={user.picture.large}
    />
  );
};

// 📌 Presentational Component: clean and focused only on displaying data
// 📌 Componente de presentación: limpio y enfocado solo en mostrar datos
const UserCard = ({
  name,
  email,
  avatar,
}: { name: string; email: string; avatar: string }) => (
  <View style={styles.container}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text>{name}</Text>
    <Text>{email}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default UserProfile;
