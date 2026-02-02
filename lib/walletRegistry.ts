// TODO ,  while fetching wallet from API

// import Constants from "expo-constants";
// import { AppExtraConfig } from "@/appKeys";

export type WalletInfo = {
  id: string;
  name: string;
  image_url: string;
  mobile_link?: string;
  universal_link?: string;
};

// const extra = Constants.expoConfig?.extra as AppExtraConfig;
// const projectId = extra.reownProjectId || "";

// export async function fetchWallets(): Promise<WalletInfo[]> {
//   if (!projectId) {
//     console.warn("WalletConnect projectId not set");
//     return [];
//   }

//   try {
//     const res = await fetch(
//       `https://explorer.walletconnect.com/v3/wallets?projectId=${projectId}`
//     );
//     const json = await res.json();
//     return json.listings ? Object.values(json.listings) : [];
//   } catch (err) {
//     console.error("Failed to fetch WalletConnect wallets:", err);
//     return [];
//   }
// }
