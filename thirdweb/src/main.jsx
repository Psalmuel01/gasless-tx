import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "base-goerli";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      sdkOptions={{
        gasless: {
          biconomy: {
            apiKey: "XaAweoeKf.19f8ccc7-6308-4274-803d-f6b6eba587d1",
            apiId: "d9320968-c47c-47e4-bc5b-518088da871c",
            deadlineSeconds: 3600,
          },
        },
      }}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

// Issue
// invalid contract address or ENS name
