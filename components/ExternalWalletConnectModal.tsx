import React from "react";
import { Modal, View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { WalletInfo } from "@/lib/walletRegistry";

const ExternalWalletConnectModal = ({
  visible,
  wallets,
  onSelect,
  onClose,
}: {
  visible: boolean;
  wallets: WalletInfo[];
  onSelect: (wallet: WalletInfo) => void;
  onClose: () => void;
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)" }}>
        <View
          style={{
            marginTop: "auto",
            backgroundColor: "#1C1C1E",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 18, color: "white", marginBottom: 12 }}>
            Connect Wallet
          </Text>

          <FlatList
            data={wallets}
            keyExtractor={(w) => w.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onSelect(item)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 12,
                }}
              >
                <Image
                  source={{ uri: item.image_url }}
                  style={{ width: 32, height: 32, marginRight: 12 }}
                />
                <Text style={{ color: "white", fontSize: 16 }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity onPress={onClose}>
            <Text style={{ color: "#FF453A", textAlign: "center", marginTop: 12 }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ExternalWalletConnectModal;
