import Constants from "expo-constants";
import {IProviderMetadata} from '@walletconnect/modal-react-native';

import { AppExtraConfig } from "@/appKeys";
import { WC_BASE_SEPOLIA } from "@/constants/general.constants";

const extra = Constants.expoConfig?.extra as AppExtraConfig;
const PROJECT_ID = extra.reownProjectId as string || "";

const providerMetadata: IProviderMetadata = {
  name: "KOKI'O",
  description: "External wallet checkout",
  url: "https://kokio.app",
  icons: [],
  redirect: {
    native: "kokio://"
  },
}

const sessionParams = {
  namespaces: {
    eip155: {
      chains: [WC_BASE_SEPOLIA],
      methods: ["personal_sign", "eth_sendTransaction"],
      events: ["accountsChanged", "chainChanged"],
      rpcMap: {},
    },
  },
};

export default {
  PROJECT_ID,
  providerMetadata,
  sessionParams,
};