// import { useCallback, useEffect, useState } from "react";
// import { openBrowserAsync } from "expo-web-browser";
// import { getSignClient } from "../lib/reownWallet";

// export function useExternalWallet(BASE_CHAIN: string) {
//   const [session, setSession] = useState<any>(null);
//   const [address, setAddress] = useState<string | null>(null);
//   const [isConnecting, setIsConnecting] = useState(false);

//   /**
//    * Connect external wallet (called from toggle)
//    */
//   const connect = useCallback(async () => {
//     try {
//       setIsConnecting(true);

//       const signClient = await getSignClient();

//       const { uri, approval } = await signClient.connect({
//         requiredNamespaces: {
//           eip155: {
//             chains: [BASE_CHAIN],
//             methods: ["personal_sign"],
//             events: [],
//           },
//         },
//       });

//       if (uri) {
//         await openBrowserAsync(uri);
//       }

//       const session = await approval();

//       const account = session.namespaces.eip155.accounts[0];
//       const walletAddress = account.split(":")[2];

//       setSession(session);
//       setAddress(walletAddress);

//       return walletAddress;
//     } finally {
//       setIsConnecting(false);
//     }
//   }, [BASE_CHAIN]);

//   /**
//    * Disconnect external wallet
//    */
//   const disconnect = useCallback(async () => {
//     if (!session) return;

//     const signClient = await getSignClient();

//     await signClient.disconnect({
//       topic: session.topic,
//       reason: {
//         code: 6000,
//         message: "User disconnected external wallet",
//       },
//     });

//     setSession(null);
//     setAddress(null);
//   }, [session]);

//   /**
//    * Sign checkout message (called on Pay)
//    */
//   const signMessage = useCallback(
//     async (message: string) => {
//       if (!session || !address) {
//         throw new Error("External wallet not connected");
//       }

//       const signClient = await getSignClient();

//       return signClient.request({
//         topic: session.topic,
//         chainId: BASE_CHAIN,
//         request: {
//           method: "personal_sign",
//           params: [message, address],
//         },
//       });
//     },
//     [session, address, BASE_CHAIN]
//   );

//   /**
//    * Auto-hydrate existing WalletConnect session
//    */
//   useEffect(() => {
//     (async () => {
//       const signClient = await getSignClient();
//       const sessions = signClient.session.getAll();

//       if (sessions.length > 0) {
//         const existing = sessions[0];
//         const account = existing.namespaces.eip155.accounts[0];
//         const walletAddress = account.split(":")[2];

//         setSession(existing);
//         setAddress(walletAddress);
//       }
//     })();
//   }, []);

//   return {
//     isConnected: !!session,
//     isConnecting,
//     address,
//     connect,
//     disconnect,
//     signMessage,
//   };
// }
