import { useState } from "react";
import { useContractRead } from "wagmi";
// import "./abi/abi.json";

export function WagmiRead() {
  const { data, error, isLoading, refetch } = useContractRead({
    address: "0xe879e502243664963a7784df19b3f9b6bd4e4833", // The address of the contract
    abi: [
      {
        inputs: [],
        name: "decrement",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getLastAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "increment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "lastAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "number",
        outputs: [{ internalType: "int256", name: "", type: "int256" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "getLastAddress",
    watch: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Access the data returned by the contract read operation
  console.log(data);
  const [count, setCount] = useState(0);

  return (
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
      {data} yes
      <button
        onClick={() => {
          refetch();
        }}
      >
        refetch
      </button>
    </div>
  );
}
