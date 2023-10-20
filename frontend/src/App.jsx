import { useState } from "react";
import "./App.css";
import { useContractRead, useContractWrite, useWalletClient } from "wagmi";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { base } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { getContract } from "viem";
import { WagmiRead } from "./Counter";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [base],
  [
    alchemyProvider({ apiKey: "Zi_F-3fTztPtozvm58nBdd21noBes10h" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "gasless tx",
  projectId: "7631c1e9ac015cfd448ea3222d7e7244",
  chains,
});
const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  // webSocketPublicClient,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WagmiConfig config={config}>
        <RainbowKitProvider coolMode chains={chains}>
          <ToastContainer />
          <Header />
          <WagmiRead/>
          <div>
            <h1>Gasless Counter</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                Increase count
              </button>
              <button onClick={() => setCount((count) => count - 1)}>
                Decrease count
              </button>
              <button onClick={() => setCount((count) => count + 1)}>
                Get Last Address
              </button>
            </div>
            <p className="read-the-docs">Count is now {count}</p>
            <p className="read-the-docs">Last Address: {count}</p>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
