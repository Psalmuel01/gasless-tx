import {
  ConnectWallet,
  Web3Button,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useState } from "react";
import { abi } from "./constants/abi";

export default function Home() {
  const counterAddress = "0x6e73e8D0625D563E0c43a41d65FA8B79AE284d36";
  const { contract } = useContract(counterAddress);
  const [lastUser, setLastUser] = useState("");
  const { data, error, isLoading } = useContractRead(
    contract,
    "getLastAddress",
    []
  );
  const { data: countData } = useContractRead(contract, "number", []);
  const getAddr = () => {
    if (error) {
      console.error("failed to read contract", error);
    }
    console.log(data);
    setLastUser(data);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="connect">
          <ConnectWallet
            switchToActiveChain={true}
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
          />
        </div>

        <div className="header">
          <h1 className="title">
            Explore <span className="gradientText0">gasless transactions.</span>
          </h1>

          <span className="last">Last User Address: {lastUser}</span>
        </div>

        <div className="functions">
          <Web3Button
            contractAddress={counterAddress}
            action={() => mutateAsync({ args: [] })}
          >
            increment
          </Web3Button>

          <Web3Button
            contractAddress={counterAddress}
            action={(contract) => contract.call("decrement")}
          >
            decrement
          </Web3Button>

          <h1>Count: {Number(countData)}</h1>

          <button className="button" onClick={getAddr}>
            show LastUser
          </button>
        </div>
      </div>
    </main>
  );
}
