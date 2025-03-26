// /src/lib/blockchainUtils.js

// 🎉 Fully Fake Blockchain Logs for hackathon

export const fetchTransactionLogs = async () => {
    // These logs will appear in Dean's wallet summary
    return [
      {
        purpose: "Sponsorship from ABC Corp",
        amount: "1.5",
        txHash: "0xabc1234fake1",
      },
      {
        purpose: "Registration Fees - TechFest",
        amount: "0.8",
        txHash: "0xdef5678fake2",
      },
      {
        purpose: "Sponsorship from XYZ Ltd.",
        amount: "2.0",
        txHash: "0xghi9101fake3",
      },
    ];
  };
  
  // 🟢 Fake real-time block number
  export const getLiveBlockNumber = async () => {
    // Just fake it visually 😉
    const randomBlock = 1200000 + Math.floor(Math.random() * 1000);
    return randomBlock;
  };
  