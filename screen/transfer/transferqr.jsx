"use client";
import { useSearchParams } from "next/navigation";

export default function ScreenTransferQR() {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount");
  const wallet = searchParams.get("wallet");

  return (
    <div>
      <div className="text-black">
        <h3>{amount}</h3>
        <h3>{wallet}</h3>
      </div>
    </div>
  );
}
