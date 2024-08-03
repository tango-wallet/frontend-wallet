"use client";
import { useSearchParams } from "next/navigation";

export default function ScreenTransferQR() {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount");
  const wallet = searchParams.get("wallet");

  return (
    <div className="text-black">
      <h1>Transfer</h1>
      <p>Wallet: {wallet}</p>
      <p>Amount: {amount}</p>
    </div>
  );
}
