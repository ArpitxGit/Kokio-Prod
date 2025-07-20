import { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import React from "react";

interface LockScreenProps {
  visible: boolean;
  onUnlockSuccess: () => void;
  onUnlock:()=>void
}

const LockScreen: React.FC<LockScreenProps> = ({
  visible,
  onUnlock
}) => {

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Kokio is locked!</Text>
          <Text style={styles.subtitle}>
            Authentication is required to access the Kokio app
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={onUnlock}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Unlock</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LockScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#18181B",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#D1D5DB",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: "#27272A",
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 64,
  },
  buttonText: {
    color: "#fff", 
    fontWeight: "bold",
    fontSize: 20,
  },
});
